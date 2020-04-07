<template>
	<div>
		<!-- 订单渲染组件 -->
		<div
			class="orders-item"
			v-for="(item, index) in lists"
			:key="item._id + index"
		>
			<van-row>
				<van-col span="5" class="order-title">订单号</van-col>
				<van-col class="order-text">{{ item._id }}</van-col>
			</van-row>
			<van-row>
				<van-col span="5" class="order-title">状态</van-col>
				<van-col
					class="order-text"
					:class="[
						{ red: item.status == 1 },
						{ blue: item.status == 2 },
						{ green: item.status == 3 }
					]"
				>
					{{
						item.status == 1 ? '待发货' : item.status == 2 ? '待收货' : '已完成'
					}}
				</van-col>
			</van-row>
			<van-row>
				<van-col span="5" class="order-title">地址信息</van-col>
				<van-col span="19" class="order-text">
					<van-row>
						<van-col span="6">{{ item.name }}</van-col>
						<van-col span="18">{{ item.tel }}</van-col>
					</van-row>
					<van-row>
						{{ item.address }}
					</van-row>
				</van-col>
			</van-row>
			<van-row class="goods-item" v-for="i in item.goodsList" :key="i.id">
				<van-col span="6">
					<img
						style="border: solid 1px transparent; border-radius: 8px;"
						:src="i.imgList[0].src"
						alt=""
					/>
				</van-col>
				<van-col span="18">
					<van-row>
						<van-col offset="2" class="order-text" style="font-weight: 600;">{{
							i.name
						}}</van-col>
					</van-row>
					<van-row>
						<van-col offset="2" class="order-text text-description">{{
							i.description
						}}</van-col>
					</van-row>
					<van-row>
						<van-col
							offset="2"
							span="6"
							class="order-text"
							style="color: #FE710A;"
							>￥{{ i.price | dealPrice }}</van-col
						>
						<van-col offset="12" class="order-text">x{{ i.num }}</van-col>
					</van-row>
				</van-col>
			</van-row>
			<van-row>
				<van-col span="4" class="order-title">合计</van-col>
				<van-col span="10" class="order-text"
					>￥{{ item.price | dealPrice }}</van-col
				>
				<van-col class="order-btn">
					<van-button
						v-if="item.status == 1"
						size="mini"
						type="info"
						@click="reminder(item._id, item.importance)"
						>催单</van-button
					>
					<van-button
						v-if="item.status == 1"
						size="mini"
						type="warning"
						@click="onDelete(item._id)"
						>取消</van-button
					>
					<van-button
						v-if="item.status == 2"
						size="mini"
						type="primary"
						@click="onUpdate(item._id)"
						>已收货</van-button
					>
					<van-button
						v-if="item.status == 3"
						size="mini"
						type="danger"
						@click="onClose(item._id)"
						>删除</van-button
					>
				</van-col>
			</van-row>
		</div>
	</div>
</template>
<script>
	import { reminder, deleteOrder, updateOrder, closeOrder } from '@/api/orders'
	export default {
		name: 'orderitem',
		data() {
			return {
				reminderFlag: false
			}
		},
		methods: {
			//催单
			reminder(id, importance) {
				if (!this.reminderFlag) {
					reminder({
						_id: id,
						importance: Number(importance)
					}).then(() => {
						this.reminderFlag = true
						this.$store.state.myalert.visible = true
						this.$store.state.myalert.msg = '催单请求已发送'
						setTimeout(() => {
							this.reminderFlag = false
						}, 3000)
					})
				} else {
					this.$store.state.myalert.visible = true
					this.$store.state.myalert.msg = '请求繁忙，请稍后再试！！！'
				}
			},
			//删除订单
			onDelete(id) {
				deleteOrder({ id }).then(() => {
					this.$emit('deleteItem', id)
					this.$store.state.myalert.visible = true
					this.$store.state.myalert.msg = '该订单已关闭'
				})
			},
			onClose(id) {
				closeOrder({ id }).then(() => {
					this.$emit('deleteItem', id)
					this.$store.state.myalert.visible = true
					this.$store.state.myalert.msg = '该订单已关闭'
				})
			},
			//已收货，更改订单状态
			onUpdate(id) {
				updateOrder({ id }).then(() => {
					this.$emit('updateItem', id)
					this.$store.state.myalert.visible = true
					this.$store.state.myalert.msg = '收获成功'
				})
			}
		},
		props: {
			lists: {
				type: Array,
				required: true
			}
		}
	}
</script>
<style lang="scss" scoped>
	.orders-item {
		width: 94%;
		padding: 8px;
		margin: 30px auto 0;
		border: solid 1px rgba($color: #000000, $alpha: 0);
		border-radius: 6px;
		background-color: rgba($color: white, $alpha: 0.6);
	}
	.order-title {
		font-size: 13px;
		font-weight: bold;
	}
	.goods-item {
		width: 100%;
		padding: 10px;
		margin: 5px auto;
		border: solid 1px rgba($color: #000000, $alpha: 0);
		border-radius: 6px;
		background-color: rgba($color: lightgrey, $alpha: 0.4);
	}
	.red {
		color: #ee0a24;
	}
	.green {
		color: #07c160;
	}
	.blue {
		color: #1989fa;
	}
	.order-btn {
		float: right;
	}
	.msg-enter-active {
		transition: all 0.5s;
		opacity: 1;
		transform: translateY(0px);
	}
	.msg-leave-active {
		transition: all 0.5s;
		opacity: 1;
		transform: translateY(0px);
	}
	.msg-enter {
		opacity: 0;
		transform: translateY(-30px);
	}
	.msg-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
	.text-description {
		position: relative;
		line-height: 20px;
		max-height: 40px;
		overflow: hidden;
	}
	.text-description::after {
		content: '...';
		position: absolute;
		bottom: 0;
		right: 0;
		padding-left: 40px;
		background: -webkit-linear-gradient(left, transparent, #e8e8e8 55%);
		background: -o-linear-gradient(right, transparent, #e8e8e8 55%);
		background: -moz-linear-gradient(right, transparent, #e8e8e8 55%);
		background: linear-gradient(to right, transparent, #e8e8e8 55%);
	}
</style>

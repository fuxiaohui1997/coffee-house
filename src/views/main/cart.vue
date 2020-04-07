<template>
	<div style="width: 100%; height: 100%;">
		<!-- 标题部分 -->
		<van-row class="title">购物车</van-row>
		<van-row class="not-goods" v-if="!$store.state.user.token">
			<needLogin></needLogin>
		</van-row>
		<van-row class="goods" v-if="$store.state.user.token">
			<div>
				<!-- 若无购物车商品 -->
				<div v-if="!lists.length">
					<van-button
						style="background-color: transparent; border: none;"
						type="default"
						>空空如也，去逛逛！</van-button
					>
					<!-- 推荐 -->
					<recommend></recommend>
				</div>
				<!-- 渲染商品列表 -->
				<div v-for="(item, index) in lists" :key="index">
					<van-card
						:price="item.price"
						:desc="item.description"
						:title="item.name"
						:thumb="item.imgList[0].src"
					>
						<div slot="tags">
							<van-tag plain @click="item.num <= 1 ? 1 : item.num--">-</van-tag>
							<input type="text" v-model="item.num" class="num" />
							<van-tag plain @click="item.num++">+</van-tag>
						</div>
						<div slot="footer">
							<van-checkbox
								class="checkboxbutton"
								v-model="item.isSelect"
							></van-checkbox>
							<van-button
								size="mini"
								@click="del(index, item.id)"
								class="delbutton"
								>删除</van-button
							>
						</div>
					</van-card>
				</div>
			</div>
		</van-row>
		<!-- 底部提交导航 -->
		<van-submit-bar
			:price="sum * 100"
			button-text="提交订单"
			@submit="onSubmit"
			v-if="$store.state.user.token"
		>
			<van-checkbox v-model="checkAll">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import { deleteCart } from '@/api/cart'
	import Recommend from '../../components/myPublic/recommend'
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('cart')
	import needLogin from '../../components/person/logout'
	export default {
		data: function() {
			return {
				lists: [] //购物车列表
			}
		},
		created() {
			this.$store.state.cart.num = '' //清除购物车商品变动提示红点
			this.lists = Object.assign([], this.goodslists) //获取购物车列表
		},
		methods: {
			// 删除功能
			async del(index, id) {
				await deleteCart({ user: this.$store.state.user.token, id: id })
				this.$store.commit('cart/DELETE_GOODS', index)
				this.lists.splice(index, 1)
			},
			onSubmit() {
				if (!this.$store.state.user.token) {
					this.$toast('请先登录')
				}
				this.$router.push('/order')
			}
		},
		computed: {
			...mapState({
				goodslists: state => state.lists
			}),
			checkAll: {
				get() {
					// 第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
					return this.lists.every(item => {
						return item.isSelect //只有选项中全部为true，返回true。只要有一个false，返回false
					})
				},
				set(value) {
					// 遍历所有数据中选项。
					this.lists.forEach(item => {
						return (item.isSelect = value)
					})
				}
			},
			sum() {
				return this.lists.reduce((total, item) => {
					// 判断选项
					if (!item.isSelect) return total //false不让计算总价格
					return total + parseInt(item.price) * parseInt(item.num) //总价格
				}, 0) //总价格默认参数值为0
			}
		},
		components: {
			needLogin,
			Recommend
		}
	}
</script>

<style lang="scss" scoped>
	.recommend-goods {
		width: 100%;
		background-color: #f8f8f8;
		border: solid 1px transparent;
		border-radius: 8px;
		padding: 10px;
	}
	.title {
		background-color: rgba($color: #e8e8e8, $alpha: 0.4);
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 16px;
		text-align: center;
		border: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
	.goods {
		position: absolute;
		top: 40px;
		bottom: 50px;
		width: 100%;
		overflow: scroll;
		background-color: rgba($color: #e8e8e8, $alpha: 0.4);
	}
	.not-goods {
		position: absolute;
		top: 40px;
		bottom: 0px;
		width: 100%;
		overflow: scroll;
		background-color: rgba($color: #e8e8e8, $alpha: 0.4);
	}
	.van-card {
		width: 94%;
		margin: 0 auto 15px;
		border: solid 1px transparent;
		border-radius: 6px;
		padding-left: 30px;
	}
	.van-submit-bar {
		position: absolute;
		bottom: 0px;
		background-color: rgba($color: #e8e8e8, $alpha: 0.4);
	}
	.checkboxbutton {
		position: absolute;
		top: 50%;
		left: 5px;
		margin-top: -10px;
	}
	.delbutton {
		position: absolute;
		right: 20px;
		bottom: 5px;
	}
	.num {
		width: 30px;
		text-align: center;
		font-size: 16px;
	}
	.advert-title {
		position: relative;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 10px;
		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 40px;
			height: 10px;
			top: -10%;
			left: 50%;
			margin-left: 40px;
			border-bottom: solid 1px black;
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			width: 35px;
			height: 10px;
			top: -10%;
			right: 50%;
			margin-right: 40px;
			border-bottom: solid 1px black;
		}
	}
</style>

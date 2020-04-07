<template>
	<div style="height:100%;width:100%;">
		<!-- 标题 -->
		<van-row class="title">
			<van-col span="3">
				<van-button
					style="background-color:transparent; border: none; height:100%;"
					@click="$router.push('/person')"
					type="default"
				>
					<van-icon name="arrow-left"></van-icon>
				</van-button>
			</van-col>
			<van-col span="18">
				<!-- 搜索框 -->
				<van-search
					v-model="keyword"
					@focus="active = 0"
					placeholder="搜索订单"
				/>
			</van-col>
			<van-col span="3">
				<van-button
					style="background-color:transparent; border: none; height:100%;"
					@click="$router.push('/index')"
					type="default"
				>
					<van-icon name="home-o"></van-icon>
				</van-button>
			</van-col>
		</van-row>
		<div class="content">
			<div v-if="!$store.state.user.token">
				<needLogin></needLogin>
			</div>
			<!-- 订单分类导航 -->
			<div v-if="$store.state.user.token">
				<van-tabs
					v-model="active"
					sticky
					offset-top="40"
					color="#72C4F4"
					background="#E8E8E8"
				>
					<van-tab title="全部订单">
						<!-- 订单渲染组件 -->
						<ordersitem
							@updateItem="updateItem"
							@deleteItem="deleteItem"
							:lists="search()"
						></ordersitem>
					</van-tab>

					<van-tab title="待发货">
						<!-- 订单渲染组件 -->
						<ordersitem
							@updateItem="updateItem"
							@deleteItem="deleteItem"
							:lists="
								lists.filter(i => {
									return i.status == 1
								})
							"
						></ordersitem>
					</van-tab>
					<van-tab title="待收货">
						<!-- 订单渲染组件 -->
						<ordersitem
							@updateItem="updateItem"
							@deleteItem="deleteItem"
							:lists="
								lists.filter(i => {
									return i.status == 2
								})
							"
						></ordersitem>
					</van-tab>
					<van-tab title="已完成">
						<!-- 订单渲染组件 -->
						<ordersitem
							@updateItem="updateItem"
							@deleteItem="deleteItem"
							:lists="
								lists.filter(i => {
									return i.status == 3
								})
							"
						></ordersitem>
					</van-tab>
				</van-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import { getList } from '@/api/orders'
	import needLogin from './logout'
	import ordersitem from '../ordersitem/index'
	export default {
		data() {
			return {
				keyword: '',
				active: 0,
				lists: []
			}
		},
		created() {
			this.ordersList()
			if (this.$route.query.id) {
				this.active = this.$route.query.id
			}
		},
		methods: {
			deleteItem(id) {
				const index = this.lists.finIndex(item => {
					return id === item._id
				})
				this.lists.splice(index, 1)
			},
			updateItem(id) {
				const index = this.lists.finIndex(item => {
					return id === item._id
				})
				this.lists[index].status = 3
			},
			ordersList() {
				getList(this.$store.state.user.token).then(res => {
					this.lists = res.data
				})
			},
			search() {
				var keyword = this.keyword
				if (this.keyword == '') {
					return this.lists
				} else {
					// 搜索功能，根据订单号，总价，名字，电话，商品名查找订单
					return this.lists.filter(item => {
						return (
							String(item.id)
								.toLowerCase()
								.indexOf(keyword) > -1 ||
							String(item.totalPrice)
								.toLowerCase()
								.indexOf(keyword) > -1 ||
							String(item.address.name)
								.toLowerCase()
								.indexOf(keyword) > -1 ||
							String(item.address.tel)
								.toLowerCase()
								.indexOf(keyword) > -1 ||
							item.goods.some(key => {
								return (
									String(key.name)
										.toLowerCase()
										.indexOf(keyword) > -1
								)
							})
						)
					})
				}
			}
		},
		components: {
			ordersitem,
			needLogin
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		background-color: rgba($color: #d3d3d3, $alpha: 0.5);
		height: 44px;
		line-height: 44px;
		font-weight: bold;
		font-size: 16px;
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		.van-search {
			height: 44px;
			padding: 5px;
			background-color: transparent;
		}
		.van-search__content {
			height: 100%;
			border: solid 1px transparent;
			border-radius: 18px;
		}
	}
	.content {
		position: absolute;
		margin-top: 44px;
		top: 0px;
		bottom: 0px;
		z-index: 10000;
		width: 100%;
		padding-bottom: 20px;
		overflow: scroll;
		background-color: rgba($color: lightgrey, $alpha: 0.3);
	}
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
</style>

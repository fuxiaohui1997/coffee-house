<template>
	<div class="brand-container">
		<mySwiper :imglist="imglist"></mySwiper>
		<div>
			<van-tabs
				v-model="active"
				sticky
				offset-top="65"
				color="#FFA454"
				background="#e0e0e0"
			>
				<van-tab title="悠诗诗">
					<div class="brand-item">
						<h2>悠诗诗</h2>
						<van-row
							style="
								width: 100%;
								margin: 5px auto;
								border: solid 1px transparent;
								border-radius: 10px;
								overflow: hidden;
							"
							v-for="item in goodsList"
							:key="item._id"
						>
							<van-card
								:price="item.price | dealPrice"
								:desc="item.description"
								:title="item.name"
								:thumb="item.imgList[0].src"
							>
								<div slot="tags">
									<van-tag plain type="danger">好喝</van-tag>
									<van-tag plain type="danger">折扣</van-tag>
								</div>
								<div
									slot="footer"
									style="position: absolute; right: 5px; bottom: 10px;"
								>
									<van-button
										color="linear-gradient(to right, #4bb0ff, #6149f6)"
										size="mini"
										@click="toDetails(item)"
										>去看看</van-button
									>
									<van-button
										color="linear-gradient(to right, #F08B3B, #F0643B)"
										size="mini"
										@click="goOrder"
										>买买买</van-button
									>
								</div>
							</van-card>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="麦斯威尔">
					<div class="brand-item">
						<h2>麦斯威尔</h2>
						<van-row
							style="
								width: 100%;
								margin: 5px auto;
								border: solid 1px transparent;
								border-radius: 10px;
								overflow: hidden;
							"
							v-for="item in goodsList"
							:key="item._id"
						>
							<van-card
								:price="item.price | dealPrice"
								:desc="item.description"
								:title="item.name"
								:thumb="item.imgList[0].src"
							>
								<div slot="tags">
									<van-tag plain type="danger">好喝</van-tag>
									<van-tag plain type="danger">折扣</van-tag>
								</div>
								<div
									slot="footer"
									style="position: absolute; right: 5px; bottom: 10px;"
								>
									<van-button
										color="linear-gradient(to right, #4bb0ff, #6149f6)"
										size="mini"
										@click="toDetails(item)"
										>去看看</van-button
									>
									<van-button
										color="linear-gradient(to right, #F08B3B, #F0643B)"
										size="mini"
										@click="goOrder"
										>买买买</van-button
									>
								</div>
							</van-card>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="香飘飘">
					<div class="brand-item">
						<h2>香飘飘</h2>
						<van-row
							style="
								width: 100%;
								margin: 5px auto;
								border: solid 1px transparent;
								border-radius: 10px;
								overflow: hidden;
							"
							v-for="item in goodsList"
							:key="item._id"
						>
							<van-card
								:price="item.price | dealPrice"
								:desc="item.description"
								:title="item.name"
								:thumb="item.imgList[0].src"
							>
								<div slot="tags">
									<van-tag plain type="danger">好喝</van-tag>
									<van-tag plain type="danger">折扣</van-tag>
								</div>
								<div
									slot="footer"
									style="position: absolute; right: 5px; bottom: 10px;"
								>
									<van-button
										color="linear-gradient(to right, #4bb0ff, #6149f6)"
										size="mini"
										@click="toDetails(item)"
										>去看看</van-button
									>
									<van-button
										color="linear-gradient(to right, #F08B3B, #F0643B)"
										size="mini"
										@click="goOrder"
										>买买买</van-button
									>
								</div>
							</van-card>
						</van-row>
					</div>
				</van-tab>
				<van-tab title="雀巢">
					<div class="brand-item">
						<h2>雀巢</h2>
						<van-row
							style="
								width: 100%;
								margin: 5px auto;
								border: solid 1px transparent;
								border-radius: 10px;
								overflow: hidden;
							"
							v-for="item in goodsList"
							:key="item._id"
						>
							<van-card
								:price="item.price | dealPrice"
								:desc="item.description"
								:title="item.name"
								:thumb="item.imgList[0].src"
							>
								<div slot="tags">
									<van-tag plain type="danger">好喝</van-tag>
									<van-tag plain type="danger">折扣</van-tag>
								</div>
								<div
									slot="footer"
									style="position: absolute; right: 5px; bottom: 10px;"
								>
									<van-button
										color="linear-gradient(to right, #4bb0ff, #6149f6)"
										size="mini"
										@click="toDetails(item)"
										>去看看</van-button
									>
									<van-button
										color="linear-gradient(to right, #F08B3B, #F0643B)"
										size="mini"
										@click="goOrder"
										>买买买</van-button
									>
								</div>
							</van-card>
						</van-row>
					</div>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>
<script>
	import { fetchList } from '@/api/goods'
	import mySwiper from '../myPublic/swiper'
	export default {
		data() {
			return {
				active: 0,
				imglist: [
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420083349787.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420094785825.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420595566203.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420580989337.png'
					}
				],
				goods: {
					id: 5,
					name: '蓝山咖啡',
					price: '20',
					num: 1
				},
				goodsList: []
			}
		},
		created() {
			this.getList()
		},
		watch: {
			active() {
				this.getList()
			}
		},
		methods: {
			getList() {
				const category =
					this.active === 0
						? '悠诗诗'
						: this.active === 1
						? '麦斯威尔'
						: this.active === 2
						? '香飘飘'
						: '雀巢'
				fetchList({ category: category }).then(res => {
					this.goodsList = res.data
				})
			},
			toDetails(goods) {
				this.$store.commit('goodsDetails/SET_DETAILS', goods)
				this.$router.push('/details')
			},
			goOrder() {
				this.$store.commit('cart/SET_GOODS', this.goods)
				this.$router.push('/order')
			},
			goDetail() {
				this.$router.push('/details')
			}
		},
		components: {
			mySwiper
		}
	}
</script>
<style lang="scss" scoped>
	.brand-container {
		background: url('http://193.112.249.63:4001/public/images/2020040420083349787.png')
			no-repeat center 0px;
		background-size: 100% auto;
		padding: 8px 0;
		width: 100%;
		background-color: #e8e8e8;
	}
	.brand-item {
		width: 94%;
		margin: 8px auto;
		h2 {
			font-size: 16px;
			font-weight: bold;
			text-align: center;
			margin-bottom: 3px;
		}
	}
</style>

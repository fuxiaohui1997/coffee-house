<template>
	<div class="discount-container">
		<div>
			<mySwiper :imglist="imglist"></mySwiper>
			<div>
				<van-tabs
					v-model="active"
					sticky
					offset-top="69"
					color="#FFA454"
					background="#e0e0e0"
				>
					<van-tab title="9折">
						<div class="brand-item">
							<h2>9折</h2>
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
					<van-tab title="买一送一">
						<div class="brand-item">
							<h2>买一送一</h2>
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
					<van-tab title="满100减10">
						<div class="brand-item">
							<h2>满100减10</h2>
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
					<van-tab title="免费配送">
						<div class="brand-item">
							<h2>免费配送</h2>
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
											@click="goOrder(item)"
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
							'http://193.112.249.63:4001/public/images/2020040420584551322.png'
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
				goodsList: []
			}
		},
		created() {
			if (this.$route.query.id) {
				this.active = this.$route.query.id
			}
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
						? '9折'
						: this.active === 1
						? '买一送一'
						: this.active === 2
						? '满100减10'
						: '免费配送'
				fetchList({ category: category }).then(res => {
					this.goodsList = res.data
				})
			},
			toDetails(goods) {
				this.$store.commit('goodsDetails/SET_DETAILS', goods)
				this.$router.push('/details')
			},
			goOrder(goods) {
				if (!this.$store.state.user.token) {
					this.$router.push('/login')
					return
				}
				this.$store.commit('cart/SET_GOODS', goods)
				this.$router.push('/order')
			}
		},
		components: {
			mySwiper
		}
	}
</script>
<style lang="scss" scoped>
	.discount-container {
		background: url('http://193.112.249.63:4001/public/images/2020040420584551322.png')
			no-repeat center 0px;
		background-size: 100% auto;
		width: 100%;
		background-color: #e8e8e8;
		padding: 8px 0;
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

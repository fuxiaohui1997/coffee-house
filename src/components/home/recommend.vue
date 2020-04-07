<template>
	<div class="recommend-container">
		<!-- 轮播图组件 -->
		<mySwiper :imglist="imglist"></mySwiper>
		<!-- 宫格导航 -->
		<van-grid
			:column-num="4"
			style="
				width: 94%;
				margin: 8px auto;
				border: solid 1px transparent;
				border-radius: 10px;
				overflow: hidden;
			"
		>
			<van-grid-item icon="award-o" to="points" text="积分" />
			<van-grid-item icon="wap-home-o" to="/address" text="地址" />
			<van-grid-item icon="flag-o" to="/orders" text="订单" />
			<van-grid-item icon="hot-o" to="/sales" text="热销" />
			<van-grid-item icon="sign" to="/discount" text="折扣" />
			<van-grid-item icon="notes-o" to="/category" text="分类" />
			<van-grid-item icon="good-job-o" to="/brand" text="品牌" />
			<van-grid-item icon="fire-o" to="/benefits" text="优惠" />
		</van-grid>
		<!-- 优惠专栏 -->
		<van-row style="margin-bottom: 8px;">
			<van-row
				style="
					text-align: left;
					font-size: 16px;
					font-weight: bold;
					text-indent: 2ex;
				"
			>
				<van-col span="24">优惠专区</van-col>
			</van-row>
			<van-row class="discount" style="margin-bottom: 8px;">
				<van-col
					span="12"
					@click="$router.push({ path: '/discount', query: { id: 0 } })"
				>
					<img
						src="http://193.112.249.63:4001/public/images/2020040420563732669.png"
						alt=""
					/>
					<span class="discount-text">
						限量抢购<br />
						9.9元起
					</span>
				</van-col>
				<van-col
					span="12"
					@click="$router.push({ path: '/discount', query: { id: 3 } })"
				>
					<img
						src="http://193.112.249.63:4001/public/images/2020040420580989337.png"
						alt=""
					/>
					<span class="discount-text">
						配送减免<br />
						配送费0元起
					</span>
				</van-col>
			</van-row>
			<!-- 导航 -->
			<van-row
				class="discount"
				style="
					text-align: center;
					font-size: 14px;
					font-weight: bold;
					margin-bottom: 8px;
				"
			>
				<van-col span="6" @click="$router.push('/brand')"
					>品质联盟
					<img
						src="http://193.112.249.63:4001/public/images/2020040420595566203.png"
						alt=""
					/>
				</van-col>
				<van-col span="6" @click="$router.push('/discount')"
					>优惠套餐
					<img
						src="http://193.112.249.63:4001/public/images/2020040420570625645.png"
						alt=""
					/>
				</van-col>
				<van-col span="6" @click="$router.push('/benefits')"
					>大额减免
					<img
						src="http://193.112.249.63:4001/public/images/2020040420320666889.png"
						alt=""
					/>
				</van-col>
				<van-col span="6" @click="$router.push('/points')"
					>超级会员
					<img
						src="http://193.112.249.63:4001/public/images/2020040420064584312.png"
						alt=""
					/>
				</van-col>
			</van-row>
		</van-row>
		<!-- 商品渲染 -->
		<van-row
			style="
				width: 94%;
				margin: 5px auto;
				border: solid 1px transparent;
				border-radius: 10px;
				overflow: hidden;
				position: relative;
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
</template>
<script>
	import { fetchList } from '@/api/goods'
	import mySwiper from '../myPublic/swiper'
	export default {
		data() {
			return {
				imglist: [
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420553863718.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420445332036.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420442893426.png'
					},
					{
						src:
							'http://193.112.249.63:4001/public/images/2020040420344187986.png'
					}
				],
				goodsList: []
			}
		},
		created() {
			this.getList()
		},
		methods: {
			toDetails(goods) {
				this.$store.commit('goodsDetails/SET_DETAILS', goods)
				this.$router.push('/details')
			},
			getList() {
				fetchList({ category: '推荐' }).then(res => {
					this.goodsList = res.data
				})
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
	.recommend-container {
		background: url('http://193.112.249.63:4001/public/images/2020040420553863718.png')
			no-repeat center 0px;
		background-size: 100% auto;
		padding-top: 8px;
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
	}
	.discount {
		width: 94%;
		margin: 0 auto;
		.van-col {
			position: relative;
		}
		img {
			width: 100%;
			border: solid 1px rgba($color: #000000, $alpha: 0);
			border-radius: 10px;
			margin-top: 6px auto;
		}
		.discount-text {
			display: block;
			position: absolute;
			width: 90%;
			height: 40%;
			top: 50%;
			left: 50%;
			margin-left: -45%;
			z-index: 1;
			text-align: center;
			border: solid 1px rgba($color: #000000, $alpha: 0);
			border-radius: 10px;
			background-color: rgba($color: white, $alpha: 0.7);
		}
	}
</style>

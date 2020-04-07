<template>
	<div style="height: 100%; width: 100%;">
		<!-- 标题 -->
		<van-row class="title">
			<van-col span="3">
				<van-button
					style="background-color: transparent; border: none; height: 100%;"
					@click="$router.go(-1)"
					type="default"
				>
					<van-icon name="arrow-left"></van-icon>
				</van-button>
			</van-col>
			商品详情
		</van-row>
		<!-- 内容部分 -->
		<div class="content">
			<div class="swiper-container banner">
				<!-- 轮播图 -->
				<div class="swiper-wrapper">
					<div
						class="swiper-slide"
						v-for="(item, index) in imglist"
						:key="index"
					>
						<img :src="item.src" alt="" />
					</div>
				</div>
			</div>
			<!-- 商品信息 -->
			<div class="panel">
				<div class="price">
					￥{{ $store.state.goodsDetails.goods.price | dealPrice }}
				</div>
				<h1>{{ $store.state.goodsDetails.goods.name }}</h1>
				<div class="text">
					{{ $store.state.goodsDetails.goods.description }}
				</div>
			</div>
			<!-- 下拉详情 -->
			<div class="dropdown">
				<h2 @click="makeToggle()" :class="{ border: make }">
					制作
					<van-icon v-show="make" name="arrow-down"></van-icon>
					<van-icon v-show="!make" name="arrow-up"></van-icon>
				</h2>
				<div v-show="make" class="details-content">
					<p>
						{{ $store.state.goodsDetails.goods.make }}
					</p>
				</div>
			</div>

			<div class="dropdown">
				<h2 @click="originToggle()" :class="{ border: origin }">
					来源
					<van-icon v-show="origin" name="arrow-down"></van-icon>
					<van-icon v-show="!origin" name="arrow-up"></van-icon>
				</h2>
				<div v-show="origin" class="details-content">
					<p>
						{{ $store.state.goodsDetails.goods.origin }}
					</p>
				</div>
			</div>

			<div class="dropdown">
				<h2 @click="historyToggle()" :class="{ border: history }">
					历史
					<van-icon v-show="history" name="arrow-down"></van-icon>
					<van-icon v-show="!history" name="arrow-up"></van-icon>
				</h2>
				<div v-show="history" class="details-content">
					<p>
						{{ $store.state.goodsDetails.goods.history }}
					</p>
				</div>
			</div>
			<!-- 评价栏 -->
			<div class="assess">
				<h5>评价<font class="point">好评99%</font></h5>
				<van-row class="label">
					<van-col span="5">美味可口</van-col>
					<van-col offset="1" span="5">价格实惠</van-col>
					<van-col offset="1" span="5">香甜可口</van-col>
					<van-col offset="1" span="5">分量充足</van-col>
				</van-row>
				<!-- 渲染评价列表 -->
				<div v-for="item in assess" :key="item.name" class="words">
					<van-row>
						<van-col class="user-img">
							<img src="../../assets/logo.png" alt="" />
						</van-col>
						<van-col class="name">
							{{ item.name }}
						</van-col>
						<van-col class="time">
							{{ item.time }}
						</van-col>
					</van-row>
					<van-row class="words-content">{{ item.words }}</van-row>
				</div>
			</div>
		</div>
		<!-- 商品导航 -->
		<van-goods-action>
			<van-goods-action-icon
				@click="$router.push('/index')"
				icon="wap-home-o"
				color="#07c160"
			/>
			<van-goods-action-icon
				@click="$router.push('/cart')"
				icon="cart-o"
				:info="$store.state.cart.num"
			/>
			<van-goods-action-icon icon="orders-o" @click="$router.push('/orders')" />
			<van-goods-action-button
				type="warning"
				@click="add()"
				text="加入购物车"
			/>
			<van-goods-action-button
				type="danger"
				@click="goShopping()"
				text="立即购买"
			/>
		</van-goods-action>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
	import 'swiper/js/swiper.min.js'
	export default {
		data: function () {
			return {
				make: false,
				origin: false,
				history: false,
				imglist: [
					{
						src:
							'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
					},
					{
						src:
							'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
					},
					{
						src:
							'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
					}
				],
				assess: [
					{
						name: '用户1',
						words:
							'很喜欢的蓝山口味，还有卡布奇诺口味，店家非常的贴心，还送了一个蓝色的咖啡杯，这也是我最喜欢的，好漂亮，嗯，咖啡味道应该很不错。经济也实惠，包装也非常的精美，如果喝着好喝，希望下次还可以光顾。喜欢喝咖啡的朋友出手吧。下午喝一杯咖啡，配上自己做的吐司蛋糕，惬意的下午享受着阳光。',
						time: '2020-03-01'
					},
					{
						name: '用户2',
						words:
							'口感浓郁，包装精美，味道超赞！京东商品质量有保障，长期在网上购买，物流很快，快递员服务态度非常棒。会一如既往的坚持。已经很多次购买了，这次正好赶上圣诞节有活动，所以价格非常的合适活动，而且是蓝山风味的，特别喜欢这个口味，已经多次向朋友们推荐了总之物美价廉，物超所值啊！',
						time: '2020-03-10'
					},
					{
						name: '用户3',
						words:
							'看外包装不错，嗯，今天早晨喝了一杯。男生咖啡还是有男生的口味，偏一点点苦香，嗯，味道比较纯正。常喝咖啡的人可以尝试，嗯，奶味儿并不是很足，咖啡味十足。建议喜欢喝奶味重的，可以和卡布奇诺或者自己添加一点，先来，也是一个不错的选择。',
						time: '2020-03-14'
					}
				]
			}
		},
		created() {
			this.imglist = this.$store.state.goodsDetails.goods.imgList
		},
		methods: {
			add() {
				if (!this.$store.state.user.token) {
					this.$router.push('/login')
					return
				}
				this.$store.dispatch('cart/addCart', {
					id: this.$store.state.user.token,
					goods: this.$store.state.goodsDetails.goods
				})
			},
			goShopping() {
				this.add() //加入购物车并选中，将选中商品加入确认订单页面并跳转
				this.$router.push('/order')
			},
			makeToggle() {
				this.make = !this.make
			},
			originToggle() {
				this.origin = !this.origin
			},
			historyToggle() {
				this.history = !this.history
			}
		},
		components: {},
		computed: {},
		mounted() {
			new Swiper('.banner', {
				slidesPerView: 1,
				spaceBetween: 0,
				loop: true,
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.border {
		border-bottom: solid 2px #e8e8e8;
	}
	.dropdown {
		margin-top: 20px;
		background-color: rgba($color: white, $alpha: 0.8);
		padding: 4% 4% 0 4%;
		h2 {
			font-weight: 400;
			font-size: 16px;
			line-height: 14px;
			padding-bottom: 16px;
		}
		p {
			font-size: 14px;
			text-indent: 2ex;
		}
		.details-content {
			margin: 10px 0;
			padding-bottom: 10px;
		}
	}
	.title {
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 18px;
		border: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
	.content {
		position: absolute;
		width: 100%;
		top: 40px;
		bottom: 60px;
		overflow: scroll;
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
	}
	.panel {
		padding: 15px;
		background-color: rgba($color: white, $alpha: 0.8);
		h1 {
			font-size: 16px;
			color: black;
			font-weight: bold;
		}
		.text {
			font-size: 14px;
			text-indent: 2ex;
		}
		.price {
			color: #ff6b00;
			font-size: 25px;
		}
	}
	.assess {
		margin-top: 20px;
		background-color: rgba($color: white, $alpha: 0.8);
		padding: 4%;
		h5 {
			font-weight: 400;
			font-size: 16px;
			border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.5);
			padding-bottom: 10px;
		}
		.words {
			position: relative;
			padding: 8px 0;
			border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.3);
			.name {
				font-weight: bold;
				line-height: 30px;
			}
			.user-img {
				width: 30px;
				height: 30px;
				border: solid 1px rgba($color: #d3d3d3, $alpha: 0.6);
				border-radius: 15px;
				margin-right: 10px;
				overflow: hidden;
			}
			.time {
				float: right;
			}
			.words-content {
				font-size: 14px;
				color: rgba($color: black, $alpha: 0.9);
			}
		}
	}
	.arrowtop {
		position: fixed;
		top: 30px;
		left: 30px;
		z-index: 200;
		width: 42px;
		i {
			display: block;
			width: 42px;
			height: 42px;
			position: absolute;
			left: 0px;
			top: 0px;
			font-size: 24px;
		}
	}
	.van-goods-action {
		position: absolute;
		bottom: 0px;
	}
	.point {
		color: #e4393c;
		margin-left: 10px;
		font-weight: 400;
		font-size: 10px;
	}
	.label {
		padding: 10px 0;
		border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.3);
		.van-col {
			text-align: center;
			background-color: #fdf0f0;
			color: rgba($color: black, $alpha: 0.7);
		}
	}
</style>

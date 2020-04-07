<template>
	<div>
		<div class="top">
			<!-- 头部搜索栏 -->
			<van-row class="topSearchNav">
				<van-col span="3">
					<img src="@/assets/logo.png" alt="" />
				</van-col>
				<van-col span="18">
					<van-search @focus="getSearch" placeholder="搜索商品名称" />
				</van-col>
				<van-col span="3">
					<van-icon @click="person" name="user-o" />
				</van-col>
			</van-row>
			<!-- 首页导航栏 -->
			<div class="swiper-container swiperHomeNav">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link
							to="/recommend"
							:class="{ 'navbar-active': $route.path == '/recommend' }"
							>推荐</router-link
						>
					</div>
					<div class="swiper-slide">
						<router-link
							to="/brand"
							:class="{ 'navbar-active': $route.path == '/brand' }"
						>
							品牌</router-link
						>
					</div>
					<div class="swiper-slide">
						<router-link
							to="/discount"
							:class="{ 'navbar-active': $route.path == '/discount' }"
							>折扣</router-link
						>
					</div>
					<div class="swiper-slide">
						<router-link
							to="/benefits"
							:class="{ 'navbar-active': $route.path == '/benefits' }"
							>实惠</router-link
						>
					</div>
					<div class="swiper-slide">
						<router-link
							to="/sales"
							:class="{ 'navbar-active': $route.path == '/sales' }"
							>销量</router-link
						>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<!-- 过渡动画 -->
			<transition name="index">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
	import 'swiper/js/swiper.min.js'
	export default {
		name: 'Home',
		methods: {
			getSearch() {
				this.$router.push('/search')
			},
			person() {
				this.$router.push('/person')
			}
		},
		mounted() {
			new Swiper('.swiperHomeNav', {
				slidesPerView: 4, //显示可视轮播图个数
				freeMode: true
			})
		}
	}
</script>
<style lang="scss" scoped>
	.top {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;
		background-color: #6f6c64;
	}
	.topSearchNav {
		img {
			text-align: center;
			display: block;
			width: 44px;
			height: 44px;
			margin: 0 auto;
			background-color: transparent;
		}
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
		.van-icon {
			text-align: center;
			display: block;
			font-size: 24px;
			height: 44px;
			line-height: 44px;
			color: white;
			background-color: transparent;
		}
	}
	.swiper-container {
		width: 100%;
		height: 100%;
		background-color: transparent;
	}
	.swiper-slide {
		text-align: center;
		font-size: 14px;
		padding-bottom: 3px;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		a {
			color: white;
		}
		.navbar-active {
			color: #ffa454;
			border-bottom: solid 2px #ffa454;
		}
	}
	.content {
		position: absolute;
		top: 69px;
		bottom: 0px;
		width: 100%;
		overflow: scroll;
	}
</style>

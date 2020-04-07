<template>
	<div>
		<van-row class="topSearchNav">
			<!-- 搜索栏 -->
			<van-col span="4">
				<van-button @click="$router.go(-1)" type="default">
					<van-icon name="arrow-left"></van-icon>
				</van-button>
			</van-col>
			<van-col span="16">
				<van-search placeholder="搜索商品名称" />
			</van-col>
			<van-col span="4">
				<van-button type="default">
					<van-icon name="search" />
				</van-button>
			</van-col>
		</van-row>
		<div class="content">
			<div>
				<!-- 热搜例子 -->
				<p style="padding: 0 0 10px 0; font-size: 16px; font-weight: bold;">
					发现
				</p>
				<span class="item" v-for="item in recommend" :key="item">
					{{ item }}
				</span>
				<!-- 推荐 -->
				<recommend></recommend>
			</div>
		</div>
	</div>
</template>

<script>
	import Recommend from './recommend'
	export default {
		components: {
			Recommend
		},
		data() {
			return {
				recommend: ['蓝山咖啡', '悠诗诗咖啡']
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: absolute;
		top: 44px;
		bottom: 0px;
		width: 100%;
		overflow: scroll;
		padding: 10px;
		box-sizing: border-box;
	}
	.topSearchNav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
		img {
			text-align: center;
			display: block;
			font-size: 24px;
			height: 44px;
			line-height: 44px;
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
			background-color: transparent;
		}
		.van-button {
			background-color: transparent;
		}
	}
	.item {
		font-size: 14px;
		padding: 4px;
		margin: 5px;
		border: solid 1px transparent;
		border-radius: 8px;
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
	}
</style>

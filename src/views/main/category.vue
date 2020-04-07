<template>
	<div style="width: 100%; height: 100%;">
		<!-- 标题 -->
		<van-row class="title">商品分类</van-row>
		<!-- 内容部分 -->
		<div class="content">
			<div class="left" ref="left">
				<ul>
					<!-- 渲染左侧分类导航 -->
					<li
						v-for="(item, index) in left"
						:class="{ current: index == active }"
						@click="selectItem(index)"
						:key="index"
					>
						<span class="left-item">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div class="right" ref="right">
				<div style="height: 100%; overflow: scroll;">
					<div>
						<!-- 渲染右侧商品分类 -->
						<van-grid column-num="2">
							<!-- 渲染分类商品 -->
							<van-grid-item
								use-slot
								v-for="item in goodsList"
								:key="item._id"
								@click="toDetails(item)"
								style="position: relative;"
							>
								<img :src="item.imgList[0].src" alt="" />
								<span style="font-size: 14px;">{{ item.name }}</span>
								<van-button
									style="
										position: absolute;
										width: 100%;
										height: 100%;
										background-color: transparent;
										border: none;
									"
									@click="toDetails(item)"
								></van-button>
							</van-grid-item>
						</van-grid>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { fetchList } from '@/api/goods'
	export default {
		data() {
			return {
				left: [
					'纯咖啡',
					'白咖啡',
					'意大利咖啡',
					'蓝山咖啡',
					'曼特宁咖啡',
					'哥伦比亚咖啡',
					'越南咖啡',
					'猫屎咖啡',
					'摩卡咖啡'
				],
				goodsList: [],
				active: 0
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
				fetchList({ category: this.left[this.active] }).then(res => {
					this.goodsList = res.data
				})
			},
			selectItem(index) {
				this.active = index
				this.getList()
			}
		},
		// 生命周期函数
		mounted() {},
		// 计算属性
		computed: {}
	}
</script>

<style lang="scss" scoped>
	.title {
		background-color: #e8e8e8;
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 16px;
		border: none;
		text-align: center;
	}
	.content {
		display: flex;
		position: absolute;
		/* 定位里面不写定义左右样式，不写高度，自动获取高度 */
		top: 40px;
		bottom: 0;
		background-color: #e8e8e8;
		width: 100%;
		overflow: hidden;

		.left {
			flex: 0 0 100px;
			width: 100px;
			background-color: #e2e2e2;
			font-size: 14px;
		}
		.left li {
			width: 100%;
			height: 100%;
			background-color: white;
		}
		.left li.current {
			background-color: #e2e2e2;
			color: hsl(41, 83%, 48%);
			font-weight: bold;
		}
		.left-item {
			display: block;
			width: 100%;
			height: 100%;
			line-height: 50px;
			height: 50px;
			text-align: center;
		}
		.right {
			flex: 1;
			background-color: #e8e8e8;

			.van-grid {
				width: 100%;
				margin: 0 auto;
				border: solid 1px transparent;
				border-radius: 10px;
				overflow: hidden;
				background-color: #e8e8e8;
				padding: 5px;
			}
		}
	}
</style>

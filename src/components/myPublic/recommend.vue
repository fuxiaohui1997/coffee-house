<template>
	<div style="width: 100%;">
		<h2 class="advert-title">猜你喜欢</h2>
		<van-row style="width: 100%;">
			<van-col
				style="padding: 7px;"
				span="12"
				v-for="item in goodsList"
				:key="item._id"
			>
				<div class="goods" @click="toDetails(item)">
					<img :src="item.imgList[0].src" alt="" />
					<h2 style="font-weight: 600; padding: 4px; font-size: 13px;">
						{{ item.name }}
					</h2>
					<p class="text-description">
						{{ item.description }}
					</p>
				</div>
			</van-col>
		</van-row>
	</div>
</template>
<script>
	import { fetchList } from '@/api/goods'
	export default {
		data() {
			return {
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
			}
		}
	}
</script>
<style lang="scss" scoped>
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
	.goods {
		width: 100%;
		background-color: #e8e8e8;
		border: solid 1px transparent;
		box-sizing: border-box;
		border-radius: 8px;
		padding: 12px;
		img {
			display: block;
			float: left;
			width: 100%;
		}
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

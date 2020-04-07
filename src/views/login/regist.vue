<template>
	<div style="width:100%;height:100%;">
		<van-row class="title">
			<van-col span="3">
				<van-button
					icon="cross"
					type="default"
					style="background-color:transparent;border:none;"
					@click="$router.push('/person')"
				/>
			</van-col>
			<van-col span="18">
				注册
			</van-col>
		</van-row>
		<div class="content">
			<div>
				<van-button
					icon="cross"
					type="default"
					style="position: absolute;top: 10px; left: 10px;background-color:transparent;color:white;border:none;"
					@click="$router.go(-1)"
				/>
				<van-form @submit="onSubmit">
					<van-field
						v-model="username"
						name="用户名"
						label="用户名"
						placeholder="用户名"
						label-width="60px"
						label-align="center"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						label="密码"
						label-align="center"
						label-width="60px"
						placeholder="密码"
					/>
					<van-field
						v-model="passwordCheck"
						type="password"
						name="密码"
						label="确认密码"
						label-align="center"
						label-width="60px"
						placeholder="确认密码"
					/>
					<van-field
						v-model="name"
						name="姓名"
						label="姓名"
						placeholder="姓名"
						label-width="60px"
						label-align="center"
					/>
					<van-field
						v-model="nickname"
						name="昵称"
						label="昵称"
						placeholder="昵称"
						label-width="60px"
						label-align="center"
					/>
					<van-field
						v-model="tel"
						name="手机"
						label="手机"
						placeholder="手机"
						label-width="60px"
						label-align="center"
					/>
					<van-field
						v-model="address"
						name="地址"
						label="地址"
						placeholder="地址"
						label-width="60px"
						label-align="center"
					/>
					<a @click="goRegist()">已有账号？去登录</a>
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							注册
						</van-button>
					</div>
				</van-form>
			</div>
		</div>
	</div>
</template>

<script>
	import { regist } from '@/api/user'
	export default {
		name: 'Regist',
		data() {
			return {
				username: '',
				password: '',
				passwordCheck: '',
				name: '',
				nickname: '',
				tel: '',
				address: ''
			}
		},
		methods: {
			onSubmit() {
				if (!this.username || !this.password) {
					this.$toast('信息不完整')
					return
				}
				if (this.username !== this.passwordCheck) {
					this.$toast('两次密码不一致')
					return
				}
				regist({
					username: this.username,
					password: this.password,
					name: this.name,
					nickname: this.nickname,
					tel: this.tel,
					address: this.address
				}).then(() => {
					this.$toast('注册成功，去登录吧')
					this.$router.push({
						path: '/login'
					}) //跳转首页
				})
			},
			goRegist() {
				this.$router.push({
					path: '/login'
				}) //跳转登陆
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
		height: 40px;
		line-height: 40px;
		font-weight: bold;
		font-size: 16px;
		text-align: center;
		text-indent: -2ex;
		border: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
	.content {
		position: absolute;
		top: 40px;
		bottom: 0px;
		width: 100%;
		overflow: scroll;
		background-color: rgba($color: #d3d3d3, $alpha: 0.4);
		.van-form {
			display: block;
			width: 92%;
			margin: 20px auto;
			.van-field {
				margin-bottom: 20px;
				border: solid 1px rgba($color: #000000, $alpha: 0);
				border-radius: 6px;
			}
			.sex {
				background-color: transparent;
			}
			.sex.van-cell:not(:last-child)::after {
				border: none;
			}
			a {
				display: block;
				text-align: center;
			}
		}
	}
</style>

<template>
	<div style="width: 100%; height: 100%;">
		<van-row class="title">
			<van-col span="3">
				<van-button
					icon="cross"
					type="default"
					style="background-color: transparent; border: none;"
					@click="$router.push('/person')"
				/>
			</van-col>
			<van-col span="18">
				登录
			</van-col>
		</van-row>
		<div class="content">
			<div>
				<van-form @submit="onSubmit">
					<van-field
						v-model="username"
						name="用户名"
						label="用户名"
						placeholder="用户名"
						label-width="50px"
						label-align="center"
					/>
					<van-field
						v-model="password"
						type="password"
						name="密码"
						label="密码"
						label-align="center"
						label-width="50px"
						placeholder="密码"
					/>
					<van-field
						name="switch"
						label="记住密码"
						class="checkbox"
						label-align="center"
						label-width="80px"
					>
						<template #input>
							<van-switch v-model="switchChecked" size="20" />
						</template>
					</van-field>
					<a @click="goRegist()">没有账号？去注册</a>
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							登录
						</van-button>
					</div>
					<div style="margin: 16px;">
						<van-button
							round
							block
							type="info"
							native-type="default"
							@click="visiter"
						>
							游客登录
						</van-button>
					</div>
				</van-form>
			</div>
		</div>
	</div>
</template>

<script>
	import { login } from '@/api/user'
	export default {
		name: 'Login',
		data() {
			return {
				username: 'thtdm',
				password: '111111',
				switchChecked: false
			}
		},
		created() {
			this.getCookie()
		},
		methods: {
			visiter() {
				this.$router.push({
					path: '/index'
				})
			},
			onSubmit() {
				if (this.username && this.password) {
					//是否记住密码
					if (this.switchChecked) {
						this.setCookie(this.username, this.password, 7)
					} else {
						this.clearCookie()
					}
					login({
						username: this.username,
						password: this.password
					}).then(res => {
						const user = res.data
						this.$store.commit('user/SET_USER', user)
						this.$store.dispatch('cart/getCart', user.token)
						this.$router.push({
							path: '/index'
						}) //跳转首页
					})
				} else {
					//信息不完整，自定义弹出提示
					this.$store.state.myalert.visible = true
					this.$store.state.myalert.msg = '请填写完整'
				}
			},
			goRegist() {
				this.$router.push({
					path: '/regist'
				}) //跳转注册
			},
			setCookie(c_name, c_pwd, exdays) {
				const exdate = new Date() // 获取时间
				exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
				// 字符串拼接cookie
				window.document.cookie =
					'userName' + '=' + c_name + ';path=/;expires=' + exdate.toGMTString()
				window.document.cookie =
					'password' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
			},
			getCookie() {
				if (document.cookie.length > 0) {
					this.remember = true
					const arr = document.cookie.split('; ')
					for (let i = 0; i < arr.length; i++) {
						const arr2 = arr[i].split('=') // 再次切割
						// 判断查找相对应的值
						if (arr2[0] === 'userName') {
							this.username = arr2[1] // 保存到保存数据的地方
						} else if (arr2[0] === 'password') {
							this.password = arr2[1]
						}
					}
					this.switchChecked = true
				}
			},

			//清除缓存
			clearCookie: function () {
				this.setCookie('', '', -1)
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
				color: white;
				.van-radio__label {
					color: white;
				}
			}
			.sex.van-cell:not(:last-child)::after {
				border: none;
			}
			a {
				display: block;
				position: absolute;
				font-size: 12px;
				margin-left: 190px;
				margin-top: -50px;
			}
			.checkbox {
				background-color: transparent;
			}
		}
	}
</style>

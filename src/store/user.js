export default {
	namespaced: true, //命名空间
	state: {
		token: '', //用户登录标识
		avatar: 'http://193.112.249.63:4001/public/images/2020040411432447613.png',
		name: '',
		address: '',
		tel: '',
		nickname: ''
	},
	mutations: {
		SET_USER: (state, user) => {
			for (let i in user) {
				if (user[i]) {
					state[i] = user[i]
				}
			}
		}
	},
	actions: {},
	getters: {},
	modules: {}
}

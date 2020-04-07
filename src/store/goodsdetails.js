export default {
	namespaced: true, //命名空间
	state: {
		goods: {}
	},
	mutations: {
		SET_DETAILS: (state, goods) => {
			state.goods = JSON.parse(JSON.stringify(goods))
		}
	},
	actions: {},
	getters: {},
	modules: {}
}

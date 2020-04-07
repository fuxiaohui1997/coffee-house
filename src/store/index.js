import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goodsDetails from './goodsdetails'
import cart from './cart'
import address from './address'
import user from './user'
import myalert from './myalert'
import message from './message'
export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	// modules
	// 开发遇到难题：由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
	// 解决方案：Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
	modules: {
		// modules定义独立对象，对象中固定五个对象。state getter mutation action module
		cart,
		address,
		user,
		myalert,
		message,
		goodsDetails
	}
})

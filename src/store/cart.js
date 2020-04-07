import { getCart, addCart } from '@/api/cart'
export default {
	namespaced: true, //命名空间
	state: {
		lists: [], //购物车数据
		num: '' //商品数量
	},
	mutations: {
		SET_GOODS: (state, goods) => {
			goods.id = goods._id
			delete goods._id
			goods.num = 1
			goods.isSelect = true
			if (!state.lists) {
				state.lists.push(goods)
				return
			}
			var isAdd = true
			state.lists.forEach(ele => {
				if (ele.id == goods.id) {
					ele.num += goods.num
					ele.isSelect = true
					state.num++
					isAdd = false
				}
			})
			if (isAdd) {
				state.lists.push(goods)
				state.num++
			}
		},
		SET_ORDERLISTS(state) {
			state.lists.forEach(ele => {
				ele.isSelect = false
			})
		},
		DELETE_GOODS(state, index) {
			state.lists.splice(index, 1)
		},
		SET_LIST(state, list) {
			if (list) {
				list.forEach(item => {
					item.isSelect = false
					state.lists.push(item)
				})
			}
		}
	},
	actions: {
		getCart({ commit }, token) {
			return new Promise((resolve, reject) => {
				getCart({ user: token })
					.then(res => {
						const { data } = res
						commit('SET_LIST', data)
						resolve(data)
					})
					.catch(error => {
						reject(error)
					})
			})
		},
		addCart({ commit }, goods) {
			return new Promise((resolve, reject) => {
				var data = JSON.parse(JSON.stringify(goods))
				data.goods.id = data.goods._id
				data.goods.num = 1
				data.goods.isSelect = false
				addCart(data)
					.then(res => {
						commit('SET_GOODS', data.goods)
						resolve(res)
					})
					.catch(error => {
						reject(error)
					})
			})
		}
	},
	getters: {},
	modules: {}
}

export default {
	namespaced: true, //命名空间
	state: {
		addressId: localStorage.getItem('addressId') || '',
		id: Number(localStorage.getItem('addressIndex')) || 0,
		list: JSON.parse(localStorage.getItem('addressList')) || []
	},
	mutations: {
		onDelete: (state, index) => {
			state.list.splice(index, 1)
			localStorage.setItem('addressList', JSON.stringify(state.list))
		},
		newAddress: (state, addressform) => {
			state.list.push({
				id: state.id,
				name: addressform.name,
				tel: addressform.tel,
				address: addressform.address
			})
			state.id += 1
			localStorage.setItem('addressList', JSON.stringify(state.list))
			localStorage.setItem('addressIndex', state.id)
		},
		updateAddress: (state, address) => {
			state.list.splice(address.index, 1, address.msg)
			localStorage.setItem('addressList', JSON.stringify(state.list))
		}
	},
	actions: {},
	getters: {},
	modules: {}
}

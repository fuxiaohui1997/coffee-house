export default {
  namespaced: true, //命名空间
  state: {
    addressId: "1",
    id: 3,
    list: [{
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号'
      }
    ]
  },
  mutations: {
    onDelete: (state, index) => {
      state.list.splice(index, 1);
    },
    newAddress: (state, addressform) => {
      state.list.push({
        id: state.id,
        name: addressform.name,
        tel: addressform.tel,
        address: addressform.address
      });
      state.id += 1;
    },
    updateAddress: (state, address) => {
      state.list.splice(address.index, 1, address.msg);
    }
  },
  actions: {},
  getters: {

  },
  modules: {}
}
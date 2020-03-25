export default {
  namespaced: true, //命名空间
  state: {
    id: 202003140004,
    lists: [{
        id: 202003140001,
        status: 1,
        totalPrice: 39,
        address: {
          id: '2',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        goods: [{
            id: 5,
            name: '蓝山咖啡',
            price: '20',
            num: 1
          },
          {
            id: 6,
            name: '白咖啡',
            price: '19',
            num: 1
          }
        ]
      },
      {
        id: 202003140002,
        status: 2,
        totalPrice: 39,
        address: {
          id: '2',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        goods: [{
            id: 5,
            name: '蓝山咖啡',
            price: '20',
            num: 1
          },
          {
            id: 6,
            name: '白山咖啡',
            price: '19',
            num: 1
          }
        ]
      },
      {
        id: 202003140003,
        status: 3,
        totalPrice: 39,
        address: {
          id: '2',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        goods: [{
            id: 5,
            name: '蓝山咖啡',
            price: '20',
            num: 1
          },
          {
            id: 6,
            name: '白山咖啡',
            price: '19',
            num: 1
          }
        ]
      }
    ]
  },
  mutations: {
    SET_ORDERS: (state, order) => {
      var newLists = []
      const totalPrice = order.lists.reduce((total, item) => {
        newLists.push({
          id: item.id,
          name: item.name,
          price: item.price,
          num: item.num
        })
        return total + parseInt(item.price) * parseInt(item.num);
      }, 0);
      state.lists.push({
        id: state.id,
        status: 1,
        address: order.address,
        goods: newLists,
        totalPrice: totalPrice
      });
      state.id += 1;
    },
    delOrder: (state, id) => {
      const index = state.lists.findIndex(item => {
        return item.id == id
      })
      state.lists.splice(index, 1)
    },
    updOrder: (state, id) => {
      const index = state.lists.findIndex(item => {
        return item.id == id
      })
      state.lists[index].status = 3
    }
  },
  actions: {},
  getters: {

  },
  modules: {}
}
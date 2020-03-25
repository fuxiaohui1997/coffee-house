export default {
  namespaced: true, //命名空间
  state: {
    lists: [{
        id: 0,
        isSelect: false,
        name: "白咖啡",
        price: 10,
        num: 1,
      },
      {
        id: 2,
        isSelect: false,
        name: "猫屎咖啡",
        price: 10,
        num: 1,
      },
      {
        id: 3,
        isSelect: false,
        name: "摩卡咖啡",
        price: 10,
        num: 1,
      },
      {
        id: 4,
        isSelect: false,
        name: "纯咖啡",
        price: 10,
        num: 1,
      }

    ], //购物车数据
    num: "", //商品数量
  },
  mutations: {
    SET_GOODS: (state, goods) => {
      var isAdd = true;
      state.lists.forEach(ele => {
        if (ele.id == goods.id) {
          ele.num += goods.num;
          ele.isSelect = true;
          state.num++;
          isAdd = false;
        }
      });
      if (isAdd) {
        state.lists.push({
          id: goods.id,
          isSelect: true,
          name: goods.name,
          price: goods.price,
          num: goods.num,
        })
        state.num++;
      }
    },
    SET_ORDERLISTS(state) {
      state.lists.forEach(ele => {
        ele.isSelect = false;
      });
    },
    DELETE_GOODS(state, index) {
      state.lists.splice(index, 1);
    }
  },
  actions: {},
  getters: {

  },
  modules: {}
}
export default {
  namespaced: true, //命名空间
  state: {
    token: "", //用户登录标识
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {},
  getters: {

  },
  modules: {}
}
export default {
  namespaced: true, //命名空间
  state: {
    unreadNum: 0,
    msg: [{
        read: 0,
        status: 0,
        imgsrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1123764366,3390003999&fm=26&gp=0.jpg',
        time: "30分钟前",
        title: "潮流至上",
        content: "网红月销一百万杯，人气推荐蓝山卡布奇诺组合！！！",
        path: '/sales'
      },
      {
        read: 1,
        status: 0,
        imgsrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3346356330,4290860740&fm=26&gp=0.jpg',
        time: "5小时前",
        title: "新品上架",
        content: "咖啡屋推出多种新品。快来体验吧！！！",
        path: '/details'
      },
      {
        read: 1,
        status: 1,
        imgsrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3083492061,124514592&fm=26&gp=0.jpg',
        time: "一周前",
        title: "女神节节促销",
        content: "女神节大促销，买二送一，快来为女神献上一杯咖啡吧！！！"
      },
      {
        read: 1,
        status: 1,
        imgsrc: 'http://img2.imgtn.bdimg.com/it/u=1313030967,36395441&fm=26&gp=0.jpg',
        time: "三个月前",
        title: "双11促销",
        content: "光棍节大促销，买二送二，快点叫上小伙伴一起来体验吧！！！"
      }
    ]
  },
  mutations: {
    //读取消息
    read: (state, index) => {
      state.msg[index].read = 1;
      state.unreadNum -= 1;
      if (state.unreadNum <= 0) {
        state.unreadNum = 0
      }
    },
    clearUnread: state => {
      state.msg.forEach(item => {
        item.read = 1;
      })
      state.unreadNum = 0;
    }
  },
  actions: {},
  getters: {
    unread: state => {
      return state.unreadNum ? state.unreadNum : '';
    }
  },
  modules: {}
}
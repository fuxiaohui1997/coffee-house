<template>
  <div class="index-container">
    <!-- 底部导航栏 -->
    <van-tabbar fixed
                v-model="active"
                route
                z-index="1000">
      <van-tabbar-item to="/home"
                       icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category"
                       icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/message"
                       icon="comment-o"
                       :info="unread">消息</van-tabbar-item>
      <van-tabbar-item to="/cart"
                       icon="cart-o"
                       :info="$store.state.cart.num">购物车</van-tabbar-item>
      <van-tabbar-item to="/person"
                       icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 路由模块 -->
    <div class="content">
      <transition name="index">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Layout',
  data: function () {
    return {
      active: 0,
    }
  },
  computed: {
    ...mapGetters({
      'unread': 'message/unread',
    })
  },
}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
.van-nav-bar__title {
  max-width: 100%;
}
.content {
  position: absolute;
  top: 0;
  bottom: 50px;
  width: 100%;
  overflow: scroll;
}
</style>
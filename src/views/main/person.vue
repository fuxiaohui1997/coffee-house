<template>
  <div style="width:100%;height:100%;">
    <van-row class="title">个人中心</van-row>
    <div class="content">
      <div style="background-color: rgba($color: white, $alpha: 0.4);">
        <!-- 头像部分 -->
        <div class="top">
          <van-row>
            <van-col v-if="$store.state.user.token == ''"
                     offset="2"
                     span="14">
              <router-link to="/login">登陆</router-link>/
              <router-link to="/regist">注册</router-link>
            </van-col>
            <van-col span="6">
              <img class="imgperson"
                   src="../../assets/person.png"
                   alt="" />
            </van-col>
            <van-col v-if="$store.state.user.token != ''"
                     offset="2"
                     span="14">
              萌新
            </van-col>
          </van-row>
        </div>
        <!-- 订单导航 -->
        <div class="orders">
          <van-row class="my_orders">我的订单<a @click="$router.push('/orders')">查看全部订单&gt;</a></van-row>
          <van-row>
            <van-col span="6"
                     @click="$router.push('/orders')">
              <van-icon name="orders-o"></van-icon>
              全部订单
            </van-col>
            <van-col span="6"
                     @click="goOrders(1)">
              <van-icon name="gift-o"></van-icon>
              待发货
            </van-col>
            <van-col span="6"
                     @click="goOrders(2)">
              <van-icon name="logistics"></van-icon>待收货
            </van-col>
            <van-col span="6"
                     @click="goOrders(3)">
              <van-icon name="records"></van-icon>已完成
            </van-col>
          </van-row>
        </div>
        <!-- 导航 -->
        <van-cell-group>
          <van-cell title="我的地址"
                    icon="wap-home-o"
                    to="/address"
                    is-link />
          <van-cell title="我的消息"
                    icon="comment-o"
                    to="/message"
                    is-link />
          <van-cell title="我的购物车"
                    icon="cart-o"
                    to="/cart"
                    is-link />
          <van-cell title="我的积分"
                    icon="award-o"
                    to="/points"
                    is-link />
        </van-cell-group>
        <van-button class="logout"
                    v-if="$store.state.user.token != ''"
                    @click="logout"
                    type="danger">注销账号</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.state.user.token = ''
      this.$router.push('/login')
    },
    goOrders (index) {
      //跳转订单相应分类
      this.$router.push({
        path: '/orders',
        query: { id: index }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  text-align: center;
}
.content {
  position: absolute;
  top: 40px;
  bottom: 0px;
  width: 100%;
  overflow: scroll;
  background-color: rgba($color: #d3d3d3, $alpha: 0.2);
}
.top {
  padding: 5px;
  .van-row {
    width: 92%;
    margin: 0 auto;
    border: solid 1px transparent;
    border-radius: 8px;
  }
  .imgperson {
    width: 80px;
    height: 80px;
    border: solid 1px transparent;
    border-radius: 40px;
  }
  .van-col {
    height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
}
.orders {
  width: 92%;
  margin: 0 auto;
  border: solid 1px transparent;
  border-radius: 8px;
  background-color: rgba($color: white, $alpha: 0.4);
  font-size: 12px;
  position: relative;
  padding: 5px;
  .my_orders {
    font-weight: bold;
    padding: 4px;
    border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.2);
    margin-bottom: 5px;
    a {
      font-size: 8px;
      float: right;
    }
  }
  .van-col {
    text-align: center;
  }
  .van-icon {
    width: 100%;
    font-size: 30px;
  }
}
.van-cell-group {
  width: 92%;
  margin: 10px auto;
  border: solid 1px transparent;
  border-radius: 8px;
  overflow: hidden;
}
.logout {
  width: 92%;
  margin: 40px 4% 0;
}
.van-cell:not(:last-child)::after {
  border: none;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
</style>

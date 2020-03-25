<template>
  <div>
    <!-- 头部跳转导航 -->
    <div style="background-color: #F8F8F8;
                      width: 100%;
                      height: 50px;
                      line-height: 50px;
                      font-size: 12px;
                      text-align: center;">
      登录后可同步账户购物车中的商品
      <van-button type="primary"
                  round
                  color="linear-gradient(to right, #4bb0ff, #6149f6)"
                  @click="$router.push('/login')"
                  size="small">登录</van-button>
    </div>
    <!-- 商品推荐 -->
    <div style="width: 100%;">
      <h2 class="advert-title">猜你喜欢</h2>
      <van-row style="width: 98%; margin: 0 auto;">
        <van-col style="padding:3px;"
                 span="12"
                 v-for="count in 10"
                 :key="count">
          <div class="goods"
               @click="$router.push('/details')">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1061653395,1200407507&fm=26&gp=0.jpg"
                 alt="">
            <h2 style="font-weight:600; padding: 4px;">雀巢咖啡</h2>
            <p style="font-size: 10px; text-indent: 2ex;">世界上第一个速溶咖啡品牌，保有独特的咖啡香醇，拥有悠久的历史与传承。</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advert-title {
  position: relative;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 10px;
    top: -10%;
    left: 50%;
    margin-left: 40px;
    border-bottom: solid 1px black;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 35px;
    height: 10px;
    top: -10%;
    right: 50%;
    margin-right: 40px;
    border-bottom: solid 1px black;
  }
}
.goods {
  width: 100%;
  background-color: #f8f8f8;
  border: solid 1px transparent;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  img {
    display: block;
    float: left;
    width: 100%;
  }
}
</style>
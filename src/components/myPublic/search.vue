<template>
  <div>
    <van-row class="topSearchNav">
      <!-- 搜索栏 -->
      <van-col span="4">
        <van-button @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>
      <van-col span="16">
        <van-search placeholder="搜索商品名称" />
      </van-col>
      <van-col span="4">
        <van-button type="default">
          <van-icon name="search" />
        </van-button>
      </van-col>
    </van-row>
    <div class="content">
      <div>
        <!-- 热搜例子 -->
        <p style="padding: 0 0 10px 0; font-weight:bold;">发现</p>
        <span class="item"
              v-for="item in recommend"
              :key="item">
          {{item}}
        </span>
        <!-- 推荐 -->
        <div style="width: 100%;">
          <h2 class="advert-title">猜你喜欢</h2>
          <van-row style="width: 100%;">
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
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      recommend: [
        "蓝山咖啡",
        "悠诗诗咖啡"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 0px;
  width: 100%;
  overflow: scroll;
  padding: 10px;
  box-sizing: border-box;
}
.topSearchNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  img {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    background-color: transparent;
  }
  .van-search {
    height: 44px;
    padding: 5px;
    background-color: transparent;
  }
  .van-search__content {
    height: 100%;
    border: solid 1px transparent;
    border-radius: 18px;
  }
  .van-icon {
    text-align: center;
    display: block;
    font-size: 24px;
    height: 44px;
    line-height: 44px;
    background-color: transparent;
  }
  .van-button {
    background-color: transparent;
  }
}
.item {
  font-size: 10px;
  padding: 3px;
  margin: 5px;
  border: solid 1px transparent;
  border-radius: 8px;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
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
  padding: 5px;
  img {
    display: block;
    float: left;
    width: 100%;
  }
}
</style>
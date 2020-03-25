<template>
  <div class="advert-container">
    <div style="position: absolute;top:0;right:0;background-color: transparent;">
      <!-- 跳过按钮 -->
      <button class="mybtn"
              @click="goHome">
        <font style="color:white; font-size:14px">跳过</font>
      </button>

      <!-- vant环形进度条 -->
      <van-circle class="circle"
                  v-model="currentRate"
                  :rate="rate"
                  :speed="100"
                  size="60px" />

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      currentRate: 0,
      cleardata: null //清除定时器
    }
  },
  methods: {
    goHome () {
      this.$router.push('/recommend') //推荐页面
    }
  },
  computed: {
    rate () {
      return this.num * (100 / 3);
    }
  },
  created () {
    // 倒计时定时器
    this.cleardata = setInterval(() => {
      if (this.num >= 3) {
        this.$router.push('/recommend') //推荐页面
      } else {
        this.num += 1;
      }
    }, 1000)
  },
  // 销毁生命周期函数之前停止
  beforeDestroy () {
    //销毁vue数据与方法。组件结束执行
    // 定时器属于浏览器对象，属于window。
    clearInterval(this.cleardata)
  }
}
</script>

<style lang="scss" scoped>
.advert-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135543077,3402058400&fm=26&gp=0.jpg")
    center no-repeat;
  background-size: 100% 100%;
  img {
    height: 100%;
    width: 100%;
  }
  .mybtn {
    display: block;
    width: 60px;
    height: 60px;
    border: solid 1px transparent;
    border-radius: 30px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
  }
  .circle {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

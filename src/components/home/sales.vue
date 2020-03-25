<template>
  <div class="brand-container">
    <div>
      <!-- 轮播图组件 -->
      <mySwiper :imglist="imglist"></mySwiper>
      <div class="brand-item">
        <h2>热卖中</h2>
        <!-- 渲染商品 -->
        <van-row style="width: 100%; margin: 5px auto;border: solid 1px transparent;border-radius: 10px;overflow:hidden;"
                 v-for="count in 10"
                 :key="count">
          <van-card price="20.00"
                    desc="蓝山咖啡的描述信息"
                    :title="'悠诗诗'+count+'号'"
                    thumb="http://img3.imgtn.bdimg.com/it/u=600800616,1531945281&fm=26&gp=0.jpg">
            <div slot="tags">
              <van-tag plain
                       type="danger">好喝</van-tag>
              <van-tag plain
                       type="danger">折扣</van-tag>
            </div>
            <div slot="footer">
              <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
                          size="mini"
                          to="/details">去看看</van-button>
              <van-button color="linear-gradient(to right, #F08B3B, #F0643B)"
                          size="mini"
                          @click="goOrder">买买买</van-button>
            </div>
          </van-card>
        </van-row>
      </div>

    </div>
  </div>
</template>
<script>
import mySwiper from "../myPublic/swiper";
export default {
  data () {
    return {
      active: 0,
      imglist: [
        { src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2602177937,3794523123&fm=26&gp=0.jpg" },
        { src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2602177937,3794523123&fm=26&gp=0.jpg" },
        { src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2602177937,3794523123&fm=26&gp=0.jpg" },
        { src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2602177937,3794523123&fm=26&gp=0.jpg" },
      ],
      goods: {
        id: 5,
        name: "蓝山咖啡",
        price: "20",
        num: 1,
      }
    }
  },
  methods: {
    goOrder () {
      this.$store.commit("cart/SET_GOODS", this.goods);
      this.$router.push("/order")
    },
    goDetail () {
      this.$router.push("/details")
    },
  },
  components: {
    mySwiper,
  },
}
</script>
<style lang="scss" scoped>
.brand-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 0;
  width: 100%;
  height: 100%;
  background-color: #d3d3d3;
}
.brand-item {
  width: 94%;
  margin: 8px auto;
  h2 {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3px;
  }
}
</style>
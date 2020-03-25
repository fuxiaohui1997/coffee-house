<template>
  <div class="recommend-container">
    <!-- 轮播图组件 -->
    <mySwiper :imglist="imglist"></mySwiper>
    <!-- 宫格导航 -->
    <van-grid :column-num="4"
              style="width:94%; margin: 8px auto;border: solid 1px transparent;border-radius: 10px;overflow:hidden;">
      <van-grid-item icon="award-o"
                     to="points"
                     text="积分" />
      <van-grid-item icon="wap-home-o"
                     to="/address"
                     text="地址" />
      <van-grid-item icon="flag-o"
                     to="/orders"
                     text="订单" />
      <van-grid-item icon="hot-o"
                     to="/sales"
                     text="热销" />
      <van-grid-item icon="sign"
                     to="/discount"
                     text="折扣" />
      <van-grid-item icon="notes-o"
                     to="/category"
                     text="分类" />
      <van-grid-item icon="good-job-o"
                     to="/brand"
                     text="品牌" />
      <van-grid-item icon="fire-o"
                     to="/benefits"
                     text="优惠" />
    </van-grid>
    <!-- 优惠专栏 -->
    <van-row style="margin-bottom:8px;">
      <van-row style="text-align:left;font-size:16px;font-weight:bold;text-indent:2ex;">
        <van-col span="24">优惠专区</van-col>
      </van-row>
      <van-row class="discount"
               style="margin-bottom:8px;">
        <van-col span="12"
                 @click='$router.push({path:"/discount",query: {id:0}})'>
          <img src="../../assets/ban1.jpg"
               alt="">
          <span class="discount-text">
            限量抢购<br>
            9.9元起
          </span>
        </van-col>
        <van-col span="12"
                 @click='$router.push({path:"/discount",query: {id:3}})'>
          <img src="../../assets/ban1.jpg"
               alt="">
          <span class="discount-text">
            配送减免<br>
            配送费0元起
          </span>

        </van-col>
      </van-row>
      <!-- 导航 -->
      <van-row class="discount"
               style="text-align:center;font-size:12px;font-weight:bold;margin-bottom:8px;">
        <van-col span="6"
                 @click='$router.push("/brand")'>品质联盟
          <img src="../../assets/ban1.jpg"
               alt="">
        </van-col>
        <van-col span="6"
                 @click='$router.push("/discount")'>优惠套餐
          <img src="../../assets/ban1.jpg"
               alt="">
        </van-col>
        <van-col span="6"
                 @click='$router.push("/benefits")'>大额减免
          <img src="../../assets/ban1.jpg"
               alt="">
        </van-col>
        <van-col span="6"
                 @click='$router.push("/points")'>超级会员
          <img src="../../assets/ban1.jpg"
               alt="">
        </van-col>
      </van-row>
    </van-row>
    <!-- 商品渲染 -->
    <van-row style="width: 94%; margin: 5px auto;border: solid 1px transparent;border-radius: 10px;overflow:hidden;"
             v-for="count in 10"
             :key="count">
      <van-card price="20.00"
                desc="蓝山咖啡的描述信息"
                title="蓝山咖啡"
                thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3582705805,1500213479&fm=26&gp=0.jpg">
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
</template>
<script>
import mySwiper from "../myPublic/swiper";
export default {
  data () {
    return {
      imglist: [
        { src: "http://img3.imgtn.bdimg.com/it/u=4149786860,1881203195&fm=26&gp=0.jpg" },
        { src: "http://img4.imgtn.bdimg.com/it/u=1327762255,2739210285&fm=26&gp=0.jpg" },
        { src: "http://img3.imgtn.bdimg.com/it/u=4149786860,1881203195&fm=26&gp=0.jpg" },
        { src: "http://img4.imgtn.bdimg.com/it/u=1327762255,2739210285&fm=26&gp=0.jpg" },

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
    }
  },
  components: {
    mySwiper,
  },
}
</script>
<style lang="scss" scoped>
.recommend-container {
  background: url("http://img3.imgtn.bdimg.com/it/u=4149786860,1881203195&fm=26&gp=0.jpg")
    no-repeat center 0px;
  background-size: 100% auto;
  padding-top: 8px;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
.registvip {
  width: 94%;
  border: solid 1px transparent;
  border-radius: 10px;
  background-color: rgb(250, 184, 41);
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-indent: 2ex;
  margin: 8px auto;
}
.discount {
  width: 94%;
  margin: 0 auto;
  .van-col {
    position: relative;
  }
  img {
    width: 100%;
    border: solid 1px rgba($color: #000000, $alpha: 0);
    border-radius: 10px;
    margin-top: 6px auto;
  }
  .discount-text {
    display: block;
    position: absolute;
    width: 90%;
    height: 50px;
    top: 50%;
    left: 50%;
    margin-left: -45%;
    z-index: 1;
    text-align: center;
    border: solid 1px rgba($color: #000000, $alpha: 0);
    border-radius: 10px;
    background-color: rgba($color: white, $alpha: 0.7);
  }
}
</style>
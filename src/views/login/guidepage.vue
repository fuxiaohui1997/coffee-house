<template>
  <div style="height: 100%;">
    <div class="swiper-container banner">
      <div class="swiper-wrapper">

        <!-- 引导页1 -->
        <div class="swiper-slide">
          <div class="content"
               style="background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1266552080,3090381499&fm=26&gp=0.jpg') center no-repeat; background-size: auto 100%;">
            <van-row class="page-one guidepage">
              <div class="text">
                <p>闲时老树下，一书一咖啡。</p>
                <h2 class="advert-title">老树咖啡</h2>
              </div>
            </van-row>
          </div>
        </div>

        <!-- 引导页2 -->
        <div class="swiper-slide">
          <div class="content"
               style="background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4151641843,570783852&fm=26&gp=0.jpg') center no-repeat; background-size: auto 100%;"></div>
          <van-row class="page-two guidepage">
            <div class="text">
              <p>用对待人生的态度，对待一杯咖啡。</p>
              <h2 class="advert-title">SPR咖啡</h2>
            </div>
          </van-row>
        </div>

        <!-- 引导页3 -->
        <div class="swiper-slide">
          <van-row class="page-three guidepage">
            <img class="img"
                 src="../../assets/guide3.png"
                 alt="">
            <span class="text">Coffee House</span>
            <van-button class="btn"
                        type="default"
                        size="small"
                        to="/index">点击体验</van-button>
          </van-row>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
export default {
  name: 'Swiper',
  mounted () {
    new Swiper('.banner', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
}
.guidepage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.advert-title {
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 40px;
    height: 10px;
    top: 0;
    left: 50%;
    margin-left: 40px;
    border-bottom: solid 1px azure;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 35px;
    height: 10px;
    top: 0;
    right: 50%;
    margin-right: 40px;
    border-bottom: solid 1px azure;
  }
}
.page-one,
.page-two {
  .text {
    position: absolute;
    width: 80%;
    top: 60%;
    left: 10%;
    color: white;
    text-align: center;
    font-size: 16px;
  }
}
.page-three {
  width: 100%;
  height: 100%;
  .img {
    width: 100%;
    height: 100%;
  }
  span.text {
    position: absolute;
    top: 40%;
    width: 100%;
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .btn {
    position: absolute;
    background-color: transparent;
    color: white;
    font-size: 20px;
    font-weight: 400;
    bottom: 10%;
    left: 50%;
    margin-left: -35px;
  }
}
</style>

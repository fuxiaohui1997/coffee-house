<template>
  <div>
    <!-- 轮播图组件 -->
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item,index) in imglist"
             :key="index">
          <img :src="item.src"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.min.js';
export default {
  name: 'Swiper',
  props: {
    imglist: {
      type: Array,
      required: true
    }
  },
  mounted () {
    new Swiper('.banner', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }
    });
  },
}
</script>
<style lang="scss" scoped>
.banner {
  border: solid 1px rgba($color: #000000, $alpha: 0);
  border-radius: 10px;
  width: 92%;
  margin: 0 auto;
}
</style>
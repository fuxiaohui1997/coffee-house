<template>
  <div style="height:100%;width:100%;">
    <!-- 标题 -->
    <van-row class="title">
      <van-col span="3">
        <van-button style="background-color:transparent; border: none; height:100%;"
                    @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>
      商品详情
    </van-row>
    <!-- 内容部分 -->
    <div class="content">
      <div class="swiper-container banner">
        <!-- 轮播图 -->
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item, index) in imglist"
               :key="index">
            <img :src="item.src"
                 alt="" />
          </div>
        </div>
      </div>
      <!-- 商品信息 -->
      <div class="panel">
        <div class="price">￥{{ goods.price }}.00</div>
        <h1>{{ goods.name }}</h1>
        <div class="text">
          由产自牙买加蓝山的咖啡豆冲泡而成的咖啡。其中依档次又分为牙买加蓝山咖啡和牙买加高山咖啡。
        </div>
      </div>
      <!-- 下拉详情 -->
      <div class="dropdown">
        <h2 @click="makeToggle()">制作
          <van-icon v-show="make"
                    name="arrow-down"></van-icon>
          <van-icon v-show="!make"
                    name="arrow-up"></van-icon>
        </h2>
        <div v-show="make"
             class="details-content">
          <p>
            蓝山咖啡味道纯正的“秘密”：他们的咖啡树全部长在崎岖的山坡上，采摘过程非常的困难，非当地熟练的女工根本无法胜任。采摘时选择恰到好处的成熟的咖啡豆非常重要，未成熟或熟透了都会影响咖啡的质量。采摘后的咖啡豆当天就要去壳，之后让其发酵12—18小时。此后对咖啡豆进行清洗和筛选。之后
            的工序是晾晒，必须在水泥地上或厚的毯子上进行，直至咖啡豆的湿度降至12%—14%。然后放置在专门的仓垛里储存。需要时拿出来焙炒，然后磨成粉末。这些程序必须严格掌握，否则，咖啡的质量将受到影响。
          </p>
        </div>
      </div>

      <div class="dropdown">
        <h2 @click="originToggle()">来源
          <van-icon v-show="origin"
                    name="arrow-down"></van-icon>
          <van-icon v-show="!origin"
                    name="arrow-up"></van-icon>
        </h2>
        <div v-show="origin"
             class="details-content">
          <p>说到牙买加，大家的眼睛立刻亮起来，因为它出产世界上最好的“牙买加蓝山咖啡”（Jamaica Blue Mountain）。我们绝对相信牙买加蓝山咖啡是最佳的咖啡，它的酸、甘、醇与苦味非常平衡，味道芳香，喝起来非常润顺；但是，它的价格过高，虽然值得一试，却无须为此着迷。因为其他的精选咖啡也都有各自的特性，而且滋味鲜美，价格也合理，这才是我们生活中的好咖啡。</p>
          <p>最早的“牙买加蓝山”，是指“华伦福特农庄”与“银丘农庄”所生产的咖啡，以前者的质量最佳；现今的牙买加蓝山，指的则是生长在牙买加首都“金斯顿”以东的蓝山地区（高度超过1000米）的咖啡豆。现在马威斯邦是最大的庄园，其木桶印有M.B.C.F，在台湾地区常有它的产品。牙买加蓝山的品管甚严，由政府“咖啡产业委员会”进行认证工作。</p>
          <p>一般生长在低海拔与其他地区的咖啡豆，只能叫做“牙买加高山豆”或“牙买加水洗豆”，与牙买加蓝山相比较，风味相去甚多，但是，这些产地的面积是真正蓝山地区的2倍，产量占该国的75%，所以买到牙买加咖啡时，可别以为买到了蓝山咖啡。</p>
          <p>由于牙买加蓝山的名气太大，因此，市面上便出现冒牌的蓝山式咖啡，或者干脆叫做“蓝山咖啡”，基本上这都是店家自行调配的综合品，里面可能一粒真正的牙买加蓝山豆都没有。</p>
        </div>
      </div>

      <div class="dropdown">
        <h2 @click="historyToggle()">历史
          <van-icon v-show="history"
                    name="arrow-down"></van-icon>
          <van-icon v-show="!history"
                    name="arrow-up"></van-icon>
        </h2>
        <div v-show="history"
             class="details-content">
          <p>1717年法国国王路易十五下令在牙买加种植咖啡，二十年代中期，牙买加总督尼古拉斯·劳伊斯爵士（Nicholas Lawes）从马提尼克岛（Martinique）进口的阿拉比卡的种子，并开始在圣安德鲁地区（St. Andrew）推广种植。直到今天，圣安德鲁地区仍然是牙买加蓝山咖啡的三大产区之一，另外两个产区分别是：波特兰产区（Portland）和圣托马斯产区（St.Thomas）。8年内，牙买加出口纯正的咖啡达375吨多。1932年，咖啡生产达到高峰，收获的咖啡多达15000多吨。</p>
          <p>牙买加政府于1950年设立了牙买加咖啡工业委员会（the Jamaica Coffee Industry Board），该委员会为牙买加咖啡制定质量标准，并监督质量标准的执行，以确保牙买加咖啡的品质。委员会对牙买加出口的生咖啡和烘培咖啡颁予特制官印，是世界上最高级别的国家咖啡机构。能够代表蓝山咖啡原产地的，有马菲斯河堤咖啡厂Mavis Bank Coffee Factory（M.B.C.F）、蓝山咖啡合作厂（M.H.C.C.T.）、波特兰蓝山咖啡合作厂（P.X.X.S.H.）、咖啡工业协会（华伦福特）、咖啡工业协会（圣约翰峰）和蓝丽（J.A.S）等6种标志。</p>
          <p>到1969年，情况得到了改善，因为利用日本贷款改善了生产质量，从而保证了市场。到如今，这种咖啡已达到了被狂热喜爱的地步。</p>
          <p>到1981年，牙买加又有1500公顷左右的土地被开垦用于种植咖啡，随后又开辟了另外6000公顷的咖啡地。事实上，今天的蓝山地区是一个仅有6000公顷种植面积的小地方，不可能所有标有"蓝山"字样的咖啡都在那里种植。另外的12000公顷土地用于种植其他两种类型的咖啡：高山顶级咖啡和牙买加优洗咖啡。</p>
        </div>
      </div>
      <!-- 评价栏 -->
      <div class="assess">
        <h5>评价<font class="point">好评99%</font>
        </h5>
        <van-row class="label">
          <van-col span="5">美味可口</van-col>
          <van-col offset="1"
                   span="5">价格实惠</van-col>
          <van-col offset="1"
                   span="5">香甜可口</van-col>
          <van-col offset="1"
                   span="5">分量充足</van-col>
        </van-row>
        <!-- 渲染评价列表 -->
        <div v-for="item in assess"
             :key="item.name"
             class="words">
          <van-row>
            <van-col class="user-img">
              <img src="../../assets/logo.png"
                   alt="" />
            </van-col>
            <van-col class="name">
              {{ item.name }}
            </van-col>
            <van-col class="time">
              {{ item.time }}
            </van-col>
          </van-row>
          <van-row class="words-content">{{ item.words }}</van-row>
        </div>
      </div>
    </div>
    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon @click="$router.push('/index')"
                             icon="wap-home-o"
                             color="#07c160" />
      <van-goods-action-icon @click="$router.push('/cart')"
                             icon="cart-o"
                             :info="$store.state.cart.num" />
      <van-goods-action-icon icon="orders-o"
                             @click="$router.push('/orders')" />
      <van-goods-action-button type="warning"
                               @click="add(goods)"
                               text="加入购物车" />
      <van-goods-action-button type="danger"
                               @click="goShopping()"
                               text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
export default {
  data: function () {
    return {
      make: false,
      origin: false,
      history: false,
      imglist: [
        {
          src:
            'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
        },
        {
          src:
            'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
        },
        {
          src:
            'http://img0.imgtn.bdimg.com/it/u=892990202,485361550&fm=26&gp=0.jpg'
        }
      ],
      assess: [
        {
          name: '用户1',
          words:
            '很喜欢的蓝山口味，还有卡布奇诺口味，店家非常的贴心，还送了一个蓝色的咖啡杯，这也是我最喜欢的，好漂亮，嗯，咖啡味道应该很不错。经济也实惠，包装也非常的精美，如果喝着好喝，希望下次还可以光顾。喜欢喝咖啡的朋友出手吧。下午喝一杯咖啡，配上自己做的吐司蛋糕，惬意的下午享受着阳光。',
          time: '2020-03-01'
        },
        {
          name: '用户2',
          words:
            '口感浓郁，包装精美，味道超赞！京东商品质量有保障，长期在网上购买，物流很快，快递员服务态度非常棒。会一如既往的坚持。已经很多次购买了，这次正好赶上圣诞节有活动，所以价格非常的合适活动，而且是蓝山风味的，特别喜欢这个口味，已经多次向朋友们推荐了总之物美价廉，物超所值啊！',
          time: '2020-03-10'
        },
        {
          name: '用户3',
          words:
            '看外包装不错，嗯，今天早晨喝了一杯。男生咖啡还是有男生的口味，偏一点点苦香，嗯，味道比较纯正。常喝咖啡的人可以尝试，嗯，奶味儿并不是很足，咖啡味十足。建议喜欢喝奶味重的，可以和卡布奇诺或者自己添加一点，先来，也是一个不错的选择。',
          time: '2020-03-14'
        }
      ],
      // num:1,
      goods: {
        id: 5,
        name: '蓝山咖啡',
        price: '20',
        num: 1
      }
    }
  },
  methods: {
    add (goods) {
      this.$store.commit('cart/SET_GOODS', goods)//加入购物车并选中
    },
    goShopping () {
      this.$store.commit('cart/SET_GOODS', this.goods)//加入购物车并选中，将选中商品加入确认订单页面并跳转
      this.$router.push('/order')
    },
    makeToggle () {
      this.make = !this.make;
    },
    originToggle () {
      this.origin = !this.origin;
    },
    historyToggle () {
      this.history = !this.history;
    }
  },
  components: {},
  computed: {},
  mounted () {
    new Swiper('.banner', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
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
.dropdown {
  margin-top: 20px;
  background-color: rgba($color: white, $alpha: 0.8);
  padding: 4% 4% 0 4%;
  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.5);
    padding-bottom: 10px;
  }
  p {
    text-indent: 2ex;
  }
  .details-content {
    margin: 10px 0;
  }
}
.title {
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.content {
  position: absolute;
  width: 100%;
  top: 40px;
  bottom: 60px;
  overflow: scroll;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
.panel {
  padding: 15px;
  background-color: rgba($color: white, $alpha: 0.8);
  h1 {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
  .text {
    font-size: 14px;
    text-indent: 2ex;
  }
  .price {
    color: #ff6b00;
    font-size: 25px;
  }
}
.assess {
  margin-top: 20px;
  background-color: rgba($color: white, $alpha: 0.8);
  padding: 4%;
  h5 {
    font-weight: 400;
    font-size: 14px;
    border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.5);
    padding-bottom: 10px;
  }
  .words {
    position: relative;
    padding: 8px 0;
    border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.3);
    .name {
      font-weight: bold;
      line-height: 30px;
    }
    .user-img {
      width: 30px;
      height: 30px;
      border: solid 1px rgba($color: #d3d3d3, $alpha: 0.6);
      border-radius: 15px;
      margin-right: 10px;
      overflow: hidden;
    }
    .time {
      float: right;
    }
    .words-content {
      font-size: 14px;
      color: rgba($color: black, $alpha: 0.9);
    }
  }
}
.arrowtop {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 200;
  width: 42px;
  i {
    display: block;
    width: 42px;
    height: 42px;
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 24px;
  }
}
.van-goods-action {
  position: absolute;
  bottom: 0px;
}
.point {
  color: #e4393c;
  margin-left: 10px;
  font-weight: 400;
  font-size: 10px;
}
.label {
  padding: 10px 0;
  border-bottom: solid 1px rgba($color: #d3d3d3, $alpha: 0.3);
  .van-col {
    text-align: center;
    background-color: #fdf0f0;
    color: rgba($color: black, $alpha: 0.7);
  }
}
</style>

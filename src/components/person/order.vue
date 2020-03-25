<template>
  <div style="width:100%;height:100%;">
    <!-- 标题 -->
    <van-row class="title">
      <van-col span="3">
        <van-button style="background-color:transparent; border: none; height:100%;"
                    @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>确认订单
    </van-row>
    <!-- 确认订单内容 -->
    <van-row class="order-content">
      <div>
        <van-row style="
                width: 94%;
                margin: 0 auto 15px;
                border: solid 1px transparent;
                border-radius: 6px;
                background-color: white;">
          <!-- 地址 -->
          <van-row @click="selectAddress">
            <van-col span="6"
                     style="height:80px;line-height:80px;text-align:center;font-size:30px;font-weight: bold;color: white;">
              <van-icon name="location-o"
                        style="background-color:lightskyblue;
                            border: solid 1px transparent; 
                            border-radius: 50%;
                            padding: 3px;
                            " />
            </van-col>
            <van-col span="18"
                     v-show="Object.keys(addressMsg).length != 0">
              <van-row style="padding-top: 10px; font-weight:bold;">
                {{ addressMsg.name }}
              </van-row>
              <van-row>
                {{ addressMsg.tel }}
              </van-row>
              <van-row>
                {{ addressMsg.address }}
              </van-row>
            </van-col>
            <van-col span="18"
                     v-show="Object.keys(addressMsg).length == 0">
              <van-button icon="plus"
                          style="border: none; width: 100%;padding-top: 20px;">添加地址</van-button>
            </van-col>
          </van-row>
          <van-row style="
                    font-size: 10px;
                    color: orange;
                    text-indent: 2ex;">
            <van-col span="20">
              <van-icon name="logistics" />发送商品及物流动态给收货人</van-col>
            <van-col span="4">
              <van-checkbox v-model="point"
                            icon-size="12px"></van-checkbox>
            </van-col>
          </van-row>
        </van-row>
        <!-- 确认订单中的商品 -->
        <div v-if="!lists.length">
          <!-- 没有商品时的推荐 -->
          <van-button v-if="!lists.length"
                      @click="$router.push('/cart')"
                      style="background-color:transparent;border:none;"
                      type="default">当前没有商品，去购物车看看！！</van-button>
          <h2 class="advert-title">猜你喜欢</h2>
          <van-row>
            <van-col style="padding:2px;"
                     span="12"
                     v-for="count in 6"
                     :key="count">
              <div class="recommend-goods"
                   @click="$router.push('/details')">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1061653395,1200407507&fm=26&gp=0.jpg"
                     alt="">
                <h2 style="font-weight:600; padding: 4px;">雀巢咖啡</h2>
                <p style="font-size: 10px; text-indent: 2ex;">世界上第一个速溶咖啡品牌，保有独特的咖啡香醇，拥有悠久的历史与传承。</p>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 渲染商品 -->
        <div v-if="lists.length">
          <div v-for="(item, index) in lists"
               :key="index">
            <van-card style="padding: 10px 0 10px 0;"
                      :price="item.price"
                      desc="由产自牙买加蓝山的咖啡豆冲泡而成的咖啡。"
                      :title="item.name"
                      thumb="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2526645312,3492475555&fm=26&gp=0.jpg">
              <div slot="tags">
                <van-tag plain
                         @click="item.num <= 1 ? 1 : item.num--">-</van-tag>
                <input type="text"
                       v-model="item.num"
                       class="num" />
                <van-tag plain
                         @click="item.num++">+</van-tag>
              </div>
              <div slot="footer">
                <van-button size="mini"
                            type="warning"
                            @click="del(index)"
                            class="delbutton">删除</van-button>
              </div>
            </van-card>
          </div>
          <!-- 订单事项 -->
          <div class="order-items">
            <van-row class="order-item">
              <van-col class="order-title"
                       span="6">配送方式</van-col>
              <van-col span="18">
                <van-field placeholder="普通配送" />
              </van-col>
            </van-row>
            <van-row class="order-item">
              <van-col class="order-title"
                       span="6">订单备注</van-col>
              <van-col span="18">
                <van-field type="textarea"
                           autosize
                           placeholder="请先和商家协商" />
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </van-row>
    <!-- 底部结算栏 -->
    <van-submit-bar :price="sum * 100"
                    button-text="结算"
                    @submit="onSubmit">
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: function () {
    return {
      point: true,
      lists: [],
      addressMsg: {}
    }
  },
  created () {
    //渲染订单
    this.$store.state.cart.num = ''
    var allLists = Object.assign([], this.goodslists)
    this.lists = allLists.filter(item => {
      return item.isSelect
    })
    this.addresslist.forEach(item => {
      if (item.id == this.addressId) {
        this.addressMsg = item
      }
    })
  },
  methods: {
    // 删除功能
    del (index) {
      this.lists.splice(index, 1)
    },
    //跳转地址页
    selectAddress () {
      this.$router.push('/address')
    },
    onSubmit () {
      //无商品拦截
      if (!this.lists.length) {
        this.$store.state.myalert.visible = true
        this.$store.state.myalert.msg = '请先添加商品'
        return
      }
      //添加新订单
      this.$store.state.myalert.visible = true
      this.$store.state.myalert.msg = '提交订单成功'
      this.$store.commit('orders/SET_ORDERS', {
        address: Object.assign({}, this.addressMsg),
        lists: Object.assign([], this.lists)
      })
      this.$store.commit('cart/SET_ORDERLISTS')
      this.$router.push('/orders')
    }
  },
  watch: {
    //监听选中地址id
    addressId (val) {
      var isAddress = false
      this.addresslist.forEach(item => {
        if (item.id == val) {
          isAddress = true
          this.addressMsg = item
        }
      })
      if (!isAddress) {
        this.addressMsg = {}
      }
    }
  },
  computed: {
    ...mapState({
      goodslists: state => state.cart.lists,
      addressId: state => state.address.addressId,
      addresslist: state => state.address.list
    }),
    sum () {
      return this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num) //总价格
      }, 0) //总价格默认参数值为0
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend-goods {
  width: 100%;
  background-color: #f8f8f8;
  border: solid 1px transparent;
  border-radius: 8px;
  padding: 10px;
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
.order-title {
  line-height: 44px;
  text-align: center;
}
.order-items {
  width: 94%;
  margin: 0 auto 15px;
  border: solid 1px rgba($color: #000000, $alpha: 0);
  border-radius: 6px;
  background-color: #fafafa;
}
.order-item {
  margin: 10px 0;
}
.order-content {
  position: absolute;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: scroll;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
.van-card {
  width: 94%;
  margin: 0 auto 15px;
  border: solid 1px rgba($color: #000000, $alpha: 0);
  border-radius: 6px;
}
.van-submit-bar {
  position: absolute;
  bottom: 0px;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
.checkboxbutton {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -10px;
}
.delbutton {
  position: absolute;
  right: 20px;
  bottom: 5px;
  margin-top: 10px;
}
.num {
  width: 30px;
  text-align: center;
  font-size: 16px;
}
</style>

<template>
  <div style="width:100%;height:100%;">
    <van-row class="title">
      <van-col span="3">
        <van-button style="background-color:transparent; border: none; height:100%;"
                    @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>积分规则
    </van-row>
    <div class="content">
      <div>
        <h2>1. 积分获取</h2>
        <p>
          a) 积分专属一杯咖啡,仅限一杯咖啡网内使用; </p>
        <p>
          b) 积分可以累积,2年内有效;</p>
        <p>
          c) 买家在一杯咖啡网消费购物可以获得积分,积分返点比例为:除3C产品外的所有商品均以2元:1积分计,3C产品以10元:1积分计,购买的商品页面中显示积分为零的商品不享受积分获取;</p>
        <p>
          d) 积分的数值精确到个位(小数点后全部舍弃,不进行四舍五入),例如:**101元的商品,返50(101*0.5=50.5)个积分;</p>
        <p>
          e) 买家在完成该笔交易(订单状态为“已签收”)后才能得到此笔交易的相应积分,如购买商品参加店铺其他优惠,则优惠的金额部分不享受积分获取;</p>
        <p>
          f) 买家在一杯咖啡购物付款时可以使用积分,100积分抵扣1元。使用时最多可抵扣应付订单总额的30%或200元人民币,这两个条件以先达到的为准进行抵扣;</p>
        <p>
        </p>
        <h2>2. 积分有效期</h2>
        <p>
          积分自发放日起2年内有效,逾期自动失效。
        </p>
        <h2>3. 积分查询</h2>
        <p>
          您可在我的一杯咖啡-我的一杯咖啡积分板块查询积分获取及使用明细
        </p>
        <h2>4. 积分使用</h2>
        <p>
          a) 首先每个店铺的商品有最多可使用的积分数,您可以在确认订单页查看
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.content {
  position: absolute;
  top: 40px;
  bottom: 0px;
  width: 100%;
  overflow: scroll;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
h2 {
  padding: 15px 10px 5px;
  font-size: 16px;
  font-weight: bold;
}
p {
  font-size: 12px;
  text-indent: 2ex;
  padding: 2px 10px;
  margin-bottom: 5px;
}
</style>
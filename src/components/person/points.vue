<template>
  <div style="width:100%;height:100%;">
    <!-- 标题栏 -->
    <van-row class="title">
      <van-col span="3">
        <van-button style="background-color:transparent; border: none; height:100%;"
                    @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>积分中心
    </van-row>
    <!-- 内容部分 -->
    <div class="content">
      <div>
        <van-row class="header">
          <van-col offset="1"
                   span="5"
                   style="font-size: 40px;  color: #ffa454; height: 46px;">
            <van-icon style="border: solid 3px #ffa454; border-radius: 50%;  text-align: center;"
                      name="award-o"></van-icon>
          </van-col>
          <van-col span="18">
            <van-row style="height: 30px; margin-bottom:2px;">
              <van-col style="font-size: 21px; color: #ffa454; font-weight: bold;">{{ this.points }}</van-col>
              <van-col style="font-size: 12px; color: #ffa454; padding-top: 13px;">积分</van-col>
              <van-col style="float: right; margin-right: 10px;"
                       @click="$router.push('/legal')">规则&gt;</van-col>
            </van-row>
            <van-row style="font-size: 12px;">
              购物换积分，积分万能兑
            </van-row>
          </van-col>
        </van-row>
        <h4 style="font-size:17px; font-weight: bold; margin: 15px 0px 5px 10px;">
          天天赚积分
        </h4>
        <van-row class="pointsplus">
          <van-row>
            <van-col offset="1"
                     span="4">
              <van-icon name="hot-o"></van-icon>
            </van-col>
            <van-col span="19"
                     class="title_text">热销
              <font style="font-size: 8px;">积分<font style="color: #ffa454;">+10</font>
              </font>
              <van-button style="background: transparent;float: right;"
                          @click="$router.push('/sales')">去逛逛&gt;</van-button>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="1"
                     span="4">
              <van-icon name="notes-o"></van-icon>
            </van-col>
            <van-col span="19"
                     class="title_text">分类
              <font style="font-size: 8px;">积分<font style="color: #ffa454;">+10</font>
              </font>
              <van-button style="background: transparent;float: right;"
                          @click="$router.push('/category')">去逛逛&gt;</van-button>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="1"
                     span="4">
              <van-icon name="good-job-o"></van-icon>
            </van-col>
            <van-col span="19"
                     class="title_text">品牌
              <font style="font-size: 8px;">积分<font style="color: #ffa454;">+10</font>
              </font>
              <van-button style="background: transparent;float: right;"
                          @click="$router.push('/brand')">去逛逛&gt;</van-button>
            </van-col>
          </van-row>
          <van-row>
            <van-col offset="1"
                     span="4">
              <van-icon name="fire-o"></van-icon>
            </van-col>
            <van-col span="19"
                     class="title_text">实惠
              <font style="font-size: 8px;">积分<font style="color: #ffa454;">+10</font>
              </font>
              <van-button style="background: transparent;float: right;"
                          @click="$router.push('/benefits')">去逛逛&gt;</van-button>
            </van-col>
          </van-row>
        </van-row>

        <h4 style="font-size:17px; font-weight: bold; margin: 15px 0px 5px 10px;">
          商品兑换
        </h4>
        <van-row style="width: 94%; margin: 5px auto;border: solid 1px transparent;border-radius: 10px;overflow:hidden;"
                 v-for="count in 10"
                 :key="count">
          <van-card desc="蓝山咖啡的描述信息"
                    title="蓝山咖啡"
                    thumb="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3582705805,1500213479&fm=26&gp=0.jpg">
            <div slot="tags">
              <van-tag plain
                       type="danger">20积分</van-tag>
            </div>
            <div slot="footer">
              <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
                          size="mini"
                          class="submitbutton"
                          @click="submit">去兑换</van-button>
            </div>
          </van-card>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      points: 902
    }
  },
  methods: {
    //兑换商品
    submit () {
      this.$store.state.myalert.msg = '兑换成功';
      this.$store.state.myalert.visible = true;
      this.points -= 20;
      this.visible = true;
    }
  }
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
  .header {
    background-color: rgba($color: white, $alpha: 0.5);
    padding: 10px 0;
  }
}
.pointsplus {
  width: 92%;
  margin: 5px auto;
  background-color: rgba($color: white, $alpha: 0.5);
  border: solid 1px transparent;
  border-radius: 6px;
  .van-row {
    position: relative;
    height: 60px;
    margin: 5px 0;
    .van-icon {
      margin-top: 10px;
      font-size: 36px;
      font-weight: bold;
      color: rgba($color: white, $alpha: 0.9);
      border: solid 3px rgba($color: white, $alpha: 1);
      border-radius: 50%;
      background-color: rgba($color: #29dbe7, $alpha: 01);
    }
    .title_text {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
    }
  }
}
.submitbutton {
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.msg-enter-active {
  transition: all 0.5s;
  opacity: 1;
  transform: translateY(0px);
}
.msg-leave-active {
  transition: all 0.5s;
  opacity: 1;
  transform: translateY(0px);
}
.msg-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.msg-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

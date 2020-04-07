<template>
  <div style="width:100%;height:100%;">
    <!-- 顶部标题 -->
    <van-row class="title">
      <van-col span="3">
        <van-button style="background-color:transparent; border: none; height:100%;"
                    @click="$router.go(-1)"
                    type="default">
          <van-icon name="arrow-left"></van-icon>
        </van-button>
      </van-col>
      <van-col span="18">
        消息中心
      </van-col>
    </van-row>
    <div class="content">
      <div>
        <!-- 过渡动画 -->
        <transition name="msg">
          <!-- 自定义弹出框 -->
          <div v-show="visible"
               class="myalert">
            {{ this.msg }}
          </div>
        </transition>
        <!-- 未登录显示 -->
        <div v-if="!$store.state.user.token">
          <needLogin></needLogin>
        </div>
        <!-- 已登录显示 -->
        <div v-if="$store.state.user.token">
          <van-row class="msg-points">
            <span v-show="$store.state.message.unreadNum">
              有{{$store.state.message.unreadNum}}条未读消息
            </span>
            <span v-show="!$store.state.message.unreadNum">
              没有未读消息
            </span>
            <span style="margin-left: 30px;"
                  @click="clearUnread()">
              <van-icon name="delete"></van-icon> 清除未读
            </span>
          </van-row>
          <!-- 渲染信息列表 -->
          <div v-for="(item,index) in $store.state.message.msg"
               :key="index"
               class="msg"
               @click="goActive(item, index)">
            <h2>{{item.title}}
              <span v-show="!item.read"
                    style="color:#07C160;">new</span>
              <span v-show="item.read"
                    style="color:#7E7E7E;">已读</span>
              <span style="float:right;">{{item.time}}
              </span>
            </h2>
            <van-row>
              <van-col span="6">
                <img :src="item.imgsrc"
                     alt="">
              </van-col>
              <van-col span="15"
                       style="padding:5px;">
                {{item.content}}
              </van-col>
            </van-row>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
import needLogin from '../../components/person/logout';
export default {
  data () {
    return {
      visible: false,
      msg: '活动已结束'
    };
  },
  watch: {
    visible (val) {
      if (val) {
        setTimeout(() => {
          this.visible = false
        }, 1000)
      }
    }
  },
  methods: {
    //活动跳转
    goActive (item, index) {
      if (item.status) {
        this.visible = true
      } else {
        if (!item.read) {
          //更改为已读
          this.$store.commit('message/read', index);
        }
        this.$router.push(item.path);
      }
    },
    //清除未读
    clearUnread () {
      this.$store.commit('message/clearUnread');
    }
  },
  components: {
    needLogin
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
  text-indent: -2ex;
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
.msg-points {
  padding: 6px;
}
.msg {
  width: 94%;
  margin: 5px auto;
  background-color: #fafafa;
  box-sizing: border-box;
  padding: 10px;
  border: solid 1px transparent;
  border-radius: 8px;
  h2 {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  span {
    font-size: 8px;
    font-weight: 400;
    margin-left: 3px;
  }
}
.myalert {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #e8e8e8;
  position: fixed;
  top: 48%;
  left: 50%;
  margin-top: -15px;
  margin-left: -100px;
  border: solid 1px transparent;
  border-radius: 6px;
  background-color: rgba($color: black, $alpha: 0.6);
  z-index: 99999;
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
<template>
  <div id="app"
       v-cloak>

    <!-- 弹出框组件 -->
    <myAlert :msg="msg"
             :visible="visible"></myAlert>

    <!-- 翻转过渡动画 -->
    <transition name="index">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import myAlert from './components/myPublic/myalert'
export default {
  components: {
    myAlert
  },
  computed: {
    ...mapState({
      // 弹出框属性
      msg: state => state.myalert.msg,
      visible: state => state.myalert.visible
    })
  },
  watch: {
    msg (val) {
      // 监听弹出框，3秒后消失
      if (val) {
        setTimeout(() => {
          this.$store.state.myalert.visible = false
          this.$store.state.myalert.msg = ''
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
.index-enter-active {
  transition: all 0.5s;
  transition-delay: 0.5s;
}
.index-leave-active {
  transition: all 0.5s;
}
.index-enter {
  opacity: 0;
}
.index-leave-to {
  opacity: 0.3;
}
[v-cloak] {
  display: none;
}
</style>

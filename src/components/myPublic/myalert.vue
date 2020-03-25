<template>
  <div>
    <transition name="msg">
      <!-- 自定义弹出框 -->
      <div v-show="visible"
           class="myalert">
        {{ this.msg }}
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'MyAlert',
  props: ['visible', 'msg']
}
</script>
<style lang="scss" scoped>
.myalert {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #07c160;
  position: fixed;
  top: 10%;
  left: 50%;
  margin-top: -15px;
  margin-left: -100px;
  border: solid 1px transparent;
  border-radius: 6px;
  background-color: rgba($color: #f8f8f8, $alpha: 0.6);
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

<template>
  <div style="width:100%;height:100%;">
    <!-- 标题 -->
    <van-row class="title">商品分类</van-row>
    <!-- 内容部分 -->
    <div class="content">
      <div class="left"
           ref="left">
        <ul>
          <!-- 渲染左侧分类导航 -->
          <li v-for="(item, index) in left"
              :class="{ current: index == currentIndex }"
              @click="selectItem(index, $event)"
              :key="index">
            <span class="left-item">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="right"
           ref="right">
        <div>
          <!-- 渲染右侧商品分类 -->
          <div v-for="(item, index) in right"
               class="right-item right-item-hook"
               :key="index">
            <!-- 分类名 -->
            <h2 style="font-size:12px;font-weight:bold;text-indent:2ex;padding: 5px 0;">
              {{ item.name }}
            </h2>
            <van-grid column-num="2">
              <!-- 渲染分类商品 -->
              <van-grid-item use-slot
                             v-for="num in item.content"
                             :key="num"
                             @click="goDetail"
                             style="position:relative;">
                <img src="../../assets/ban1.jpg"
                     alt="" />
                <span>咖啡{{ num }}号</span>
                <van-button style="
                                position:absolute;
                                width: 100%;
                                height: 100%;
                                background-color: transparent;
                                border: none;"
                            @click="goDetail"></van-button>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll/dist/bscroll'
export default {
  data () {
    return {
      currentIndex: 0,
      left: [
        '纯咖啡',
        '白咖啡',
        '意大利咖啡',
        '蓝山咖啡',
        '曼特宁咖啡',
        '哥伦比亚咖啡',
        '越南咖啡',
        '猫屎咖啡',
        '摩卡咖啡'
      ],
      right: [
        { name: '纯咖啡', content: [1, 2, 3, 4, 5, 6] },
        { name: '白咖啡', content: [1, 2, 3, 4] },
        { name: '意大利咖啡', content: [1, 2, 3, 4, 5] },
        { name: '蓝山咖啡', content: [1, 2, 3] },
        { name: '曼特宁咖啡', content: [1, 2, 3, 4] },
        { name: '哥伦比亚咖啡', content: [1, 2, 3] },
        { name: '越南咖啡', content: [1, 2, 3, 4] },
        { name: '猫屎咖啡', content: [1, 2, 3] },
        { name: '摩卡咖啡', content: [1, 2, 3] }
      ],
      scrollY: 0,
      listHeight: [] //存储右边每一项li高度
    }
  },
  methods: {
    goDetail () {
      this.$router.push('/details')
    },
    _initScroll () {
      // 联动实例化插件对象
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时时获取滚动高度
      })
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3 //探针的效果，时时获取滚动高度
      })
      // right这个对象监听滚动事件，
      this.rights.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName(
        'right-item-hook'
      )
      let height = 0 //默认高度
      this.listHeight.push(height) //添加高度数组中
      // 循环对象
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight // 对象高度
        this.listHeight.push(height)
      }
    },
    // 左侧点击效果
    // index 下标
    // event 点击对象事件
    selectItem (index, event) {
      // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
      // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
      this.currentIndex = index
      if (!event._constructed) {
        return
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          'right-item-hook'
        )
        let el = rightItems[index]
        // scrollToElement()//滚动到指定的目标元素
        this.rights.scrollToElement(el)
      }
    }
  },
  // 生命周期函数
  mounted () {
    //页面渲染到浏览器时候
    // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
    // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
    // $nextTick() 让所有DOM执行完后，回调执行方法
    this.$nextTick(() => {
      this._initScroll() //调用初始化联动效果
      this._getHeight() //获取右边每一项高度
    })
  },
  // 计算属性
  computed: {}
}
</script>

<style lang="scss" scoped>
.title {
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  text-align: center;
}
.content {
  display: flex;
  position: absolute;
  /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
  top: 40px;
  bottom: 0;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  width: 100%;
  overflow: hidden;

  .left {
    flex: 0 0 80px;
    width: 80px;
    background-color: rgba($color: #d3d3d3, $alpha: 0.4);
  }
  .left li {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .left li.current {
    background-color: rgba($color: #d3d3d3, $alpha: 0.4);
    color: hsl(41, 83%, 48%);
    font-weight: bold;
  }
  .left-item {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    height: 50px;
    text-align: center;
  }
  .right {
    flex: 1;
    background-color: rgba($color: #d3d3d3, $alpha: 0.4);

    .van-grid {
      width: 95%;
      margin: 0 auto;
      border: solid 1px rgba($color: #000000, $alpha: 0);
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
      padding: 5px;
    }
  }
}
</style>

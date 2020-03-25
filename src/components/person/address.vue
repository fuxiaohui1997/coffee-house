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
      地址
    </van-row>
    <div class="content">
      <div>
        <div v-if="!$store.state.user.token">
          <needLogin></needLogin>
        </div>
        <div v-if="$store.state.user.token">
          <!-- 地址列表组件-->
          <van-address-list v-model="$store.state.address.addressId"
                            :list="list"
                            default-tag-text="默认"
                            @add="onAdd"
                            @edit="onEdit" />
        </div>

      </div>
    </div>
    <!-- 地址添加或编辑 -->
    <van-row class="newaddress"
             v-show="edit">
      <van-row>
        <van-col style="height:50px;line-height:50px;font-size:16px;font-weight:bold;"
                 span="18">
          <van-button style="background-color:transparent; border: none; height:100%;"
                      @click="cancel"
                      type="default">
            <van-icon name="arrow-left"></van-icon>
          </van-button>
          {{edit=="edit"?'修改地址':'添加地址'}}
        </van-col>
      </van-row>
      <van-cell-group style="background-color:transparent; width: 92%; border: solid 1px transparent; overflow: hidden;margin:0 auto; border-radius:6px;">
        <van-field v-model="addressform.name"
                   placeholder="收货人" />
        <van-field v-model="addressform.tel"
                   placeholder="手机号码" />
        <van-field v-model="addressform.address"
                   placeholder="地址" />
      </van-cell-group>
      <van-row style="bottom: 20px;position:absolute; width: 100%;padding: 0 4%;">
        <van-button style="width: 100%; margin-bottom: 10px;"
                    @click="submit"
                    round
                    type="info">提交</van-button>
        <van-button v-show="edit=='edit'"
                    style="width: 100%;"
                    @click="onDelete"
                    round
                    type="danger">删除收货地址</van-button>
      </van-row>

    </van-row>

  </div>
</template>

<script>
import needLogin from "./logout"
import { mapState } from 'vuex'
export default {
  data () {
    return {
      edit: "",
      index: "",
      addressform: {
        id: '',
        name: '',
        tel: '',
        address: ''
      },

    }
  },
  components: {
    needLogin
  },
  methods: {
    onAdd () {
      //编辑表单状态（新建或编辑）
      this.edit = "new";
    },
    onEdit (item, index) {
      //编辑地址，将选中地址数据拷贝到编辑表单
      this.edit = "edit";
      this.index = index;
      for (let i in this.addressform) {
        this.addressform[i] = this.list[index][i]
      }
    },
    onDelete () {
      //删除地址
      this.$store.state.myalert.visible = true
      this.$store.state.myalert.msg = '地址已删除'
      this.$store.commit("address/onDelete", this.index)
      this.cancel();
    },
    submit () {
      //表单提交
      //新建
      if (this.edit == "new") {
        this.$store.commit("address/newAddress", Object.assign({}, this.addressform))
      } else {
        //修改
        this.list.splice(this.index, 1, Object.assign({}, this.addressform));
        this.$store.commit("address/updateAddress", {
          index: this.index,
          msg: Object.assign({}, this.addressform)
        })
      }
      this.edit = "";
      this.index = "";
      for (let i in this.addressform) {
        this.addressform[i] = "";
      }
    },
    cancel () {
      //关闭编辑表单
      this.edit = "";
      this.index = "";
      for (let i in this.addressform) {
        this.addressform[i] = "";
      }
    }
  },
  computed: {
    ...mapState({
      list: state => state.address.list,
    })
  }
};
</script>

<style lang="scss" scoped>
.newaddress {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba($color: #e8e8e8, $alpha: 1);
  z-index: 1000;
}
.transparent {
  background-color: transparent;
  border: none;
  color: rgb(30, 117, 218);
  font-weight: bold;
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
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: scroll;
  background-color: rgba($color: #d3d3d3, $alpha: 0.4);
}
</style>
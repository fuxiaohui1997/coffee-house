import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant组件
import 'vant/lib/index.css'

//基础样式和字体文件
import './assets/css/base.css'
import './assets/font/iconfont.css'

import * as filters from './filters'
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$axios = axios

import Vant from 'vant'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

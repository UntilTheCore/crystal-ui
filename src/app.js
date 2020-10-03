import Button from './Button'
import Vue from 'vue'
import Icon from "./Icon";
// 注册到全局组件
Vue.component('c-button',Button)
Vue.component('c-icon',Icon)
new Vue({
  el: '#app',
  data: {
    message: 'Crystal UI',
    loading1: true,
    loading2: true,
    loading3: true,
    loading4: true,
  }
})

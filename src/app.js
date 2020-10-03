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
  }
})

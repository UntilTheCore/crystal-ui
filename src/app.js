import Button from './Button'
import Vue from 'vue'
// 注册到全局组件
Vue.component('c-button',Button)
new Vue({
  el: '#app',
  data: {
    message: 'Crystal UI',
  }
})

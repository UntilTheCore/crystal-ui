import Vue from 'vue'
import Button from './Button'
import Icon from "./Icon"
import ButtonGroup from './buttonGroup'

// 注册到全局组件
Vue.component('c-button',Button)
Vue.component('c-icon',Icon)
Vue.component('c-button-group',ButtonGroup)
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

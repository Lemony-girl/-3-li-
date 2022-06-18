// 引入Vue
import Vue from "vue"
// 引入App.vue
import App from "@/App"
// 关闭开发环境提示
Vue.config.productionTip = false

// render 渲染的内容
const vm = new Vue({
  render: (h) => h(App)
})
// 挂载
//底层通过document.querySelector('#app')来获取
vm.$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/index'
import keyboardPlugin from './plugins/keyboardPlugin'

Vue.config.productionTip = false
Vue.use(keyboardPlugin)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Unicon from 'vue-unicons'
// @ts-ignore
import { uniListUl } from 'vue-unicons/src/icons'


Unicon.add([uniListUl])

Vue.use(Unicon)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import '@/assets/scss/main.scss'
import '@/plugins/carousel.js'
import '@/plugins/lottie'
import 'hooper/dist/hooper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

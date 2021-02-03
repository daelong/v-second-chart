import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(VueChartkick, { Chartkick })
// import 'chart.js';
// import 'hchs-vue-charts';

// Vue.use(window.VueCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

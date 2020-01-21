import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/routes';
import VueApexCharts from "vue-apexcharts/src";
import apolloProvider from './plugins/apolloClient';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  VueApexCharts,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/routes';
import VueApexCharts from "vue-apexcharts/src";
import { createProvider } from './vue-apollo'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

Vue.use(Loading, {
  color: '#f2ab3b',
  loader: 'spinner',
  width: 80,
  height: 80,
  title: "Cargando..."
});

new Vue({
  vuetify,
  router,
  VueApexCharts,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');

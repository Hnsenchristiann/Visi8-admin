import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueApexCharts from 'vue-apexcharts'
import {ClientTable} from 'vue-tables-2';
import daterangepicker from 'daterangepicker';
import * as VueGoogleMaps from "vue2-google-maps"

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);


Vue.component('apexchart', VueApexCharts)
window.moment = require('moment');
Vue.use(VueSidebarMenu, VueApexCharts, daterangepicker)
Vue.use(ClientTable)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDMFkE-OKmLcfVyO04cFjtLGgZHL86oXsQ",
    libraries: "places"
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

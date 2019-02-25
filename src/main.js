import Vue from 'vue';

import App from './App.vue';

import store from './store';
import router from './router';

import A11yDialog from 'vue-a11y-dialog';
import PortalVue from 'portal-vue';
import VueAnnouncer from 'vue-announcer'

Vue.use(VueAnnouncer);
Vue.use(PortalVue);
Vue.use(A11yDialog);

Vue.config.productionTip = false;

Vue.filter('toEUR', function (value) {
  return "€ " + (value / 100).toLocaleString("de-DE", {minimumFractionDigits: 2});
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
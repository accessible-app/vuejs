import Vue from 'vue';

import App from './App.vue';

import store from './store';
import router from './router';

import A11yDialog from 'vue-a11y-dialog';
import PortalVue from 'portal-vue';

Vue.use(PortalVue);
Vue.use(A11yDialog);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

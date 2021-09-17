import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

//import templates
import LoginLayout from './layout/LoginLayout.vue'
import DasboardLayout from './layout/DasboardLayout.vue'

Vue.component('login-layout', LoginLayout);
Vue.component('dasboard-layout', DasboardLayout); 


Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')

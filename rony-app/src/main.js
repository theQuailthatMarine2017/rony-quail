import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)

AOS.init();

Vue.use(VueTypedJs)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('footer-view', require('./components/FooterComponent.vue').default);

Vue.use(VueMaterial)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')

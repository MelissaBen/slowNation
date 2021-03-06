// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/assets/styles/main.scss'
//import VueCarousel from 'vue-carousel';


export default function (Vue, { router, head, isClient }) {
/*if (isClient) {
    Vue.use(VueCarousel)
   }*/
  Vue.use(BootstrapVue)
  //Vue.use(VueCarousel)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

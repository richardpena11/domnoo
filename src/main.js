import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueScrollReveal from 'vue-scroll-reveal'
import Velocity from 'velocity-animate'

import { MdButton, MdDrawer, MdCard, MdList, MdToolbar, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueResource);

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdToolbar);
Vue.use(MdIcon);
Vue.use(Velocity);

Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: "50px"
});

Vue.http.options.root = "https://domnoo-29eb3.firebaseio.com/"

new Vue({
  el:'#app',
  render: h => h(App),
})

import Vue from 'vue';
import 'normalize.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLinkedin, faGithub, faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';

library.add(faLinkedin, faGithub, faDribbble);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

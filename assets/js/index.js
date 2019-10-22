/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../sass/app.scss');
require('./bootstrap');
require('date-input-polyfill');
import Vue from 'vue';
 import {i18n} from './i18n.js'
import App from './App';
import router from './router';

import store from './store';
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAnalytics from 'vue-analytics'

window.Vue = require('vue');

Vue.use(BootstrapVue);

Vue.use(VueAxios, axios);

Vue.config.devtools = true;
Vue.config.performance = true;

if (process.env.NODE_ENV !== 'development') {
    Vue.use(VueAnalytics, {
        id: 'UA-133946215-1'
    });
}

new Vue({
    template: '<App/>',
    components: { App },
    router,
    store,
    i18n
}).$mount('#customer-tax-info-collector-app');


import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Login from '../views/Login';
import TaxIdFormGateway from "../views/TaxIdFormGateway";
import FinalPage from "../views/FinalPage";
import PageNotFound from '../views/PageNotFound';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/tax_data', component: TaxIdFormGateway, meta: { requiresAuth: true },name: 'collect_tax_data' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/', redirect: { name: 'collect_tax_data' } }, 
        { path: '/thanks ', component: FinalPage,  meta: { requiresAuth: true }, name: 'FinalPage'},
        { path: '*', component: PageNotFound }
    ],
});

router.beforeEach((to, from, next) => {
        
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        
        if (store.getters['security/isAuthenticated']) {
            next();
        } else {

            let queryRedirect = { redirect: to.fullPath };

            if (to.matched.some(record => record.name === 'FinalPage')) {
                queryRedirect = {};
            }

            next({
                path: '/login',
                query: queryRedirect
            });
        }
    } else {
        next();
    }
  
});



export default router;
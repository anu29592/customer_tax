<template>

        <div id="tax-id-collector-app" class="navbar-page">
                <div class="center">

                        <HeaderComponent></HeaderComponent>
                        
                                <router-view></router-view>
                        <FooterComponent></FooterComponent>
                </div>
        </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent';

export default {
    name: 'customer-tax-info-collector-app',
 
        components: {
                HeaderComponent,
                FooterComponent,
                

        },
    created () {

        if (localStorage.getItem('t')) {

                let roles = JSON.parse(this.$parent.$el.attributes['data-roles'].value);

                let payload = {roles: roles};
                this.$store.dispatch('security/onRefresh', payload);
                this.$store.dispatch('user/getUser');
        }
        axios.interceptors.response.use(undefined, (err) => {
            return new Promise(() => {

                if (403 === err.response.status) {
                    this.$router.push({path: '/login'})
                } else if (500 === err.response.status) {
                    document.open();
                    document.write(err.response.data);
                    document.close();
                }
                throw err;
            });
        });
    },
    computed: {
        isAuthenticated () {
                return this.$store.getters['security/isAuthenticated'];
        },
    },
}
</script>
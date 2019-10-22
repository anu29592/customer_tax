<template>
    <div id="header">

        <div class="logo_part">
            <div class="logo">
                <a href="https://www.akf.de/" target="_blank">
                    <div class="inner_logos">
                        <img alt="akf factoring logo" src="build/images/akf_bank_finanzpartner_logo.svg" width="284"
                            height="55">
                    </div>
                </a>
            </div>

         <!--    <div class="logout_button">
            <img alt="logout without saving" src="build/images/logout.png" 
                       width="35"
                            height="35" v-show="isAuthenticated" @click.self.prevent="logout($event)"    >
            </div> -->

         <!--    <button id="btnUpdate" type="submit" class="btn btn success add_btn btn-secondary logout_button" v-if="isAuthenticated" @click.self.prevent="LoginPage($event)">
                logout

            </button> -->
        </div>

    </div>
</template>

<script>
    import {
        mapGetters,
        mapState
    } from 'vuex'

    import router from '../router/index';

    export default {


        mounted() {

        },

        computed: {

            ...mapGetters('security', {

                isAuthenticated: 'isAuthenticated'


            })


        },

        methods:{
             logout: function (event) {
                this.$store.dispatch('security/logout').then(res => {
                    router.push({'name': 'login'});
                });
             }
        }
    }
</script>
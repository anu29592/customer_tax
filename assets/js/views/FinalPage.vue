<template>

            <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
            <div class="main" id="login-box">



                <form id="login-form" class="form content" method="POST" @submit.prevent="performLogin">


                    <h4 class="text-center text-info"> {{ $t ('thanksPage.label')}}
</h4>

                </form>
            
    </div>
    
</template>

<script>
    import ErrorMessage from '../components/ErrorMessage';

    export default {
        name: 'FinalPage',
        components: {
          
            ErrorMessage,
        
        },
        data() {
            return {

            };
        },
        created() {
            this.$store.dispatch('security/logout');
        },
        computed: {

        },
        methods: {

        },
    }
</script>
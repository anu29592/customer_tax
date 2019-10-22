<template>

            <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
            <div class="main" id="login-box">

                <form id="login-form" class="form content" method="POST">

                    <h4 class="text-center text-info">    {{ $t ('pageNotFound.label')}}</h4>


                </form>
            </div>





</template>

<script>
    import ErrorMessage from '../components/ErrorMessage';
    import FooterComponent from '../components/FooterComponent';
    import HeaderComponent from '../components/HeaderComponent';
    export default {
        name: 'FinalPage',
        components: {
            HeaderComponent,
            ErrorMessage,
            FooterComponent,

        },
        data() {
            return {

            };
        },
        created() {

        },
        computed: {

        },
        methods: {

        },
    }
</script>
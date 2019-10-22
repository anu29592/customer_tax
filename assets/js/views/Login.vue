<template>

        <!-- <h3 class="text-center text-white pt-5">Login form</h3> -->
      
            <div class="main" id="login-box" >

                <form id="login-form" class="form-content login-background" method="POST" @submit.prevent="performLogin">
                  <!--   <span id="logoutMsg" style="color:#00173c ; font-size: 25px;"></span>
                                        <a class="navbar-brand" href="#"> -->

            <!--     <img src="build/images/Akf_bank_Logo.png" class="img-thumbnail" alt=""> -->

    	      <!--       </a> -->

         <h4 class="text-center text-info">{{ $t('login.header')}}</h4>

                    <div class="form-group">
                        <label for="login" class="text-info">{{ $t('login.customerNumber.label')}}</label>
                            <div class="hint"><i class="hint-icon">i</i>
                              <p class="hint-description">   <span>{{ $t('login.customerNumber.hint')}}</span>   &nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </div>
                        <input type="text" name="login" id="login" class="form-control"  v-model="login" required />

                    </div>
                     <div class="form-group">
                        <label for="contractId" class="text-info">{{ $t('login.contractNumber.label')}}</label>
                       <div class="hint"><i class="hint-icon">i</i>
                               <p class="hint-description">{{ $t('login.contractNumber.hint')}} </p>
                        </div>
                        <input type="text" name="contractId" id="contractId" class="form-control" v-model="contractId" required />
                    </div>
                     <div class="form-group">
                        <label for="password" class="text-info">{{ $t('login.pinNumber.label')}}</label>
                       <div class="hint"><i class="hint-icon">i</i>
                               <p class="hint-description">{{ $t('login.pinNumber.hint')}} </p>
                        </div>
                        <input type="password" name="password" id="password" class="form-control" v-model="password" required />
                    </div>
           
                    <!-- placeholder -->
                    <span id="errorMsg" style="color:red"></span>

                    <div class="form-group">
                          <div class="button-container">
                        <button type="submit" class="btn success add_btn login_btn  btn-secondary">{{ $t('login.buttonLabel')}} <span class="glyphicon glyphicon-chevron-right"></span></button>
                          </div>
                    </div>
                </form>
            </div>



</template>

<script>
import ErrorMessage from '../components/ErrorMessage';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
export default {
    name: 'login',
    components: {
        HeaderComponent,
        ErrorMessage,
        FooterComponent,
    },
    data () {
        return {
            login: '',
            contractId: '',
            password: '',
        };
    },
    created () {

        let redirect = this.$route.query.redirect;
        if (this.$store.getters['security/isAuthenticated']) {
            if (typeof redirect !== 'undefined') {
                this.$router.push({path: redirect});
            } else {
                this.$router.push({name: 'collect_tax_data'});
            }
        }
    },
    computed: {
        isLoading () {
            return this.$store.getters['security/isLoading'];
        },
        hasError () {
            return this.$store.getters['security/hasError'];
        },
        error () {
            return this.$store.getters['security/error'];
        },
    },
    methods: {
        performLogin () {
            let payload = {
                    login: this.$data.login,
                    contractId: this.$data.contractId,
                    password: this.$data.password
                },
                redirect = this.$route.query.redirect;

            this.$store.dispatch('security/login', payload)
                .then(() => {
                    this.$store.dispatch('user/getUser');
                    if (typeof redirect !== 'undefined') {
                        this.$router.push({path: redirect});
                    } else {
                        this.$router.push({name: 'collect_tax_data'});
                    }
                });
        },
    },
}
</script>
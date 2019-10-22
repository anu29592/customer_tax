<template>

    <div class="main">


        <div role="tablist">

            <div class="accordion-background" id="forms-container">
                <div>
                    <b-alert variant="info" show dismissible>
                        {{ $t('user_info.label',  { days: customerData.remainingLoginDays }) }}
                    </b-alert>
                </div>
                <dl>


                    <b-card no-body class="mb-1">
                        <dt class="form-header-section contractualCompany">
                            <b-card-header header-tag="header" class="p-1 header-1" role="tab">
                                <b-btn block href="#" variant="info" class="accordion-title accordionTitle js-accordionTrigger btn_header ">{{
                                    $t ('contractual_Company.header')}}  
                                    <div class="hint">
                                        <i class="hint-icon">i</i>
                                        <p class="hint-description">
                                            <span>{{ $t ('contractual_Company.hint')}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>

                                </b-btn>
                            </b-card-header>
                        </dt>
                        <dd>
                            <div class="container-fluid">


                                <b-card-body>
                                    <ContractualCompany :formDataIdName="'contractualCompany'"
                                        v-bind:contractualCompany.sync="customerData.contractualCompany">
                                    </ContractualCompany>
                                </b-card-body>

                            </div>
                        </dd>
                    </b-card>
                    <b-card no-body class="mb-1">
                        <dt class="form-header-section beneficialOwnerType">
                            <b-card-header header-tag="header" class="p-1 header-2" role="tab">
                                <b-btn block href="#" variant="info" class="accordion-title accordionTitle js-accordionTrigger btn_header ">


                                    <div class="header-word">
                                        <span class="span-device">
                                            {{ $t ('beneficial_owners.header')}}

                                        </span>
                                        <span class="span-mobile">
                                            Wirtschaftlich Berechtigte

                                        </span>

                                        <div class="hint">
                                            <i class="hint-icon">i</i>
                                            <p class="hint-description">
                                                <span> {{ $t ('beneficial_owners.hint')}}</span>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                            </p>
                                        </div>

                                    </div>


                                </b-btn>
                            </b-card-header>
                        </dt>
                        <dd>
                            <div class="container-fluid">

                                <b-card-body>
                                    <div class="main-container" :data-input-field-path="buildInputFieldPath('beneficialOwnerType')"
                                        id="beneficialOwnerType" @change="statuserrorchange()">



                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" id="beneficialOwnerTypeStandard"
                                                value="standard" v-model="beneficialOwnerType">
                                            <label class="form-check-label" for="beneficialOwnerTypeStandard">
                                                {{ $t ('beneficial_owners.beneficialOwnerTypeStandard.label')}}
                                            </label>  &nbsp;
                                            <div class="hint">
                                                <i class="hint-icon">i</i>
                                                <p class="hint-description">
                                                    <span>{{ $t
                                                        ('beneficial_owners.beneficialOwnerTypeStandard.hint')}}</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                </p>
                                            </div>
                                        </div>

                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" id="beneficialOwnerTypeFictive"
                                                value="fictive" v-model="beneficialOwnerType">
                                            <label class="form-check-label" for="beneficialOwnerTypeFictive">
                                                {{ $t ('beneficial_owners.beneficialOwnerTypeFictive.label')}}
                                            </label>  &nbsp;
                                            <div class="hint">
                                                <i class="hint-icon">i</i>
                                                <p class="hint-description">
                                                    <span> {{ $t
                                                        ('beneficial_owners.beneficialOwnerTypeFictive.hint')}}</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--   <h6>Wirtschaftlich Brechtigte</h6> -->
                                    <BeneficialOwner :formDataIdName="'beneficialOwners'" v-bind:beneficialOwners.sync="customerData.beneficialOwners"
                                        v-if="formStatus()"></BeneficialOwner>
                                </b-card-body>

                            </div>
                        </dd>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <dt class="form-header-section">
                            <b-card-header header-tag="header" class="p-1 header-1" role="tab">
                                <div class="data-title">

                                    <label class="termConditionsHeader">{{ $t ('termConditions.header')}}</label>

                                </div>
                            </b-card-header>
                        </dt>
                        <dd>
                            <div class="container-fluid">
                                <div class="form-check  main-container" :data-input-field-path="buildInputFieldPath('acceptTermConditions')">
                                    <input type="checkbox" class="form-check-input" v-model="acceptTermConditions"
                                        @change="statuserrorchange()" id="acceptTermConditions">
                                    <label for="acceptTermConditions"> {{ $t ('termConditions.label[0]')}}
                                        <a href="https://www.akf.de/fileadmin/akf_de/startseite/datenschutz/V_DS_VH_18_12_20.pdf"
                                            target="_blank">{{ $t ('termConditions.label[1]')}}</a>
                                        {{ $t ('termConditions.label[2]')}}</label>
                                </div>




                            </div>
                        </dd>
                    </b-card>

                </dl>


            <div class="button-container">
                <b-btn class="btn success add_btn" id="logout_button" type="submit" @click.self.prevent="confirmLogout()" >
                    {{ $t ('logoutButton.label')}}
                </b-btn>

                <b-btn class="btn success add_btn" id="btnUpdate" type="submit" @click.self.prevent="submitAll($event)">
                    {{ $t ('saveandLogButton.label')}}

                </b-btn>
            </div>

            </div>

            <div class="modal" v-if='nosendModal'>
                <div class="modal-window">
                    <p>
                       {{ $t ('modalPopup.labelLogout[0]')}}
                    <span>  {{ $t ('modalPopup.labelLogout[1]')}}   </span> <strong></strong> {{ $t ('modalPopup.labelLogout[2]')}} </p>
                    <div class="actions">
                        <button class="btn success btn-secondary"  @click="logout($event)" >Yes</button>
                        <button class="btn success btn-secondary" @click="cancelDelete()">No</button>
                    </div>
                </div>
            </div>


               <div class="modal" v-if='sendModal'>
                <div class="modal-window">
                    <p>
                       {{ $t ('modalPopup.labelsendLogout[0]')}}
                    <span>  {{ $t ('modalPopup.labelsendLogout[1]')}}   </span> <strong></strong> {{ $t ('modalPopup.labelLogout[2]')}} </p>
                    <div class="actions">
                        <button class="btn success btn-secondary"  @click="sendAndLogout($event)" > {{ $t ('modalPopup.yesButton')}}</button>
                        <button class="btn success btn-secondary" @click="cancelDelete()">{{ $t ('modalPopup.noButton')}}</button>
                    </div>
                </div>
            </div>

        </div> <!-- tablist -->
    </div> <!-- container -->

</template>

<script>
    import ContractualPartner from '../components/ContractualPartner.vue';
    import BeneficialOwner from '../components/BeneficialOwner.vue';
    /* 
        import FictiveBeneficialOwner from '../components/FictiveBeneficialOwner.vue'; */
    import bus from '../event-bus.js';

    import ContractualCompany from "../components/ContractualCompany";


    export default {
        props: {
            customerData: {
                type: Object,
                required: false
            },
            remainingLoginDays:{
                  type: Number,
            }
            
        },
        data() {
            return {
                showEnterEmailModal: false,
                name: null,

             
                beneficialOwnerType: null,
                acceptTermConditions: null,
                nosendModal: false,
                sendModal:false

            }
        },

        components: {
            ContractualCompany,
            ContractualPartner,
            BeneficialOwner,
        },

        created() {
            console.log(this.$router);
        },
        computed: {

            // customer () {
            //     this.customer_data = this.$store.getters['user/getCurrentUser'];
            //
            //     return this.customer_data;
            // },
        },

        methods: {

            statuserrorchange: function () {

                this.$emit("change", event.target.id)
                var fieldset_id = event.target.id;
                $("#" + fieldset_id).removeClass('error');
                var el = document.getElementById(fieldset_id);
                var nodeChild = el.parentElement.parentNode
                $(nodeChild).find('.error').removeClass();
                $(nodeChild).find('.error-message').remove();

            },


            buildInputFieldPath(field) {
                return field;
                            },

            formStatus: function () {

                if (this.beneficialOwnerType == 'standard' || this.beneficialOwnerType == 'fictive') {

                    return true;
                } else {
                    return false;
                }

            },

            submitAll: function (event) {
                let user_data = {
                    contractualCompany: this.customerData.contractualCompany,
                    beneficialOwnerType: this.beneficialOwnerType, // choices: "standard", "ficitve", "none"
                    beneficialOwners: this.customerData.beneficialOwners,
                    acceptTermConditions: this.acceptTermConditions
                };

                $('#forms-container [data-input-field-path] input').removeClass('error');
                $('#forms-container').removeClass('error');
                $('.form-header-section').removeClass('error');

                $('#forms-container .error-message').remove();

                let companyTaxFormComponent = this;

                axios
                    .post('/api/user/tax_data', user_data)

                    .then(function (response, sendModal) {
                        
                        if (200 === response.status) {
                            companyTaxFormComponent.sendModal=true;
    
                           
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        error.response.data.violations.forEach((violation, index) => {
                            let $errorElement = $('#forms-container [data-input-field-path="' +
                                violation.propertyPath + '"]');
                            $errorElement.find('input').addClass('error')
                            let relatedLabelForAttr = $errorElement.attr('data-input-field-path');
                            $('#forms-container div[data-input-field-path="' + relatedLabelForAttr +
                                '"]').append(
                                '<div class="error-message">' + violation.message + '</div>')


                            var headerString = violation.propertyPath;
                            var myRegexp = /([a-zA-Z0-9_]*)(\[[0-9]*\])?\./g;
                            var match = myRegexp.exec(headerString);

                            if (null !== match) {
                                var className = match[1];
                                var $header = $(document.getElementsByClassName(className));
                                if (!$header.hasClass('error')) {
                                    $header.addClass('error');
                                }
                            }


                        });
                    });
            },
            confirmLogout() {
               
                this.nosendModal=true;
            },

            cancelDelete() {
            this.nosendModal = false;
            this.sendModal = false;
			
        },
        
        sendAndLogout:function($event){
              this.$router.push({
                                name: 'FinalPage'
                            });
        },
               logout: function (event) {
                   this.$store.dispatch('security/logout').then(res => {
                       router.push({
                           'name': 'login'
                       });
                   });
               } 

        }
    }
</script>
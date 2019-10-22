<template>
    <form class="main-container form_1 " id="frmToSubmit" method="post">

        <p class="errorMessage" v-if="errors.length">
            <strong>Please correct the following error(s):</strong>
            <ul>
                <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <!-- v-on:submit.self.prevent="submitForm()" -->
        <div class="form-group">

            <label class="label-style" for="Name"> <label class="label-style" for="Name">{{ $t ('contractual_Company.companyName.label')}}</label>
            </label>



            <div class="form-control fake-field">{{contractualCompany.companyName}} </div>



        </div>


        <div class="form-group" data-input-field-path="contractualCompany.taxBusinessId">

            <label class="label-style" for="WId_Nr">{{ $t ('contractual_Company.taxBusinessId.label')}}


                  <div class="hint">
                <i class="hint-icon">i</i>
                <p class="hint-description">
                    <span>{{ $t ('contractual_Company.taxBusinessId.hint')}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </div>
            </label>
          




            <input class="form-control" id="WId_Nr" v-bind:placeholder="$t('contractual_Company.taxBusinessId.placeholder')"
                type="text" v-model="contractualCompany.taxBusinessId" />

        </div>



        <div class="form-group" data-input-field-path="contractualCompany.taxNumber">


            <label class="label-style" for="tax_number">{{ $t ('contractual_Company.taxNumber.label')}}

   <div class="hint">
                <i class="hint-icon">i</i>
                <p class="hint-description">
                    <span>{{ $t ('contractual_Company.taxNumber.hint')}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </div>

            </label>
         





            <input class="form-control contractual-partner--tax_id" id="tax_number" v-bind:placeholder="$t('contractual_Company.taxNumber.placeholder')"
                type="text" v-model="contractualCompany.taxNumber" />


        </div>
    </form>
</template>

<script>
    import bus from '../event-bus.js';

    export default {

  
        props: {
            contractualCompany: {
                type: Object,
                required: false
            },
          
        },
        data() {
            return {
                dataEndpointUri: '/api/customer/contractual_partner',

                errors: [],
                newErrorMessage: [],
                checked: true,
                disabled: true,
                items: []
            }
        },
        created() {
            bus.$on('contractual-partner-form-submit', () => {
                $('.header-1').removeClass('error');
                $('.form-control').removeClass('error');

                axios.put('/api/customer/contractual_partner', this.contractualCompany).then(response => {
                    if (200 === response.status) {
                        let value = this.contractualCompany;
                        $('p:first-child').hide();
                    }


                }).catch(e => {
                    let errors = e.response.data.errors;


                    for (const index in errors) {

                        let newErrorMessage = errors[index];

                        for (const index in newErrorMessage) {
                            let newMessage = newErrorMessage[index];

                            this.errors.push(newMessage)
                        }

                        /*    $('#accordion2').addclass('show'); */

                        $('.contractual-partner--' + index).addClass('error');


                    }


                });
            })
        },
        mounted() {

        },

        methods: {
            isDisable(isValue) {
                return true


            },
            selectedValue(isChecked) {
                return true


            },

        }
    }
</script>
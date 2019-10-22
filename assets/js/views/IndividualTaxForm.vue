<template>
    <div id="tax-id-collector-app" class="navbar-page">
        <div class="center">
            <HeaderComponent></HeaderComponent>
            <div class="container container-page">
                <div role="tablist">
                    <div class="accordion" id="forms-container">
                        <dl>


                            <b-card no-body class="mb-1">
                                <dt>
                                    <b-card-header header-tag="header" class="p-1 header-1" role="tab">
                                        <b-btn block href="#" v-b-toggle.accordion1 variant="info" class="accordion-title accordionTitle js-accordionTrigger btn_header ">Vertragspartner (A)
                                            <div class="hint" >
                                                <i class="hint-icon"  >i</i>
                                                <p class="hint-description">
                                                    <span>Add the Steuernummer ID</span>   &nbsp;&nbsp;&nbsp;&nbsp;
                                                </p>
                                            </div>


                                        </b-btn>
                                    </b-card-header>
                                </dt>
                                <dd>
                                    <div class="container-fluid">
                                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">

                                            <b-card-body>
                                                <ContractualPartner :formDataIdName="'contractualPartner'" v-bind:contractualPartner.sync="customerData.contractualPartner"> </ContractualPartner>
                                            </b-card-body>
                                        </b-collapse>
                                    </div>
                                </dd>
                            </b-card>

                        </dl>
                    </div>
                    <!--   <p v-if="errors.length">
                          <b>Please correct the following error(s):</b>
                          <ul>
                              <li v-for="error in errors" :key="error">{{ error }}</li>
                          </ul>
                      </p> -->
                    <div class="button-container">
                        <b-btn class="btn success add_btn " id="btnUpdate" type="submit" @click.self.prevent="submitAll($event)">Speichern und ausloggen</b-btn>

                    </div>

                    <!-- Modal Component -->

                    <!--  <b-modal id="modal-center" centered hide-footer
                                ref="modal"
                                title="BEFORE YOU LOGOUT"
                           >
                         <form @submit.stop.prevent="handleSubmit">
                           <b-form-input type="text"
                                         placeholder="Enter your E-mail address"
                                         v-model="name"></b-form-input>
                                         <br>
                     <b-btn @click="hideModal">Back</b-btn>
                                         <b-btn @click="hideModal">Send</b-btn>
                         </form>
                       </b-modal> -->
                </div> <!-- tablist -->
            </div> <!-- container -->
        </div>
    </div>
</template>

<script>
    import ContractualPartner from '../components/ContractualPartner.vue';
    import HeaderComponent from '../components/HeaderComponent.vue';


    export default {

        props: {
            customerData: { type: Object, required: false },
        },
        components: {
            HeaderComponent,
            ContractualPartner
        },

        methods: {

            submitAll(event) {
                let user_data = {
                    contractualPartner: this.customerData.contractualPartner,
                };

                let thisComponent = this;

                $('#forms-container [data-input-field-path]').removeClass('error');
                $('#forms-container').removeClass('error');
                $('#forms-container .error-message').remove();

                axios
                    .post('/api/user/tax_data', user_data)
                    .then(response => {

                        if (200 === response.status) {

                            thisComponent.$router.push({
                                name: 'FinalPage'
                            });
                        }
                    })
                    .catch(error => {
                        error.response.data.violations.forEach(violation => {
                            let $errorElement = $('#forms-container [data-input-field-path="' + violation.propertyPath + '"]');

                            $errorElement.addClass('error');
                            $('#forms-container').addClass('error');
                            let relatedLabelForAttr = $errorElement.attr('id');

                            $('#forms-container label[for="' + relatedLabelForAttr + '"]').append('<span class="error-message">' + violation.message + '</span>')
                        });
                    });
            },

            hideModal () {
                // Prevent modal from closing
                /*     evt.preventDefault() */
                if (1>0) {
                    alert('Please enter your name')
                } else {
                    this.handleSubmit()
                }
            },
            handleSubmit () {

                this.$refs.modal.hide()
            },

        }
    }

</script>

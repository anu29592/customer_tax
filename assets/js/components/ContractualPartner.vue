<template>
    <form class="main-container form_1 " id="frmToSubmit" method="post">

        <p v-if="errors.length" class="errorMessage">
            <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        </p>
        <!-- v-on:submit.self.prevent="submitForm()" -->
        <div class="row">
            <div class="col-xs-4">
                <label for="Name" class="label-style">Vorname</label>
            </div>
            <div class="form-group col-xs-4 input_field">

                <div class="form-control fake-field">{{contractualPartner.firstName}}</div>
            </div>


        </div>
        <div class="row">
            <div class="col-xs-4">
                <label for="Name" class="label-style">Nachname</label>
            </div>
            <div class="form-group col-xs-4 input_field">

                <div class="form-control fake-field">{{contractualPartner.lastName}}</div>
            </div>


        </div>

        <div class="row">
            <div class="col-xs-4">
                <label class="label-style" for="taxId">Steuer-ID</label>
                <div class="hint">
                    <i class="hint-icon">i</i>
                    <p class="hint-description">
                        <span>Add the Steuer-ID</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </div>

            </div>
            <div class="form-group col-xs-4 input_field">
                <input class="form-control" data-input-field-path="contractualPartner.taxId"
                       id="taxId" placeholder="Steuer-ID hinzufügen" type="text"
                       v-model="contractualPartner.taxId"/>

            </div>

        </div>

        <!--  <div class="row">
             <div class="col-xs-4 input_field">
                 <label for="straße" class="label-style">Straße,</label>

                 <label for="nummer" class="label-style">Nummer</label>
             </div>

             <div class="form-group col-xs-2 input_field">

                 <div class="form-control fake-field">{{contractualPartner.streetName}}</div>
                 <div class="form-control fake-field">{{contractualPartner.streetNumber}}</div>

             </div>


         </div> -->
        <!-- <div class="row">
            <div class="col-xs-4 input_field">
                <label for="zipcode" class="label-style">Postleitzahl,</label>
                <label for="ort" class="label-style">Ort</label>
            </div>

            <div class="form-group col-xs-2 input_field">
                <div class="form-control fake-field">{{contractualPartner.postcode}}</div>
                <div class="form-control fake-field">{{contractualPartner.city}}</div>
            </div>


        </div> -->

        <!--   <div class="button-container">
                                                                   
                                                                        <a href="#" ><span class="btn btn-success" type="submit">Save</span></a>    
                                                            
                                                          </div> -->
    </form>
</template>

<script>
    import bus from '../event-bus.js';

    export default {
        props: {
            contractualPartner: { type: Object, required: false },
        },
        data() {
            return {
                dataEndpointUri: '/api/customer/contractual_partner',

                errors: [],
                newErrorMessage: [],
                /*   checked: true, */
                disabled: true,
                items: []
            }
        },
        created() {


        },

        methods: {
            isDisable(isValue) {
                return true


            },
            /*    selectedValue(isChecked) {
                   return true


               }, */
        }
    }

</script>

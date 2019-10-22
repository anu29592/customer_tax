<template>

    <div class="wrapper_form_3">
        <p v-if="errors.length" class="errorMessage">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <div class="element_form_3" v-bind:id="'element_form_3_' + index" v-for="(item,index) in fictiveBeneficialOwners"
            :key="index">

            <form class="main-container form_3" v-bind:id="'fictive_owner_' + index">
           <!--   <hr> -->
            
       <div class="row">
                    <div class="col-xs-4 ">

<!-- 
                        <label><input type="radio" :data-input-field-path="buildInputFieldPath('berechtigtType', index)"
                                v-bind:id="'berechtigt_type_3_' + index" v-model="item.berechtigtType" value="business"
                                name="indoor-outdoor" /> Fiktive
                                wirtschaftlich Berechtigte </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type="radio" :data-input-field-path="buildInputFieldPath('berechtigtType', index)"
                                v-bind:id="'berechtigt_type_3_' + index" v-model="item.berechtigtType" value="default"
                                name="indoor-outdoor" :checked="selectedValue(checked)" /> Wirtschaftlich
                                Brechtigte</label>
                        &nbsp;
                        <div class="hint">
                            <i class="hint-icon">i</i>
                            <p class="hint-description">
                                <span>Select any one</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div> -->

                    

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'first_name_3_' + index" class="label-style">Vorname</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('firstName', index)" v-bind:id="'first_name_3_' + index"
                            class="form-control fictive_owner first_name_3" placeholder="Enter your full name" v-model="item.firstName"
                            :disabled="isDisable(disabled,index)">

                    </div>


                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'last_name_3_' + index" class="label-style">Nachname</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('lastName', index)" v-bind:id="'last_name_3_' + index"
                            class="form-control" placeholder="Enter your full name" v-model="item.lastName" :disabled="isDisable(disabled,index)">
                    </div>

                </div>

         
            
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'tax_id_3_' + index" class="label-style">Steuer ID</label>
                          <div class="hint">
                            <i class="hint-icon">i</i>
                            <p class="hint-description">
                                <span>Add Steuer ID </span> &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('taxId', index)" v-bind:id="'tax_id_3_' + index"
                            class="form-control" placeholder="Enter Steuer ID " v-model="item.taxId">
                    </div>

                </div>

                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'birth_date_3_' + index" class="label-style">Geburtstag</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="date" :data-input-field-path="buildInputFieldPath('birthdate', index)" v-bind:id="'birth_date_3_' + index"
                            class="form-control" placeholder="Enter Geburtstag" v-model="item.birthdate">
                    </div>

                </div>

                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'street_name_3_' + index" class="label-style">Straße,</label>
                        <label v-bind:for="'street_number_3_' + index" class="label-style">Nummer</label>
                    </div>

                    <div class="form-group col-xs-2 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('streetname', index)" v-bind:id="'street_name_3_' + index"
                            class="form-control width_long" placeholder="Enter Straße" v-model="item.streetName">
                        <input type="text" :data-input-field-path="buildInputFieldPath('streetNumber', index)"
                            v-bind:id="'street_number_3_' + index" class="form-control width_short" placeholder="Nr"
                            v-model="item.steetNumber">
                    </div>


                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'postcode_3_' + index" class="label-style">Postleitzahl,</label>
                        <label v-bind:for="'city_3_' + index" class="label-style">Ort</label>
                    </div>

                    <div class="form-group col-xs-2 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('postcode', index)" v-bind:id="'postcode_3_' + index"
                            class="form-control width_short" placeholder="Enter Zip Code" v-model="item.postcode">
                        <input type="text" :data-input-field-path="buildInputFieldPath('city', index)" v-bind:id="'city_3_' + index"
                            class="form-control width_long" placeholder="Enter Ort" v-model="item.city">
                    </div>


                </div>




            </form>
            <div class="results_form_2">

            </div>
        </div>


        <!--   <div class="buttons row">

            <button class="btn add_btn clone_form_3 btn-primary" id="clone_form_3" title="Einen neuen wirtschaftlich Berechtigten hinzufügen"
                v-on:click.self.prevent="AddForm()"><i class="fa fa-plus"></i> hinzufügen</button>

            <button class="btn minus_btn remove_form_3 btn-danger" id="remove_form_3" title="Wirtschaftlich Berechtigten löschen"
                v-show="index>initial_fictive_owner_length+1" v-on:click.self.prevent="DeleteForm()"><i class="fa fa-trash"></i>
                löschen</button>

        </div> -->
    </div>
</template>

<script>
    import bus from '../event-bus.js';
    export default {
        props: {
            fictiveBeneficialOwners: {
                type: Array,
                required: false
            },
        },

        data() {
            return {

                dataEndpointUri: '/api/customer/fictive_beneficial_owners',


                obj: [{
                        id: '',
                        first_name: '',
                        last_name: '',
                        tax_id: '',
                        birthdate: '',
                        berechtigt_type: '',
                        street_name: '',
                        street_number: '',
                        postcode: '',
                        city: '',
                        land: ''
                    }

                ],

                errors: {
                    beneficial_owners: [{
                            "fieldName1": "cannot be empty",
                            "fieldName2": "is not numeric",
                        },
                        {
                            "fieldName1": "invalid format",
                            "fieldName4": "is not a string",
                        }
                    ],
                },

                disabled: true,
                fictive_owner: [],
                checked: true,
                initial_fictive_owner_length: [],
                index: []
            }
        },

        /*     created() {
            this.initial_fictive_owner_length = this.fictiveBeneficialOwners.length

            this.disabled = true;

            this.index = this.initial_fictive_owner_length - 1;
             bus.$on('fictive-owner-form-submit', () => {
                $('.form-control').removeClass('error');

                axios.put('/api/customer/fictive_beneficial_owners', this.fictiveBeneficialOwners).then(response => {
                    if (response.status == 200) {
                        let value = this.fictiveBeneficialOwners[0];
                        $('p:first-child').hide();
              
                    }



                }).catch(e => {
                    let errors = e.response.data.errors
                    console.log(e.response)
  
                    for (const index in errors) {

                        let newErrorMessage = errors[index];
                        console.log(newErrorMessage)

                        for (const index in newErrorMessage) {
                            let newMessage = newErrorMessage[index];
                            console.log(newMessage)
                            this.errors.push(newMessage)
                        }

                     
            
                        $('.fictive_owner' + index).addClass('error');
                          $('.errorMessage' ).addClass('error');

                    }


                });
            })
        

        },
 */
        /*    mounted() {

           }, */

        methods: {
            buildInputFieldPath(field, index) {
                let pos = (null === index) ? '' : '[' + index + ']';
                return this.formDataIdName + pos + '.' + field;
            },
            AddForm() {

                this.fictiveBeneficialOwners.push(this.obj);
                this.index = this.fictiveBeneficialOwners.length;


            },
            DeleteForm() {

                this.fictiveBeneficialOwners.pop();
                this.index = this.fictiveBeneficialOwners.length;
                console.log(this.index)


            },

            isDisable(isValue, id_index) {

                if (id_index < this.initial_fictive_owner_length) {
                    return true
                }

            },

            selectedValue(isChecked) {
                return true


            },

            /*       submitForm(event) {
            $('.form-control').removeClass('error');

                axios.put('/api/customer/fictive_beneficial_owners', this.fictive_owner_data).then(response => {
                    console.log(response);
                    console.log(value);

                }).catch(e => {
                    let errors = e.response.data.errors
                    console.log(errors)

                    for (const key in errors) {
                      
                        $('.fictive_owner' + key).addClass('error');

                    }

                    this.errors.push(e.response.data.errors)
                });

            }
 */





        },



    }
</script>
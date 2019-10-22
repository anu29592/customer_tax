<template>
 
    <div class="wrapper_form_2">
        <p v-if="errorList.length" class="errorMessage">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in  errorList" :key="error">{{ error }}</li>
            </ul>
        </p>
        <div class="element_form_2" v-bind:id="'element_form_2_' + addIndex" v-for="(item,addIndex) in beneficialOwners"
            :key="addIndex">

            <form class="main-container form_2" v-bind:id="'beneficial_owner_' + addIndex">

                  
            <!--    <hr>  -->

             
  <!--        <div class="row">
                    <div class="col-xs-4 ">
                       <label>  <input type="radio" :data-input-field-path="buildInputFieldPath('fictive', addIndex)"
                                v-bind:id="'fictive_3_' + addIndex"  v-model="item.fictive" 
                                />Fiktive
                                wirtschaftlich Berechtigte</label>
                                 <div class="hint">
                            <i class="hint-icon">i</i>
                            <p class="hint-description">
                                <span>Die Wirtschafts-Identifikationsnummer (Abk.: W-IdNr., teilw. auch: WIN) ist in Deutschland ein eindeutiges und dauerhaftes Identifikationsmerkmal für Steuerzwecke bei wirtschaftlich Tätigen.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
        
                     <label>    <input type="radio" :data-input-field-path="buildInputFieldPath('berechtigtType', addIndex)"
                                v-bind:id="'berechtigt_type_3_' + addIndex"   v-model="item.berechtigtType"  
                                  />  Wirtschaftlich
                                Brechtigte </label>
                        <label for="WId_Nr" class="label-style">Berechtigten</label> -->
                 <!-- 
                        <div class="hint">
                            <i class="hint-icon">i</i>
                            <p class="hint-description">
                                <span>Die Wirtschafts-Identifikationsnummer (Abk.: W-IdNr., teilw. auch: WIN) ist in Deutschland ein eindeutiges und dauerhaftes Identifikationsmerkmal für Steuerzwecke bei wirtschaftlich Tätigen.</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
                    </div>

                </div> --> 
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'first_name_' + addIndex" class="label-style">Vorname</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('firstName', addIndex)" id="'first_name_' + addIndex"
                            class="form-control beneficial-partner--first_name" placeholder="Vorname hinzufügen"
                            v-model="item.firstName" :disabled="isDisable(disabled,addIndex)">

                    </div>


                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'beneficial_owners.last_name' + addIndex" class="label-style">Nachname</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('lastName', addIndex)" v-bind:id="'beneficial_owners.last_name' + addIndex"
                            class="form-control" placeholder="Nachname hinzufügen" v-model="item.lastName" :disabled="isDisable(disabled,addIndex)">
                    </div>

                </div>

            
           
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'tax_id_' + addIndex" class="label-style">Steuer-ID</label>
                          <div class="hint">
                            <i class="hint-icon">i</i>
                            <p class="hint-description">
                                <span>Add the Steuer ID</span> &nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>
                        
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('taxId', addIndex)" v-bind:id="'tax_id_' + addIndex"
                            class="form-control data--tax_id" placeholder="Steuer-ID hinzufügen" v-model="item.taxId">
                    </div>

                </div>

                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'birth_date_' + addIndex" class="label-style">Geburtstag</label>
                    </div>
                    <div class="form-group col-xs-4 input_field">
                        <input type="date" :data-input-field-path="buildInputFieldPath('birthdate', addIndex)"
                            v-bind:id="'birth_date_' + addIndex" class="form-control data--birthdate" placeholder=”TT.MM.JJJJ”
                            v-model="item.birthdate">
                    </div>

                </div>
           
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'street_name_' + addIndex" class="label-style">Straße,</label>
                        <label v-bind:for="'street_number_' + addIndex" class="label-style">Nummer</label>
                    </div>

                    <div class="form-group col-xs-2 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('streetName', addIndex)"
                            v-bind:id="'street_name_' + addIndex" class="form-control data--street_name width_long width_margin"
                            placeholder="Straße hinzufügen" v-model="item.streetName">
                        <input type="text" :data-input-field-path="buildInputFieldPath('streetNumber', addIndex)"
                            v-bind:id="'street_number_' + addIndex" class="form-control data--street_number width_short"
                            placeholder="Nummer hinzufügen" v-model="item.streetNumber">
                    </div>


                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <label v-bind:for="'postcode_' + addIndex" class="label-style">PLZ,</label>
                        <label v-bind:for="'city_' + addIndex" class="label-style">Ort</label>
                    </div>

                    <div class="form-group col-xs-2 input_field">
                        <input type="text" :data-input-field-path="buildInputFieldPath('postcode', addIndex)" v-bind:id="'postcode_' + addIndex"
                            class="form-control width_short width_margin" placeholder="PLZ hinzufügen" v-model="item.postcode">
                        <input type="text" :data-input-field-path="buildInputFieldPath('city', addIndex)" v-bind:id="'city_' + addIndex"
                            class="form-control width_long " placeholder="Ort hinzufügen" v-model="item.city">
                    </div>


                </div>


      


            </form>
        
        </div>
  <div class="buttons row">

            <button class="btn add_btn clone_form_2 btn-primary" id="clone_form_2" title="Einen neuen wirtschaftlich Berechtigten hinzufügen"
                v-on:click.self.prevent="AddForm()"><i class="fa fa-plus"></i> hinzufügen</button>


            <button class="btn minus_btn remove_form_2 btn-danger" id="remove_form_2" title="Wirtschaftlich Berechtigten löschen"
                v-on:click.self.prevent="DeleteForm()" v-show="this.addIndex>this.initial_owner_length.length+1"><i
                    class="fa fa-trash"></i>
                löschen</button>

                
                <label for="" class="add_button_label">Weiteren (fiktiv) wirtschaftlich Berechtigten hinzufügen
                </label>

        </div>

    </div>
</template>

<script>
    import bus from '../event-bus.js';
    export default {
        props: {
            beneficialOwners: {
                type: Array,
                required: false
            },
            formDataIdName: {
                type: String,
                required: false
            },
        },

        data() {
            return {

                dataEndpointUri: '/api/beneficial_owners',


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
                    benefical_owner: [{
                            "fieldName1": "cannot be empty",
                            "fieldName2": "is not numeric",
                        },
                        {
                            "fieldName1": "invalid format",
                            "fieldName4": "is not a string",
                        }
                    ]
                },


                disabled: true,
                beneficial_owner: 0,
                initial_owner_length: [],
                checked:false,
                errorList: [],
                addIndex: []
            }
        },

        methods: {
            buildInputFieldPath(field, index) {
                 
                let pos = (null === index) ? '' : '[' + index + ']';
                return this.formDataIdName + pos + '.' + field;
            },
            AddForm() {
                this.beneficialOwners.push(this.obj);
                this.addIndex = this.beneficialOwners.length;
                console.log(this.addIndex)

            },
            DeleteForm() {
                this.beneficialOwners.pop();

                this.addIndex = this.beneficialOwners.length;

            },

            isDisable(isValue, id_addIndex) {
                if (id_addIndex < this.initial_owner_length) {
                    return true
                }
            },
            


            selectedValue(isChecked) {
             
                return false


            },



        },



    }
</script>
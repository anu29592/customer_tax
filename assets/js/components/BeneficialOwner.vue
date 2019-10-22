<template>

    <div class="wrapper_form_2">
        <p class="errorMessage" v-if="errorList.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li :key="error" v-for="error in  errorList">{{ error }}</li>
            </ul>
        </p>
        <div :key="addIndex" class="element_form_2" v-bind:id="'element_form_2_' + addIndex" v-for="(item,addIndex) in beneficialOwners">

            <form class="main-container form_2" v-bind:id="'beneficial_owner_' + addIndex">



                <div class="form-group" :data-input-field-path="buildInputFieldPath('firstName', addIndex)" :disabled="isDisable(disabled,addIndex)">

         
                    <label class="label-style" v-bind:for="'first_name_' + addIndex">{{ $t ('beneficial_owners.firstName.label')}}</label>


                    <input class="form-control beneficial-partner--first_name" id="'first_name_' + addIndex"
                        v-bind:placeholder="$t ('beneficial_owners.firstName.placeholder')" type="text" v-model="item.firstName">



                </div>
                <div class="form-group" :data-input-field-path="buildInputFieldPath('lastName', addIndex)" :disabled="isDisable(disabled,addIndex)">

                    <label class="label-style" v-bind:for="'beneficial_owners.last_name' + addIndex">{{ $t ('beneficial_owners.lastName.label')}}</label>


                    <input class="form-control"  v-bind:placeholder="$t ('beneficial_owners.lastName.placeholder')" type="text" v-bind:id="'beneficial_owners.last_name' + addIndex"
                        v-model="item.lastName">


                </div>



                <div class="form-group" :data-input-field-path="buildInputFieldPath('taxId', addIndex)">

                    <label class="label-style" v-bind:for="'tax_id_' + addIndex"> {{ $t ('beneficial_owners.taxId.label')}}

                <div class="hint">
                        <i class="hint-icon">i</i>
                        <p class="hint-description">
                            <span>{{ $t ('beneficial_owners.taxId.hint')}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                        </p>


                    </div>

                    </label>
                 

                    <input class="form-control data--tax_id" v-bind:placeholder="$t ('beneficial_owners.taxId.placeholder')" type="text" v-bind:id="'tax_id_' + addIndex"
                        v-model="item.taxId">


                </div>

                <div class="form-group" :data-input-field-path="buildInputFieldPath('birthday', addIndex)">

                    <label class="label-style" v-bind:for="'birth_date_' + addIndex">{{ $t ('beneficial_owners.birthdate.label')}}</label>
            <input type="date"  class="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" v-bind:placeholder="$t ('beneficial_owners.birthdate.placeholder')" v-bind:id="'birth_date_' + addIndex" v-model="item.birthday" >
                   <!--  <datepicker class="data--birthday" :language="de" :format="'dd\.MM\.yyyy'"
                       v-bind:placeholder="$t ('beneficial_owners.birthdate.placeholder')" v-bind:id="'birth_date_' + addIndex" v-model="item.birthday"></datepicker>
 -->


                </div>

                <div class="form-row">
                    <div class="form-group col-md-8" :data-input-field-path="buildInputFieldPath('streetName', addIndex)">
                        <label class="label-style" v-bind:for="'street_name_' + addIndex">{{ $t ('beneficial_owners.streetName.label')}}</label>
                        <input class="form-control width_margin" v-bind:placeholder="$t ('beneficial_owners.streetName.placeholder')"
                            type="text" v-bind:id="'street_name_' + addIndex" v-model="item.streetName">
                    </div>
                    <div class="form-group col-md-4" :data-input-field-path="buildInputFieldPath('streetNumber', addIndex)">
                        <label class="label-style" v-bind:for="'street_number_' + addIndex">{{ $t ('beneficial_owners.streetNumber.label')}}</label>
                        <input class="form-control " v-bind:placeholder="$t ('beneficial_owners.streetNumber.placeholder')" type="text"
                            v-bind:id="'street_number_' + addIndex" v-model="item.streetNumber">
                    </div>

                </div>


                <div class="form-row">
                    <div class="form-group col-md-4" :data-input-field-path="buildInputFieldPath('postcode', addIndex)">
                        <label class="label-style" v-bind:for="'post_code_' + addIndex">{{ $t ('beneficial_owners.postcode.label')}}</label>
                        <input class="form-control  width_margin" v-bind:placeholder="$t ('beneficial_owners.postcode.placeholder')" 
                        type="text" v-bind:id="'post_code_' + addIndex" v-model="item.postcode">
                    </div>
                    <div class="form-group col-md-8" :data-input-field-path="buildInputFieldPath('city', addIndex)">
                        <label class="label-style" v-bind:for="'city_name_' + addIndex">{{ $t ('beneficial_owners.city.label')}}</label>
                        <input class="form-control  "  v-bind:placeholder="$t ('beneficial_owners.city.placeholder')"
                         type="text" v-bind:id="'city_name_' + addIndex" v-model="item.city">
                    </div>

                </div>








            </form>

        </div>
        <div class="buttons row">

            <button class="btn add_btn clone_form_2 btn-primary" id="clone_form_2" title="Einen neuen wirtschaftlich Berechtigten hinzufügen"
                v-on:click.self.prevent="addForm()"><i class="fa fa-plus"></i> {{ $t ('beneficial_owners.addButton.label')}}</button>


            <button class="btn minus_btn remove_form_2 btn-danger" id="remove_form_2" title="Wirtschaftlich Berechtigten löschen"
                v-on:click.self.prevent="deleteForm()" v-show="this.addIndex>this.initial_owner_length.length+1"><i
                    class="fa fa-trash"></i>
                {{ $t ('beneficial_owners.removeButton.label')}}</button>


            <label class="add_button_label" for=""> {{ $t ('beneficial_owners.infoButton.label')}}
            </label>

        </div>

    </div>
</template>

<script>
    import bus from '../event-bus.js';
   /*  import datepicker from 'vuejs-datepicker'; */
   /*  import {
        en,
        de
    } from 'vuejs-datepicker/dist/locale'; */

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
              /*   en: en,
                de: de, */
                dataEndpointUri: '/api/beneficial_owners',

                obj: {

                    id: '',
                    first_name: '',
                    last_name: '',
                    tax_id: '',
                    birth_date: '',
                    street_name: '',
                    street_number: '',
                    post_code: '',
                    city_name: '',
                    land: ''
                },

                errors: {
                    beneficial_owner: [{
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
                /*   checked:false, */
                errorList: [],
                addIndex: []
            }
        },
        mounted: function () {
            this.addForm();
        },
        components: {
            
        },

        methods: {
            buildInputFieldPath(field, index) {

                let pos = (null === index) ? '' : '[' + index + ']';

                return this.formDataIdName + pos + '.' + field;
            },
            addForm() {
                    
                var newArray = Object.create(this.obj);

                this.beneficialOwners.push(newArray);

                this.addIndex = this.beneficialOwners.length;

            },
            deleteForm() {
                this.beneficialOwners.pop();

                this.addIndex = this.beneficialOwners.length;

            },

            isDisable(isValue, id_addIndex) {
                if (id_addIndex < this.initial_owner_length) {
                    return true
                }
            },
        },

    }
</script>
<template>
    <div v-if="userState.initialized">
        <div v-if="customerType === 'co'">
           <CompanyTaxForm v-bind:customerData.sync="customer"></CompanyTaxForm>
        </div>
        <div v-else-if="customerType === 'bu'">
            <BusinessTaxForm v-bind:customerData.sync="customer"> </BusinessTaxForm>
        </div>
        <div v-else-if="customerType === 'pv'">
            <IndividualTaxForm v-bind:customerData.sync="customer"> </IndividualTaxForm>
        </div>
    </div>

</template>

<script>

    import CompanyTaxForm from '../views/CompanyTaxForm';
    import IndividualTaxForm from '../views/IndividualTaxForm';
    import BusinessTaxForm from '../views/BusinessTaxForm';
    import { mapGetters, mapState } from 'vuex'

    export default {
         data() {
             return {
                 customerData: null
             }
         },

        components: {
            CompanyTaxForm,
            IndividualTaxForm,
            BusinessTaxForm
        },
        computed: {
            ...mapState({
                userState: state => state.user
            }),
            ...mapGetters('user', {
                customer: 'getCurrentUser',
                customerType: 'getCustomerType'
            })
        },
    }

</script>

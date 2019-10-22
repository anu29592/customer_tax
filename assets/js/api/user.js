import axios from 'axios';

export default {

    current () {
        return axios.get('/api/user');
    },
    sendCompanyData(payload) {
        return axios.post('/api/user/tax_data', payload);
    }
}
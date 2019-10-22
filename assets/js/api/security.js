import axios from 'axios';

export default {
    login (login, contractId, password) {
        return axios.post(
            '/api/login_check',
            {
                username: login,
                contractId: contractId,
                password: password
            }
        );
    },
    logout () {
        return true;
    }
}
import SecurityAPI from '../api/security';

export default {
    namespaced: true,
    state: {
        isLoading: false,
        error: null,
        isAuthenticated: null,
        token: localStorage.getItem('t'),
        roles: []
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.error !== null;
        },
        error(state) {
            return state.error;
        },
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        hasRole(state) {
            return role => {
                return state.roles.indexOf(role) !== -1;
            }
        },
        getToken(state) {
            return state.token;
        }
    },
    mutations: {
        ['AUTHENTICATING'](state) {
            state.isLoading = true;
            state.error = null;
            state.isAuthenticated = false;
            state.roles = [];
            state.user = null;
        },
        ['LOGOUT'](state) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = false;
            state.roles = [];
            state.user = null;
            state.token = null;
        },
        ['REGISTERING'](state) {
            state.isLoading = true;
            state.error = null;
            state.isAuthenticated = false;
            state.roles = [];
            state.user = null;
        },
        ['REGISTRATION_SUCCESS'](state, data) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.roles = data.roles;
        },
        ['REGISTRATION_ERROR'](state, error) {
            state.isLoading = false;
            state.error = error;
            state.isAuthenticated = false;
            state.roles = [];
        },
        ['AUTHENTICATING_SUCCESS'](state, data) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.roles = data.roles;
            state.token = data.token;

        },
        ['AUTHENTICATING_ERROR'](state, error) {
            state.isLoading = false;
            state.error = error;
            state.isAuthenticated = false;
            state.roles = [];
        },
        ['PROVIDING_DATA_ON_REFRESH_SUCCESS'](state, payload) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.roles = payload.roles;
        },
    },
    actions: {
        login({commit}, payload) {
            commit('AUTHENTICATING');
            return SecurityAPI.login(payload.login, payload.contractId, payload.password)
                .then(res => {
                    localStorage.setItem('t', res.data.token);
                    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;

                    return commit('AUTHENTICATING_SUCCESS', res.data);
                })
                .catch(err => commit('AUTHENTICATING_ERROR', err));
        },
        invalidateToken({commit}) {
            localStorage.removeItem('t');
            commit('LOGOUT');
        },
        logout({commit, dispatch}) {

            return SecurityAPI.logout()
                .then(res => {
                    dispatch('security/invalidateToken', null, { root: true });
                    return commit('LOGOUT');
                })
                .catch(err => {
                    console.log('error', err);
                    return commit('AUTHENTICATING_ERROR', err);
                });
        },

        register({commit}, payload) {
            commit('REGISTERING');

            return SecurityAPI.register(payload.customerId, payload.contractId, payload.password, payload.passwordConfirm)
                .then(res => {
                    return commit('REGISTRATION_SUCCESS', res.data);
                })
                .catch(err => commit('REGISTRATION_ERROR', err));
        },
        onRefresh({commit}, payload) {

            commit('PROVIDING_DATA_ON_REFRESH_SUCCESS', payload);
        },
    },
}
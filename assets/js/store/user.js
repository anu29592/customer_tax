import UserAPI from '../api/user';
import router from '../router/index'

export default {
    namespaced: true,
    state: {
        isLoading: false,
        isSendingData: false,
        fetchingDataError: null,
        postError: null,
        initialized: false,
        currentUser: null,
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        hasError(state) {
            return state.fetchingDataError !== null;
        },
        error(state) {
            return state.fetchingDataError;
        },
        getCurrentUser(state) {
            return state.currentUser;
        },
        getCustomerType(state) {
            if (!state.initialized)
                return null;
            return state.currentUser.customerType;
        }
    },
    mutations: {

        ['FETCHING_CURRENT_USER'](state) {
            state.isLoading = true;
            state.error = null;
            state.currentUser = null;
        },
        ['FETCHING_CURRENT_USER_SUCCESS'](state, user) {
            state.isLoading = false;
            state.error = null;
            state.currentUser = user;
            state.initialized = true;
        },
        ['FETCHING_CURRENT_USER_ERROR'](state, error) {
            state.isLoading = false;
            state.fetchingDataError = error;
            state.currentUser = null;
        },
        ['SENDING_COMPANY_DATA'](state, error) {
            state.isSendingdata = true;
        },
        ['POST_DATA_SUCCESS'](state) {
            state.isSendingdata = false;
            state.postError = null;
        },
        ['POST_DATA_ERROR'](state, error) {
            state.isSendingdata = false;
            state.postError = error;
        }
    },
    actions: {
        getUser({commit, dispatch}) {
            commit('FETCHING_CURRENT_USER');

            return UserAPI.current()
                .then(function (res) {
                    return commit('FETCHING_CURRENT_USER_SUCCESS', res.data);
                })
                .catch(err => {
                    commit('FETCHING_CURRENT_USER_ERROR', err);

                    dispatch('security/invalidateToken', null, { root: true });
                    router.push({'name': 'login'});
                });
        },

        sendCompanyData({commit}, payload) {
            commit('SENDING_COMPANY_DATA');

            return UserAPI.sendCompanyData(payload)
                .then(function (res) {
                    commit('POST_DATA_SUCCESS', res.data);
                    return res.data;
                }).catch(err => {
                    commit('POST_DATA_ERROR', err);
                    throw err;
                });

        }
    },
}
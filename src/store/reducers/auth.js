
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.AUTH_START) {
        return {
            ...state,
            error: false,
            loading: true
        };
    }

    if (action.type === actionTypes.AUTH_SUCCESS) {
        return {
            ...state,
            token: action.idToken,
            loading: false,
            error: null,
            userId: action.userId
        };
    }

    if (action.type === actionTypes.AUTH_FAIL) {
        return {
            ...state,
            loading: false,
            error: action.error,

        };
    }

    if (action.type === actionTypes.AUTH_LOGOUT) {
        return {
            ...state,
            token: null,
            userId: null
        };
    }

    if (action.type === actionTypes.SET_AUTH_REDIRECT_PATH) {
        return {
            ...state,
            authRedirectPath: action.path
        };
    }

    return state;
}
export default reducer;
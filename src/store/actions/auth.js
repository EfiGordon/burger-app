import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
    let BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    if (!isSignup) {
        BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    }
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        axios.post(BASE_URL + API_KEY, authData)
            .then((response) => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
};
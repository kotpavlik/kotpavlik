import {
    securityAPI,
    userAuthAPI
} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    CaptchaUrl: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}
export const setUserAuthData = (id, email, login, isAuth, captcha) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth,
        captcha
    }
});
export const getCaptchaUrlSuccess = (CaptchaUrl) => ({
    type: GET_CAPTCHA_URL,
    payload: {
        CaptchaUrl
    }
});
export default AuthReducer;

export const getAuthAboutUs = () => {
    return async(dispatch) => {
        let response = await userAuthAPI.getAuth();
        if (response.data.resultCode === 0) {
            let {
                id,
                email,
                login
            } = response.data.data;
            dispatch(setUserAuthData(id, email, login, true));
        }
    }
}
export const getCaptchaUrl = () => {
    return async(dispatch) => {
        let response = await securityAPI.getCaptcha();
        let CaptchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(CaptchaUrl))
    }
}
export const login = (email, password, rememberMe, captcha, setStatus) => {
    return async(dispatch) => {
        let response = await userAuthAPI.loginApi(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthAboutUs());
            dispatch(getCaptchaUrlSuccess(null));
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            setStatus(response.data.messages)
        }
    }
}
export const logout = () => {
    return async(dispatch) => {
        let response = await userAuthAPI.logoutApi();
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
        }
    }
}
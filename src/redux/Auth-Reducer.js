import { userAuthAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case SET_USER_DATA:
            return {...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
}
export const setUserAuthData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: {
        id,
        email,
        login
    }
});
export default AuthReducer;

export const getAuthAboutUs = () => {
    return (dispatch) => {
        userAuthAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserAuthData(id, email, login));
            }
        });
    }
}
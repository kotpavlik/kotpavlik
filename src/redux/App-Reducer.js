import { getAuthAboutUs } from "./Auth-Reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false

};

const AppReducer = (state = initialState, action) => {
    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case SET_INITIALIZED:
            return {...state,
                initialized: true
            };

        default:
            return state;
    }
}
export const initiolizedSuccess = () => ({
    type: SET_INITIALIZED
});
export default AppReducer;

export const initiolizeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthAboutUs());
        Promise.all([promise])
            .then(() => {
                dispatch(initiolizedSuccess());
            })
    }
}

// Создали reducer App создали булевое значение initialized: false и потом если всё ок перезатираем на true.В каком случае
// export const initiolizeApp = () => {   - создаем санку
//     return (dispatch) => { - диспатчим её
//         let promise = dispatch(getAuthAboutUs()); - создаем промис на диспатч из другого редюссера 
//         Promise.all([promise])  - по скольку таких отложеных диспатчей может быть несколько, создаём массив промисов 
//             .then(() => { - и когда они все отработают then запускает dispatch(initiolizedSuccess()); и меняет false на true
//                 dispatch(initiolizedSuccess());
//             })
//     }
// }
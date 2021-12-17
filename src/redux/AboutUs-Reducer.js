import { AboutUsAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const NEW_POST_CHANGE = 'NEW_POST_CHANGE';
const SET_USER_MESSENGERS = 'SET_USER_MESSENGERS';
const SET_USER_CONTACTS = 'SET_USER_CONTACTS';
const SET_LOOKING_JOB = 'SET_LOOKING_JOB';

let initialState = {
    PostsArray: [{
            id: 1,
            post: "вы молодцы, спасибо что создаёте такую крутую одежу",
            like: 54
        },
        {
            id: 2,
            post: "крутая косуха, напишите мне как можно заказать",
            like: 23
        },
        {
            id: 3,
            post: "Ребята, у вас крутая команда. Очень интересно за вами наблюдать",
            like: 33
        },
        {
            id: 4,
            post: "Добрый день, я таргетолок из Бреста.Хотел бы предложить вам свои услуги",
            like: 22
        },
        {
            id: 5,
            post: "А как зовут вашу собаку?",
            like: 343
        }
    ],
    newPostText: '',
    profile: null,
    contacts: null,
    lookingForAJob: null
};

const AboutUsReducer = (state = initialState, action) => {

    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case ADD_POST:
            return {...state,
                PostsArray: [...state.PostsArray, { id: 6, post: state.newPostText, like: 0 }], // так пушим
                newPostText: '' // зануляем
            };
        case NEW_POST_CHANGE:
            return {...state, newPostText: action.NewText }; // копируем state и говорим что в newPostText будет текст из action.NewText
        case SET_USER_MESSENGERS:
            return {...state,
                profile: action.profile
            };
        case SET_USER_CONTACTS:
            return {...state,
                contacts: action.contacts
            }
        case SET_LOOKING_JOB:
            return {...state,
                lookingForAJob: action.job
            }

        default:
            return state;
    }
}
export const addPostNewAction = () => ({
    type: ADD_POST
});
export const setLookingForAJob = (job) => ({
    type: SET_LOOKING_JOB,
    job
});

export const setMessenger = (profile) => ({
    type: SET_USER_MESSENGERS,
    profile
});
export const onPostChangeNewAction = (text) => ({
    type: NEW_POST_CHANGE,
    NewText: text
});
export const setContacts = (contscts) => ({
    type: SET_USER_CONTACTS,
    contscts
});


export default AboutUsReducer;

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        AboutUsAPI.getProfile(userId).then(data => {
            dispatch(setMessenger(data));
            dispatch(setContacts(data));
            dispatch(setLookingForAJob(data));
        });

    }
}
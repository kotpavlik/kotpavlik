const ADD_POST = 'ADD_POST';
const NEW_POST_CHANGE = 'NEW_POST_CHANGE';

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
};

const AboutUsReducer = (state = initialState, action) => {

    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case ADD_POST:
            {
                let newPost = {
                    id: 6,
                    post: state.newPostText,
                    like: 0
                };
                let stateCopy = {...state };
                stateCopy.PostsArray = [...state.PostsArray];
                stateCopy.PostsArray.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
            }
        case NEW_POST_CHANGE:
            {
                let stateCopy = {...state };
                stateCopy.newPostText = action.NewText;
                return stateCopy;
            }
        default:
            return state;
    }
}
export const addPostNewAction = () => ({
    type: ADD_POST
});
export const onPostChangeNewAction = (text) => ({
    type: NEW_POST_CHANGE,
    NewText: text
});

export default AboutUsReducer;
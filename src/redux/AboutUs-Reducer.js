const ADD_POST = 'ADD_POST';
const NEW_POST_CHANGE = 'NEW_POST_CHANGE';

const AboutUsReducer = (state, action) => {

    switch (action.type) { // пояснения по аналогичной работе с switch/case/break в чс TestMessenger-Reducer.js
        case ADD_POST:
            const newPost = {
                id: 6,
                post: state.newPostText,
                like: 0
            };
            state.PostsArray.push(newPost);
            state.newPostText = '';
            return state;
        case NEW_POST_CHANGE:
            state.newPostText = action.NewText;
            return state;
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
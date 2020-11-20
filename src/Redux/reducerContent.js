const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [{
        id: 1,
        post: "fuck u",
        likesCount: 5
    },
    {
        id: 2,
        post: "good luck",
        likesCount: 23
    },
    {
        id: 3,
        post: "nice try",
        likesCount: 13
    },
    {
        id: 4,
        post: "maybe",
        likesCount: 76
    },
    {
        id: 5,
        post: "real talk",
        likesCount: 29
    }
],
newPostText: ''
};

const reducerContent = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            state.posts.push(NewPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});


export default reducerContent;
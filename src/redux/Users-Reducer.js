const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
    users: []
};
const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOOGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(userObj => {
                    if (userObj.id === action.userId) {
                        return {
                            ...userObj,
                            followed: !userObj.followed
                        }
                    }
                    return userObj;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const toggleFollowAC = (userId) => ({
    type: TOOGLE_FOLLOW,
    userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
export default UsersReducer;
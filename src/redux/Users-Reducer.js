const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';



let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}
export const toggleFollow = (userId) => ({
    type: TOOGLE_FOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCount = (totalUsersCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    count: totalUsersCount
});
export const toogleIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching
});
export default UsersReducer;
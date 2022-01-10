import { followAPI, usersAPI } from "../api/api";

const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionsSize: 8

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
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
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
export const toogleFollowingInProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});
export default UsersReducer;

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}
export const follow = (id) => {
    return async(dispatch) => {
        dispatch(toogleFollowingInProgress(true, id));
        let data = await followAPI.deleteUnfollow(id);
        if (data.resultCode == 0) {
            dispatch(toggleFollow(id));
        }
        dispatch(toogleFollowingInProgress(false, id));
    }
}
export const unfollow = (id) => {
    return async(dispatch) => {
        dispatch(toogleFollowingInProgress(true, id));
        let data = await followAPI.postFollow(id);
        if (data.resultCode == 0) {
            dispatch(toggleFollow(id));
        }
        dispatch(toogleFollowingInProgress(false, id));
    }
}

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// поменяли then  на asinc await - ставим перед dispatch потому что эта функция должна запускаться асинхронно и с помощью 
// await дожидаемся ответа и готово )
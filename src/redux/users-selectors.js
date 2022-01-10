import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.UsersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})
export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.UsersPage.followingInProgress
}


// Установили пакет модулей npm install reselect. Из него пользуемся функцией createSelector. Это всё делаем для 
// mapToState в UsersContainer.jsx туда запиливаем селекты эти в виде функций и пушка гонка такие селекторы можно захреначить во всех
// контейнерных компанентах
const TOOGLE_FOLLOW = 'TOOGLE_FOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
    Users: [{
            id: 1,
            urlPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpQnmtR-yS6wKuPZCJRzfBpRfHosC83rrctsvGrAenORQtONQmbXZuVPYnxm1e_LiI9E&usqp=CAU',
            followed: false,
            userName: 'Morgenstern',
            status: 'Делай деньги блять вот так',
            locationName: {
                sityName: 'Москва',
                country: 'Россия'
            }
        },
        {
            id: 2,
            urlPhoto: 'https://icdn.lenta.ru/images/2020/07/23/15/20200723150243223/square_1280_d319d9481427961cc7d14bfeeb41b7d6.jpg',
            followed: true,
            userName: 'Kiryusha',
            status: 'Клеопатри - молочный шоколад',
            locationName: {
                sityName: 'Киев',
                country: 'Украина'
            }
        },
        {
            id: 3,
            urlPhoto: 'https://www.vokrug.tv/pic/person/0/5/0/c/050ce18f0189679366cdffe89149c365.jpg',
            followed: false,
            userName: 'Olegi LSP',
            status: 'Tragic sity',
            locationName: {
                sityName: 'Витебск',
                country: 'Беларусь'
            }
        }
    ]
};
const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOOGLE_FOLLOW:
            return {
                ...state,
                Users: state.Users.map(userObj => {
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
                Users: [...state.Users, ...action.Users]
            }
        default:
            return state;
    }
}
export const toggleFollowAC = (userId) => ({
    type: TOOGLE_FOLLOW,
    userId
});

export const setUsersAC = (Users) => ({
    type: SET_USERS,
    Users
});


export default UsersReducer;
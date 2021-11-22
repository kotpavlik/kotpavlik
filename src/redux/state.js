const ADD_POST = 'ADD_POST';
const NEW_POST_CHANGE = 'NEW_POST_CHANGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_MESSAGE_CHANGE';

let store = {

    _state: {
        AboutUsPage: {
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
        },
        ForMenPage: {
            productMenArray: [{
                    id: 1,
                    name: "Панама",
                    comp: "20% хлопок 30% вискоза 50% плащевка",
                    price: 60,
                },
                {
                    id: 2,
                    name: "Штаны",
                    comp: "70% вискоза 25% хлопок 5% шерсть",
                    price: 130,
                },
                {
                    id: 3,
                    name: "Платье",
                    comp: "80% хлопок 20% поливискоза",
                    price: 150
                },
                {
                    id: 4,
                    name: "Пальто",
                    comp: "100% плащевка",
                    price: 250
                },
                {
                    id: 5,
                    name: "Худи",
                    comp: "50% поливискоза 50% искуственная замша",
                    price: 190,
                },
                {
                    id: 6,
                    name: "Косуха",
                    comp: "100% экокожа - основной материал  80% полиэстер 20% хлопок",
                    price: 490,
                }
            ]
        },
        ForWomenPage: {
            productWomenArray: [{
                    id: 1,
                    name: "Панама",
                    comp: "20% хлопок 30% вискоза 50% плащевка",
                    price: 60,
                },
                {
                    id: 2,
                    name: "Штаны",
                    comp: "70% вискоза 25% хлопок 5% шерсть",
                    price: 130,
                },
                {
                    id: 3,
                    name: "Платье",
                    comp: "80% хлопок 20% поливискоза",
                    price: 150
                },
                {
                    id: 4,
                    name: "Пальто",
                    comp: "100% плащевка",
                    price: 250
                },
                {
                    id: 5,
                    name: "Худи",
                    comp: "50% поливискоза 50% искуственная замша",
                    price: 190,
                },
                {
                    id: 6,
                    name: "Косуха",
                    comp: "100% экокожа - основной материал  80% полиэстер 20% хлопок",
                    price: 490,
                }
            ]
        },
        ShopPage: {
            productArray: [{
                    id: 1,
                    name: "Панама",
                    comp: "20% хлопок 30% вискоза 50% плащевка",
                    price: 60,
                },
                {
                    id: 2,
                    name: "Штаны",
                    comp: "70% вискоза 25% хлопок 5% шерсть",
                    price: 130,
                },
                {
                    id: 3,
                    name: "Платье",
                    comp: "80% хлопок 20% поливискоза",
                    price: 150
                },
                {
                    id: 4,
                    name: "Пальто",
                    comp: "100% плащевка",
                    price: 250
                },
                {
                    id: 5,
                    name: "Худи",
                    comp: "50% поливискоза 50% искуственная замша",
                    price: 190,
                },
                {
                    id: 6,
                    name: "Косуха",
                    comp: "100% экокожа - основной материал  80% полиэстер 20% хлопок",
                    price: 490,
                }

            ],
            PantsArray: [{
                    id: 1,
                    name: "Штаны песок",
                    comp: "20% хлопок 30% вискоза 50% плащевка",
                    price: 130,
                },
                {
                    id: 2,
                    name: "Штаны графит",
                    comp: "70% вискоза 25% хлопок 5% шерсть",
                    price: 130,
                }
            ]
        },
        TestMessengerPage: {
            MessangesArray: [{
                    id: 1,
                    message: 'привет, как дела ?',
                },
                {
                    id: 2,
                    message: 'Погнали тусить ',
                },
                {
                    id: 3,
                    message: 'Отшиваемся быстрее',
                },
                {
                    id: 4,
                    message: 'Заканчиваем с Реактом к НГ',
                }
            ],
            NewMessageText: '',

            FriendsArray: [{
                    id: 1,
                    userName: 'Misha Krug',
                },
                {
                    id: 2,
                    userName: 'Oleg LSP',
                }, {
                    id: 3,
                    userName: 'Max Korzh',
                }, {
                    id: 4,
                    userName: 'Kirill Poshlaya Molly',
                },

            ]
        },

    },
    getState() {

        return this._state;
    },
    _rerenderEntireTree() {
        console.log('state hi');
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 6,
                post: this._state.AboutUsPage.newPostText,
                like: 0
            };
            this._state.AboutUsPage.PostsArray.push(newPost);
            this._state.AboutUsPage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === NEW_POST_CHANGE) {
            this._state.AboutUsPage.newPostText = action.NewText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === ADD_MESSAGE) { // создаем action.type
            const message = this._state.TestMessengerPage.NewMessageText; // определяем чему равна переменная, а она ровна написаному в <textarea/> и передано в NewMessageText     
            this._state.TestMessengerPage.NewMessageText = ''; // зануляем строку
            this._state.TestMessengerPage.MessangesArray.push({ id: 5, message: message }); // пушим изменения в массив с данными из переменной сощданой строкой выше
            this._rerenderEntireTree(this._state); // перерендериваем дерево
        } else if (action.type === NEW_MESSAGE_CHANGE) { // создаем action.type
            this._state.TestMessengerPage.NewMessageText = action.NewMessage; // создаем новый action.NewMessage и засовываем его в state в NewMessageText
            this._rerenderEntireTree(this._state); // перерендериваем дерево
        }
    }
}

export const addPostNewAction = () => ({
    type: ADD_POST
});
export const onPostChangeNewAction = (text) => ({
    type: NEW_POST_CHANGE,
    NewText: text
});
export const addMessageAction = () => ({
    type: ADD_MESSAGE
});
export const onMessageAction = (text) => ({
    type: NEW_MESSAGE_CHANGE,
    NewMessage: text
});


export default store;
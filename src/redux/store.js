import AboutUsReducer from "./AboutUs-Reducer";
import ForMenReducer from "./ForMen-Reducer";
import ForWomenReducer from "./ForWomen-Reducer";
import ShopReducer from "./Shop-Reducer";
import TestMessengerReducer from "./TestMessenger-Reducer";


let store = {

    _state: { // _state является приватным объектом, на это указывает нижнее подчеркивание и к нему можно обратиться из вне только спомошью гетеров и скткров - функций вызова 
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
            newPostText: '', // относиться к <textarea/> и передаётся через props в UI в параметр value = {newPostText}
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
    getState() { // функция которая отвечает за получения приватных данных как _state

        return this._state;
    },
    _rerenderEntireTree() {
        console.log('state hi');
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer; // функция которая следит за изменениями в state и отвечает за перерисовку всего дерева
    },
    dispatch(action) { // в store-redux работает автоматически (инкапсулирован) принимает функцию reducer и подменяет кусок state на тот который пришел из этой функции или возвращает прежний state

        this._state.AboutUsPage = AboutUsReducer(this._state.AboutUsPage, action); // этот reducer отрабатывает и превращается в новый AboutUsPage
        this._state.TestMessengerPage = TestMessengerReducer(this._state.TestMessengerPage, action); // этот reducer отрабатывает и превращается в новый TestMessengerPage
        this._state.ForWomenPage = ForWomenReducer(this._state.ForWomenPage, action); // этот reducer отрабатывает и превращается в новый ForWomenPage
        this._state.ForMenPage = ForMenReducer(this._state.ForMenPage, action); // этот reducer отрабатывает и превращается в новый ForMenPage
        this._state.ShopPage = ShopReducer(this._state.ShopPage, action); // этот reducer отрабатывает и превращается в новый ShopPage

        this._rerenderEntireTree(this._state);
    }
}



export default store;
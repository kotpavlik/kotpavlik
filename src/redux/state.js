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
    },
    getState() {
        debugger;
        return this._state;
    },
    _rerenderEntireTree() {
        console.log('state hi');
    },

    addPost() {

        const newPost = {
            id: 6,
            post: this._state.AboutUsPage.newPostText,
            like: 0
        };
        this._state.AboutUsPage.PostsArray.push(newPost);
        this._state.AboutUsPage.newPostText = '';

        this._rerenderEntireTree(this._state);
    },

    NewPostChange(NewText) {
        this._state.AboutUsPage.newPostText = NewText;
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}
export default store;
const ADD_MESSAGE = 'ADD_MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_MESSAGE_CHANGE';

let initialState = { // создаем state в каждом reducer  он потом склеивается в общий state
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
};

const TestMessengerReducer = (state = initialState, action) => { // принимаем initialState, вон он вверху и action
    //  switch  не используем break потому что return не даёт проваливаться программе дальше
    switch (action.type) {
        case ADD_MESSAGE:
            // создаём переменную для NewMessageText - то что мы впечатываем из UI
            let message = state.NewMessageText;
            // создаем новый объект и сразу же его возвращаем.Копируем state в нем делаем изменения и возвращаем его
            return {...state,
                NewMessageText: '',
                MessangesArray: [...state.MessangesArray, { id: 5, message: message }] //это и есть push в массив нового объекта
            };

        case NEW_MESSAGE_CHANGE:
            return {...state,
                NewMessageText: action.NewMessage
            }
        default: // если не нашел совпадений то возвращает старый state
            return state;
    }
}

export const addMessageAction = () => ({ // создаем переменные action которые будут принимать свойства и параметры в UI и dispatch-им его туда 
    type: ADD_MESSAGE
});
export const onMessageAction = (text) => ({
    type: NEW_MESSAGE_CHANGE,
    NewMessage: text // этот экшн используем в строке 56.Сюда приходит текст из UI
});
export default TestMessengerReducer;
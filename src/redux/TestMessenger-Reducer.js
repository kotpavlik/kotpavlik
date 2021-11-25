const ADD_MESSAGE = 'ADD_MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_MESSAGE_CHANGE';

let initialState = {
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

const TestMessengerReducer = (state = initialState, action) => {

    switch (action.type) { // если (action.type) равен ...
        case ADD_MESSAGE: // поменяли if else if  на switch/case  и не пишем  break  потому что return останавливает функцию и возвращает её
            const message = state.NewMessageText; // определяем чему равна переменная, а она ровна написаному в <textarea/> и передано в NewMessageText     
            state.NewMessageText = ''; // зануляем строку
            state.MessangesArray.push({
                id: 5,
                message: message
            }); // пушим изменения в массив с данными из переменной сощданой строкой выше
            return state; // возвращаем state
        case NEW_MESSAGE_CHANGE:
            state.NewMessageText = action.NewMessage; // создаем новый action.NewMessage и засовываем его в state в NewMessageText
            return state;
        default: // если не нашел совпадений то возвращает старый state
            return state;
    }
}

export const addMessageAction = () => ({ // создаем переменные action которые будут принимать свойства и параметры в UI и dispatch-им его туда 
    type: ADD_MESSAGE
});
export const onMessageAction = (text) => ({
    type: NEW_MESSAGE_CHANGE,
    NewMessage: text
});
export default TestMessengerReducer;
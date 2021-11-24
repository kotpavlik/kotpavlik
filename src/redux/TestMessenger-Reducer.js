const ADD_MESSAGE = 'ADD_MESSAGE';
const NEW_MESSAGE_CHANGE = 'NEW_MESSAGE_CHANGE';


const TestMessengerReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE: // поменяли if else if  на switch/case  и не пишем  break  потому что return останавливает функцию и возвращает её
            const message = state.NewMessageText; // определяем чему равна переменная, а она ровна написаному в <textarea/> и передано в NewMessageText     
            state.NewMessageText = ''; // зануляем строку
            state.MessangesArray.push({
                id: 5,
                message: message
            }); // пушим изменения в массив с данными из переменной сощданой строкой выше
            return state;
        case NEW_MESSAGE_CHANGE:
            state.NewMessageText = action.NewMessage; // создаем новый action.NewMessage и засовываем его в state в NewMessageText
            return state;
        default:
            return state;
    }
}

export const addMessageAction = () => ({
    type: ADD_MESSAGE
});
export const onMessageAction = (text) => ({
    type: NEW_MESSAGE_CHANGE,
    NewMessage: text
});
export default TestMessengerReducer;
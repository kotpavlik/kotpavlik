const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const reducerMessages = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let NewMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(NewMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});


export default reducerMessages;
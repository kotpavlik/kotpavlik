const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [{
            id: 1,
            name: "Misha"
        },
        {
            id: 2,
            name: "Vika Nine 22"
        },
        {
            id: 3,
            name: "Sinfozatron"
        },
        {
            id: 4,
            name: "Dasha Nine 22"
        }
    ],

    messages: [{
            id: 1,
            message: "Привет"
        },
        {
            id: 2,
            message: "Игорек,как дела?"
        },
        {
            id: 3,
            message: "В качалку гоним к 12.00"
        },
        {
            id: 4,
            message: "Молчишь-в жопе торчишь"
        }
    ],
    newMessageText: ''

};

const reducerMessages = (state = initialState, action) => {
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
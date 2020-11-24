import React from 'react';
import { sendMessageCreator, updateNewMessageActionCreator } from '../../../Redux/reducerMessages';
import TextareaNavMessage from './TextareaNavMessage';

const TextareaNavMessageContainer = (props) => {
    debugger;
    let store = props.store;

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }



    return <TextareaNavMessage MessageChange={onMessageChange } onSendMessage={sendMessage} store={store}/>;
}
export default TextareaNavMessageContainer;

import React from 'react';
import { sendMessageCreator, updateNewMessageActionCreator } from '../../../Redux/reducerMessages';
import s from './TextareaNavMessage.module.css'

const TextareaNavMessage = (props) => {
    

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    }



    return (
        <div>
            <div className={s.text}>
                <textarea
                    onChange={onMessageChange}
                    placeholder="Please,write"
                    className={s.textarea}
                    value={props.state.newMessageText} />
            </div>
            <div className={s.but}>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}
export default TextareaNavMessage;

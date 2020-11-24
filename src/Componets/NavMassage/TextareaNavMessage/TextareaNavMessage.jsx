import React from 'react';
import s from './TextareaNavMessage.module.css'

const TextareaNavMessage = (props) => {
    debugger;

    let sendMessage = () => {
        props.onSendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.MessageChange(text);
    }



    return (
        <div>
            <div className={s.text}>
                <textarea
                    onChange={onMessageChange}
                    placeholder="Please,write"
                    className={s.textarea}
                    value={props.store.newMessageText} />
            </div>
            <div className={s.but}>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}
export default TextareaNavMessage;

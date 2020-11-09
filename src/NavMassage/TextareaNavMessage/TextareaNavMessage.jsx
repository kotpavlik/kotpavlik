import React from 'react';
import s from './TextareaNavMessage.module.css'

const TextareaNavMessage = (props) => {
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text };
        props.dispatch(action);
    }



    return (
        <div>
            <div className={s.text}>
                <textarea
                    onChange={onMessageChange}
                    placeholder="Please,write"
                    className={s.textarea}
                    ref={newMessageElement}
                    value={props.state.newMessageText} />
            </div>
            <div className={s.but}>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}
export default TextareaNavMessage;

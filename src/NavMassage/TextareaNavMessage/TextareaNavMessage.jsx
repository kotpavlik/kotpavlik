import React from 'react';
import s from './TextareaNavMessage.module.css'

const TextareaNavMessage = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div>
            <div className={s.text}>
                <textarea placeholder="Please,wright" className={s.textarea} ref={newMessageElement}></textarea>
            </div>
            <div className={s.but}>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}
export default TextareaNavMessage;

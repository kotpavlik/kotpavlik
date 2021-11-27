import React from "react";
import s from "./ButtonsDialogs.module.css";

const ButtonsDialogs = (props) => {
debugger;


let NewMessageText = props.NewMessageText;

let OnAddMessange =()=> { 
props.addMessange();
};

let onMessageChange = (e) => {       // (e) означает - этот <textarea/> Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. Он отличается от Event.currentTarget, если обработчик события вызывается во время всплытия (bubbling) или захвата события.
   let text = e.target.value;
   props.MessageChange(text);
};

  return (
    <div className={s.ButtonsDialogs}>
      <div className={s.textContiner}>
          <textarea className={s.text} onChange={onMessageChange} value = {NewMessageText} placeholder='напиши ...'></textarea>
      </div>
      <div className={s.buttContiner}>
          <button className={s.butt} onClick={OnAddMessange}>send</button>
      </div>
    </div>
  );
};

export default ButtonsDialogs;

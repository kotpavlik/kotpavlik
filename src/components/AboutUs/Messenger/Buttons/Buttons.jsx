import React from "react";
import s from './Buttons.module.css'

const Buttons = () => {
  return (
    <div className={s.buttons}>
      <textarea
        className={s.text}
        name="text"
        placeholder="напиши..."
      ></textarea>
      <div className={s.buttReview}>
        <button className={s.send}>send</button>
      </div>
    </div>
  );
};

export default Buttons;

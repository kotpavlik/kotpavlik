import React from "react";
import s from "./Buttons.module.css";

const Buttons = (props) => {
debugger;
 
  let NewPosteElement = React.createRef();

  let addPost = () => {
    props.OnAddPost();
  };
  let onPostChange = () => {
    let text = NewPosteElement.current.value;
    props.OnPostChange(text);
  };

  return (
    <div className={s.buttons}>
      <textarea
        ref={NewPosteElement}
        onChange={onPostChange}
        value={props.AboutUsPage.newPostText} //достаём value из ButtonsContainer 
        className={s.text}
        name="text"
        placeholder="напиши..."
      />
      <div className={s.buttReview}>
        <button onClick={addPost} className={s.send}>
          send
        </button>
      </div>
    </div>
  );
};

export default Buttons;

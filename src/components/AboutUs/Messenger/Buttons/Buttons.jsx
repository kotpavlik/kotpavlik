import React from "react";
import s from "./Buttons.module.css";
import { addPostNewAction } from "../../../../redux/AboutUs-Reducer";
import { onPostChangeNewAction } from "../../../../redux/AboutUs-Reducer";

const Buttons = (props) => {

 
  let NewPosteElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostNewAction());
  };
  let onPostChange = () => {
    let text = NewPosteElement.current.value;
    props.dispatch(onPostChangeNewAction(text));
  };

  return (
    <div className={s.buttons}>
      <textarea
        ref={NewPosteElement}
        onChange={onPostChange}
        value={props.PostsArray.newPostText}
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

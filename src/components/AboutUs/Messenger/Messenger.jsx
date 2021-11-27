import React from "react";
import ButtonsContainer from "./Buttons/ButtonsContainer";
import s from "./Messenger.module.css";
import Posts from "./Posts/Posts";

const Messenger = (props) => {
 debugger;
  let PostsElements = props.state.PostsArray.map (postObj => <Posts post={postObj.post} like ={postObj.like}/> ); // здесь прокинули пропсы через MessengerContainer

  return (
    <div className={s.messenger}>
     {PostsElements}
     
     <ButtonsContainer/>
     
    </div>
  );
};

export default Messenger;

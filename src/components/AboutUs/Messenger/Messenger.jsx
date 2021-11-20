import React from "react";
import Buttons from "./Buttons/Buttons";
import s from "./Messenger.module.css";
import Posts from "./Posts/Posts";

const Messenger = (props) => {
 
  let PostsElements = props.PostsArray.PostsArray.map (postObj => <Posts  post={postObj.post} like ={postObj.like}/> ); 

  return (
    <div className={s.messenger}>
     {PostsElements}
     <Buttons PostsArray={props.PostsArray} addPost={props.addPost} NewPostChange={props.NewPostChange}/>
     
    </div>
  );
};

export default Messenger;

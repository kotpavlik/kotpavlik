import React from "react";
import Buttons from "./Buttons/Buttons";
import s from "./Messenger.module.css";
import Posts from "./Posts/Posts";

const Messenger = () => {
  return (
    <div className={s.messenger}>
     <Posts/>
     <Buttons/>
     
    </div>
  );
};

export default Messenger;

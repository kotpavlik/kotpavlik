import React from "react";
import ButtonsDialogs from "./Dialog/ButtonsDialogs/ButtonsDialogs";
import Dialog from "./Dialog/Dialog";
import FriendDialog from "./FriendsDialog/FriendDialog";
import s from "./TestMessenger.module.css";

const TestMessenger = (props) => {


  let NewMessageArray = props.dialog.MessangesArray.map((mess) => (
    <Dialog message={mess.message} />
  ));
  let NewFriendsArray = props.dialog.FriendsArray.map((name) => (
    <FriendDialog userName={name.userName} />
  ));

  return (
    <div className={s.testMess}>
      <div className={s.header}>Диалоги</div>
      <div className={s.friend}>{NewFriendsArray}</div>
      <div className={s.mess}>{NewMessageArray}</div>
      <div className={s.footer}><ButtonsDialogs dialog={props.dialog} dispatch={props.dispatch}/></div>
    </div>
  );
};

export default TestMessenger;

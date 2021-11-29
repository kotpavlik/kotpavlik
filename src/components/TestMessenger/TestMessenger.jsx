import React from "react";
import ButtonsDialogsContainer from "./Dialog/ButtonsDialogs/ButtonsDialogsContainer";
import Dialog from "./Dialog/Dialog";
import FriendDialog from "./FriendsDialog/FriendDialog";
import s from "./TestMessenger.module.css";

const TestMessenger = (props) => {


  let NewMessageArray = props.TestMessengerPage.MessangesArray.map((mess) => (
    <Dialog message={mess.message} key={mess.id} />
  ));
  let NewFriendsArray = props.TestMessengerPage.FriendsArray.map((name) => (
    <FriendDialog userName={name.userName} key={name.id} />
  ));

  return (
    <div className={s.testMess}>
      <div className={s.header}>Диалоги</div>
      <div className={s.friend}>{NewFriendsArray}</div>
      <div className={s.mess}>{NewMessageArray}</div>
      <div className={s.footer}><ButtonsDialogsContainer/></div>
    </div>
  );
};

export default TestMessenger;

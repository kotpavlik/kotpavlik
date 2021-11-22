import React from 'react';
import s from './FriendDialog.module.css'

const FriendDialog = (props) => {
return (
    <div className={s.continerFriend}>
<div className={s.friend}>{props.userName}</div>
</div>
);
}

export default FriendDialog ;
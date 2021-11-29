import React from 'react';
import s from './NameStatus.module.css'

const NameStatus = (props) => {
return (
<div className={s.wraper}>
    <div className={s.userName}>{props.userName}</div>
    <div className={s.status}>{props.status}</div>
</div>
);
}

export default NameStatus ;
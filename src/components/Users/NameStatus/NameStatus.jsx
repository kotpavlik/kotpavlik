import React from 'react';
import s from './NameStatus.module.css'

const NameStatus = (props) => {

return (
<div className={s.wraper}>
    <div className={s.userName}>{props.name}</div>
    <div className={s.status}>{props.status !=null ? props.name :'no satatus'}</div>
</div>
);
}

export default NameStatus ;
import React from 'react';
import s from './Location.module.css'

const Location = (props) => {
return (
<div className={s.wraper}>
    <div className={s.sityName}>Город : {props.sityName??"props.sityName"}</div>
    <div className={s.country}>Страна : {props.country??"props.country"}</div>  
</div>
);
}

export default Location ;

// <div className={s.country}>Страна : {props.country??"props.country"}</div>  - когда появятся пропсы оно их подставит

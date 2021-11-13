import React from 'react';
import Review from './Review/Review';
import s from './Specifications.module.css';


const Specifications = (props) => {  
    debugger;  
return (
<div className={s.specifications}>
    <div className ={s.name}> Название : {props.name}</div>
    <div className ={s.comp}>Состав : {props.comp}</div>
    <div className ={s.price}>Цена : {props.price} BYN.</div>
    <Review/>
    <button type ="actions" className={s.bye}>купить</button>
</div>
);
}

export default Specifications ;
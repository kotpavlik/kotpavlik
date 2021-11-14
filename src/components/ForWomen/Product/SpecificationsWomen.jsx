import React from 'react';
import s from './SpecificationsWomen.module.css';


const SpecificationsWomen = (props) => {  
return (
<div className={s.specifications}>
    <div className ={s.name}> Название : {props.nameFW}</div>
    <div className ={s.comp}>Состав : {props.compFW}</div>
    <div className ={s.price}>Цена : {props.priceFW} BYN.</div>
    <button type ="actions" className={s.bye}>купить</button>
</div>
);
}

export default SpecificationsWomen ;
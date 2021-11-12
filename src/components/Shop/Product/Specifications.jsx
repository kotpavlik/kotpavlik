import React from 'react';
import s from './Specifications.module.css'

const Specifications = () => {
return (
<div className={s.specifications}>
    <div className ={s.name}>Название : Панама</div>
    <div className ={s.comp}>Состав : 50% хлопок 25% плащевка 25% вискоза</div>
    <div className ={s.price}>Цена : 60 BYN.</div>
    <button type ="actions" className={s.bye}>купить</button>
</div>
);
}

export default Specifications ;
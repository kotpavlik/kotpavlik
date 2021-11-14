import React from 'react';
import s from './SpecificationsMen.module.css';


const SpecificationsMen = (props) => {  
     
return (
<div className={s.specifications}>
    <div className ={s.nameFm}> Название : {props.nameFm}</div>
    <div className ={s.compFm}>Состав : {props.compFm}</div>
    <div className ={s.priceFm}>Цена : {props.priceFm} BYN.</div>
    <button type ="actions" className={s.bye}>купить</button>
</div>
);
}

export default SpecificationsMen ;
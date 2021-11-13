import React from 'react';
import s from './MenuHead.module.css'

const MenuHead = () => {
return (
<div className={s.mhead}>
    <div className={`${s.headName} ${s.shop}`}>магазин</div>
    <div className={`${s.headName} ${s.new}`}>новинки</div>
    <div className={`${s.headName} ${s.men}`}>мужчинам</div>
    <div className={`${s.headName} ${s.women}`}>женщинам</div>
    <div className={`${s.headName} ${s.about}`}>он нас</div>
</div>
);
}

export default  MenuHead;
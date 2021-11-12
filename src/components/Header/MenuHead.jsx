import React from 'react';
import s from './MenuHead.module.css'

const MenuHead = () => {
return (
<div className={s.mhead}>
    <div className={s.shop}>магазин</div>
    <div className={s.new}>новинки</div>
    <div className={s.man}>мужчинам</div>
    <div className={s.woman}>женщинам</div>
    <div className={s.about}>он нас</div>
</div>
);
}

export default  MenuHead;
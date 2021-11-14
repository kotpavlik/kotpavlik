import React from 'react';
import s from './PhGalery.module.css'

const PhGalery = () => {
return (
<div className={s.phg}>
    <div className={s.pic}>
        <img src="aboutUsPhoto/1.jpg" alt="" />
    </div>
    <div className={s.pic1}>
        <img src="aboutUsPhoto/2.jpg" alt="" />
    </div>
    <div className={s.pic2}>
        <img src="aboutUsPhoto/3.jpg" alt="" />
    </div>
    <div className={s.pic3}>
        <img src="aboutUsPhoto/4.jpg" alt="" />
    </div>
    <div className={s.pic4}>
        <img src="aboutUsPhoto/5.jpg" alt="" />
    </div>
    <div className={s.pic5}>
        <img src="aboutUsPhoto/6.jpg" alt="" />
    </div>
    <div className={s.pic6}>
        <img src="aboutUsPhoto/7.jpg" alt="" />
    </div>
    <div className={s.pic7}>
        <img src="aboutUsPhoto/8.jpg" alt="" />
    </div>
    <div className={s.pic8}>
        <img src="aboutUsPhoto/9.jpg" alt="" />
    </div>
</div>
);
}

export default PhGalery ;
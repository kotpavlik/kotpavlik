import React from 'react';
import s from './PhGalery.module.css'
import PhotoGalery1 from '../../assets/aboutUsPhoto/1.jpg' 
import PhotoGalery2 from '../../assets/aboutUsPhoto/2.jpg' 
import PhotoGalery3 from '../../assets/aboutUsPhoto/3.jpg' 
import PhotoGalery4 from '../../assets/aboutUsPhoto/4.jpg' 
import PhotoGalery5 from '../../assets/aboutUsPhoto/5.jpg' 
import PhotoGalery6 from '../../assets/aboutUsPhoto/6.jpg' 
import PhotoGalery7 from '../../assets/aboutUsPhoto/7.jpg' 
import PhotoGalery8 from '../../assets/aboutUsPhoto/8.jpg' 
import PhotoGalery9 from '../../assets/aboutUsPhoto/9.jpg' 

const PhGalery = () => {
return (
<div className={s.phg}>
    <div className={s.pic}>
        <img src = {PhotoGalery1} alt="" />
    </div>
    <div className={s.pic1}>
        <img src={PhotoGalery2} alt="" />
    </div>
    <div className={s.pic2}>
        <img src={PhotoGalery3} alt="" />
    </div>
    <div className={s.pic3}>
        <img src= {PhotoGalery4} alt="" />
    </div>
    <div className={s.pic4}>
        <img src={PhotoGalery5} alt="" />
    </div>
    <div className={s.pic5}>
        <img src={PhotoGalery6} alt="" />
    </div>
    <div className={s.pic6}>
        <img src={PhotoGalery7} alt="" />
    </div>
    <div className={s.pic7}>
        <img src={PhotoGalery8} alt="" />
    </div>
    <div className={s.pic8}>
        <img src={PhotoGalery9} alt="" />
    </div>
</div>
);
}

export default PhGalery ;
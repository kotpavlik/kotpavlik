import React from 'react';
import preloader from '../assets/logo/731.gif'
import s from './Preloader.module.css'

const Preloader = (props) => {
return (
<div className={s.preloader}>
    <img src={preloader}/>
    </div>
);
}

export default Preloader ;
import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
return (
<div className={s.footer}>
    <div className={s.inst}><a href="https://www.instagram.com/pinkpunk_brand/">Pink Punk instagram</a></div>
    <div className={s.phone}>MTS +375(33)916-47-30</div>
    <div className={s.maps}>Карта</div>
    <div className={s.yearsStart}>2021 y.o.</div>
</div>
);
}

export default Footer ;
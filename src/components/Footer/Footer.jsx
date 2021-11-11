import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
return (
<div className={s.footer}>
    <div className="inst"><a href="https://www.instagram.com/pinkpunk_brand/">Pink Punk instagram</a></div>
    <div className="phone">+375(33)916-47-30</div>
    <div className="maps">карта</div>
    <div className="yearsStart">2021</div>
</div>
);
}

export default Footer ;
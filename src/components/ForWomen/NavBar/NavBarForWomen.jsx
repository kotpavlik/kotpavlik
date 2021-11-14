import React from 'react';
import s from './NavBarForWomen.module.css'

const NavBarForWomen  = () => {
return (
<div className={s.navBar}>
    <div className ={s.name}>штаны</div>
    <div className ={s.name} >футболки</div>
    <div className = {s.name}>рубашки</div>
    <div className = {s.name}>куртки</div>
    <div className={s.name}>худи</div>
    <div className={s.name}>головные уборы</div>
    <div className={s.name}>платья</div>
</div>
);
}

export default NavBarForWomen;
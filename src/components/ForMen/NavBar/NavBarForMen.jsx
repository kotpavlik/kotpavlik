import React from 'react';
import s from './NavBarForMen.module.css'

const NavBarForMen  = () => {
return (
<div className={s.navBar}>
    <div className ={s.name}>штаны</div>
    <div className ={s.name} >футболки</div>
    <div className = {s.name}>рубашки</div>
    <div className = {s.name}>куртки</div>
    <div className={s.name}>худи</div>
    <div className={s.name}>головные уборы</div>
</div>
);
}

export default NavBarForMen;
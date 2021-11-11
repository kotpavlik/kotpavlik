import React from 'react';
import s from './NavBar.module.css'

const NavBar  = () => {
return (
<div className={s.navBar}>
    <div className = 'pants'>штаны</div>
    <div className = 't-shirts'>футболки</div>
    <div className = 'dresses'>платья</div>
    <div className = 'shirts'>рубашки</div>
    <div className = 'jacket'>куртки</div>
    <div className="hoodies">худи</div>
    <div className="coats">платья</div>
    <div className="headdress">головные уборы</div>
</div>
);
}

export default NavBar;
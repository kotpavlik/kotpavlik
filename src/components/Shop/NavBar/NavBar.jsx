import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar  = () => {
return (
<div className={s.navBar}>
    <div className ={s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/pants">штаны</NavLink></div>
    <div className ={s.name} ><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/t-sirts">футболки</NavLink></div>
    <div className = {s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/dresses">платья</NavLink></div>
    <div className = {s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/shirts">рубашки</NavLink></div>
    <div className = {s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/jackets">куртки</NavLink></div>
    <div className={s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/hoodies">худи</NavLink></div>
    <div className={s.name}><NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/coats">плащи</NavLink></div>
    <div className={s.name}><NavLink clcassName={({isActive})=>isActive ? s.activeLink : ' '} to="/shop/headdresses">головные уборы</NavLink></div>
</div>
);
}
 
export default NavBar;
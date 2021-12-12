import React from "react";
import { NavLink } from "react-router-dom";
import s from "./MenuHead.module.css";

const MenuHead = () => {
  return (
    <div className={s.mhead}>
      <div className={`${s.headName} ${s.shop}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/" >магазин</NavLink>
      </div>
      <div className={`${s.headName} ${s.new}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}  to="/new">новинки</NavLink>
      </div>
      <div className={`${s.headName} ${s.men}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}  to="/formen">мужчинам</NavLink>
      </div>
      <div className={`${s.headName} ${s.women}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}  to="/forwomen">женщинам</NavLink>
      </div>
      <div className={`${s.headName} ${s.about}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}   to="/profile/*">о нас</NavLink>
      </div>
    </div>
  );
};

export default MenuHead;

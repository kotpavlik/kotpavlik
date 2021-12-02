import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Logo.module.css";
import PPLogo from '../assets/logo/10.png'

const Logo = () => {
  return (
    <div className={s.logotype}>
      <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}  to="/mess">
        <img className={s.logo} src={PPLogo} alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;

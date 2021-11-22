import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={s.logotype}>
      <NavLink className={({isActive})=>isActive ? s.activeLink : ' '}  to="/mess">
        <img className={s.logo} src="/logo/10.png" alt="" />
      </NavLink>
    </div>
  );
};

export default Logo;

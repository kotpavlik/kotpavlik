import React from "react";
import { NavLink } from "react-router-dom";
import s from "./UsersHead.module.css";

const UsersHead = () => {
  return (
    <div className={s.mheadUsers}>
      <div className={`${s.headNameUsers} ${s.Users}`}>
        <NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to="/users" >пользователи</NavLink>
      </div>
      </div>
      );
      };

      export default UsersHead ;
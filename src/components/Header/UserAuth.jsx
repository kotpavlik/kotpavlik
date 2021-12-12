import React from 'react';
import s from './UserAuth.module.css'
import { NavLink } from "react-router-dom";

 const UserAuth = (props) => {
    return (
        <div className={s.userAuth}>
            {props.isAuth ? props.login :
            <NavLink className={({isActive})=>isActive ? s.activeLink : ' '} to='/login'> пользователь </NavLink>
 }
        </div>
    );
};

export default UserAuth ;

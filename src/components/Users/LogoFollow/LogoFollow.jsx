import React from "react";
import s from "./LogoFollow.module.css";
import userNullPhoto from "../../assets/logo/pngegg.png";
import { NavLink } from "react-router-dom";

const LogoFollow = (props) => {
  return (
    <div className={s.wraper}>
      <div className={s.photoContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : " ")}
          to={"/profile/" + props.id}
        >
          <img
            src={props.photos != null ? props.photos : userNullPhoto}
            alt="no photo"
          />
        </NavLink>
      </div>
      <div className={s.buttonContainer}>
      {props.followed ? 
      (<button onClick={() => {props.toggleFollow(props.id);}} className={s.follow}>follow</button>) 
      : 
      (<button onClick={() => {props.toggleFollow(props.id); }} className={s.unfollow}>unfollow</button>)}
      </div>
    </div>
  );
};

export default LogoFollow;

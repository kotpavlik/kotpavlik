import React from "react";
import s from "./Users.module.css";
import Location from "./Location/Location";
import LogoFollow from "./LogoFollow/LogoFollow";
import NameStatus from "./NameStatus/NameStatus";


const Users = (props) => {

    let LogoFollowArrow = props.Users.map(u => <LogoFollow toggleFollow={props.toggleFollow} id={u.id} followed={u.followed} urlPhoto={u.urlPhoto } key={u.id}/>);
    let NameStatusArrow = props.Users.map(u => <NameStatus userName={u.userName} status={u.status} key={u.id}/>);
    let LocationArrow = props.Users.map(u => <Location sityName={u.locationName.sityName} country={u.locationName.country} key={u.id}/>);
  return (
      <div className={s.wraper}>
      <div className={s.grid1}>Users</div>
      <div className={s.grid2}>{LogoFollowArrow}</div>
      <div className={s.grid3}>{NameStatusArrow}</div>
      <div className={s.grid4}>{LocationArrow}</div>

      </div>
  )
  
};

export default Users;

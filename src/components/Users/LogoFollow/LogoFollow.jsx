import React from 'react';
import s from './LogoFollow.module.css'

const LogoFollow = (props) => {
    debugger;
return (
<div className={s.wraper}>
    <div className={s.photoContainer}> <img src={props.urlPhoto} alt="no photo" /></div>
    <div className={s.buttonContainer}> 
    {props.followed
    ? <button onClick={()=>{props.toggleFollow(props.id)}} className={s.follow}>follow</button>
    : <button onClick={()=>{props.toggleFollow(props.id)}} className={s.unfollow}>unfollow</button>}
    
    </div>
</div>
);
}

export default LogoFollow ;
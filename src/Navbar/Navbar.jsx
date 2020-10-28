import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import PhotoFriends from './PhotoFriends/PhotoFriends';


const Navbar = (props) => {

let friendsElements = 
props.photofriends.photo.map (f => <PhotoFriends photo={f.photo}/>);

    return (
      <div className={s.nav}>
      <div className={s.item}>
        <NavLink to='/content' activeClassName={s.active} >content</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/navmassage' activeClassName={s.active} >massages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/navcard' activeClassName={s.active} >card</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='/navmedia' activeClassName={s.active} >media</NavLink>
        </div>
        <div className={s.itemfr}>
        <NavLink to ='/friends' activeClassName={s.active}>Friends</NavLink>
        {friendsElements}
        </div> 
    </div>
    )

}
export default Navbar ;


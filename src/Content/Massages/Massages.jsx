import React from 'react';
import s from './Massages.module.css'

const Massages = (props) => {
  
  return (
    <div className={s.mass}>
      <img src = {'../../assets/img/avatar.jpg'}/>
{props.message}
<div>
  <span>like</span> {props.likesCount}
</div>
    </div>

  )

}
export default Massages;


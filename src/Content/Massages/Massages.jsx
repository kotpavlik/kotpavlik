import React from 'react';
import s from './Massages.module.css'

const Massages = (props) => {
  
  return (
    <div className={s.mass}>
      <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/41691088_321004341993439_8383276055800053760_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=c3wiZbBmDl8AX9hnG75&_nc_ht=scontent-waw1-1.xx&oh=50c0a1738d235ab57580db5fbe3a73b7&oe=5F9F5F3C" />
{props.message}
<div>
  <span>like</span> {props.likesCount}
</div>
    </div>

  )

}
export default Massages;


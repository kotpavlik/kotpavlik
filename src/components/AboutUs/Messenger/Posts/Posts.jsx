import React from 'react';
import s from './Posts.module.css'
import UserNullLogo from '../../../assets/logo/pngegg.png'

const Posts = (props) => {


return (
<div className={s.posts}>
<div className={s.avatar}><img src={UserNullLogo} /> </div>
<div className={s.post}> {props.post} </div>
<div className={s.like}><span >like</span> {props.like}</div>
</div>
);
}

export default Posts ;
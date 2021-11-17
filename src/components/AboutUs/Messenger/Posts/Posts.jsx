import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {
return (
<div className={s.posts}>
<div className={s.avatar}><img src="/aboutUsPhoto/1.jpg" alt="" /> </div>
<div className={s.post}> {props.post} </div>
<div className={s.like}><span>like</span> {props.like}</div>
</div>
);
}

export default Posts ;
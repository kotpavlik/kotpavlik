import React from 'react';
import s from './PhotoFriends.module.css'

const PhotoFriends = (props) => {
    return (
        <div className={s.photofriends}>
            <img src= { props.photo} />
        </div>

    )
}
 export default PhotoFriends ;

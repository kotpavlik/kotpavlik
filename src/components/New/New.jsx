import React from 'react';
import s from './New.module.css'
import News from './News/News';
import News2 from './News2/News2';
import PhotoNews from './PhotoNews/PhotoNews';
import PhotoNews2 from './PhotoNews2/PhotoNews2';



const New = () => {
return (
    <div className={s.new}>
        <PhotoNews/> 
        <News/> 
        <News2/>
        <PhotoNews2/>
    </div>
);
}

export default New ;
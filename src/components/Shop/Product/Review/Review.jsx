import React from 'react';
import s from './Review.module.css';

const Review = () => {
return (
    <div className={s.textReview}>
    <textarea className={s.text} name="text" type="num" placeholder="напиши название" ></textarea>
    <div className={s.buttReview}>
        <button className={s.bye}>send</button>
        <button className={s.bye}>like</button>
    </div>
    </div>
);
}

export default Review ;
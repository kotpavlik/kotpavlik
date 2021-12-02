import React from "react";
import s from "./PhotoNews.module.css";
import AllPhotosProduct1 from '../../assets/productPhoto/9.jpg'
import AllPhotosProduct2 from '../../assets/productPhoto/6.jpg'
import AllPhotosProduct3 from '../../assets/productPhoto/2.jpg'
import AllPhotosProduct4 from '../../assets/productPhoto/5.jpg'
import AllPhotosProduct5 from '../../assets/productPhoto/7.jpg'
import AllPhotosProduct6 from '../../assets/productPhoto/8.jpg'

const PhotoNews = () => {
  return (
    <div className={s.newsPhoto}>
      <div className={`${s.imgItem} ${s.ph1}`}>
        <img src={AllPhotosProduct1} />
      </div>
      <div className={`${s.imgItem} ${s.ph2}`}>
        <img src={AllPhotosProduct2} />
      </div>
      <div className={`${s.imgItem} ${s.ph3}`}>
        <img src={AllPhotosProduct3} />
      </div>
      <div className={`${s.imgItem} ${s.ph4}`}>
        <img src={AllPhotosProduct4} />
      </div>
      <div className={`${s.imgItem} ${s.ph5}`}>
        <img src={AllPhotosProduct5} />
      </div>
      <div className={`${s.imgItem} ${s.ph6}`}>
        <img src={AllPhotosProduct6} />
      </div>
    </div>
  );
};

export default PhotoNews;

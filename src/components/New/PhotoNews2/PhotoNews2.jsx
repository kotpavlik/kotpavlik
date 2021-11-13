import React from "react";
import s from "./PhotoNews2.module.css";

const PhotoNews2 = () => {
  return (
    <div className={s.newsPhoto}>
      <div className={`${s.imgItem} ${s.ph1}`}>
        <img className={s.img1} src="productPhoto/9.jpg" alt="" />
      </div>
      <div className={`${s.imgItem} ${s.ph2}`}>
        <img className={s.img1} src="productPhoto/6.jpg" alt="" />
      </div>
      <div className={`${s.imgItem} ${s.ph3}`}>
        <img className={s.img1} src="productPhoto/2.jpg" alt="" />
      </div>
      <div className={`${s.imgItem} ${s.ph4}`}>
        <img className={s.img1} src="productPhoto/5.jpg" alt="" />
      </div>
      <div className={`${s.imgItem} ${s.ph5}`}>
        <img className={s.img1} src="productPhoto/7.jpg" alt="" />
      </div>
      <div className={`${s.imgItem} ${s.ph6}`}>
        <img className={s.img1} src="productPhoto/8.jpg" alt="" />
      </div>
    </div>
  );
};

export default PhotoNews2;

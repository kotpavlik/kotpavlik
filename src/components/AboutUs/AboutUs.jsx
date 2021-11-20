import React from "react";
import s from "./AboutUs.module.css";
import Messenger from "./Messenger/Messenger";
import PhGalery from "./PhGalery/PhGalery";
import TextAU from "./Text/TextAU";

const AboutUs = (props) => {

  return (
    <div className={s.aboutUs}>
      <div className={s.headUs}>Pink Punk</div>
      <PhGalery/>
      <TextAU/>
      <Messenger  PostsArray={props.about} addPost={props.addPost} NewPostChange={props.NewPostChange}/>
      <div className={s.maps}><img src="aboutUsPhoto/maps.jpg" alt="" /></div>
    </div>
  );
};

export default AboutUs;

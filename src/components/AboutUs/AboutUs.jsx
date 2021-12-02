import React from "react";
import s from "./AboutUs.module.css";
import MessengerContainer from "./Messenger/MessengerContainer";
import PhGalery from "./PhGalery/PhGalery";
import TextAU from "./Text/TextAU";
import Maps from '../assets/aboutUsPhoto/maps.jpg'

const AboutUs = (props) => {

  return (
    <div className={s.aboutUs}>
      <div className={s.headUs}>Pink Punk</div>
      <PhGalery/>
      <TextAU/>
      <MessengerContainer  store={props.store}/>
      <div className={s.maps}><img src={Maps} /></div>
    </div>
  );
};

export default AboutUs;

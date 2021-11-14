import React from "react";
import s from "./AboutUs.module.css";
import Messenger from "./Messenger/Messenger";
import PhGalery from "./PhGalery/PhGalery";
import TextAU from "./Text/TextAU";

const AboutUs = () => {
  return (
    <div className={s.aboutUs}>
      <div className={s.headUs}>Pink Punk</div>
      <PhGalery/>
      <TextAU/>
      <Messenger/>
    </div>
  );
};

export default AboutUs;

import React from "react";
import s from "./AboutUs.module.css";
import MessengerContainer from "./Messenger/MessengerContainer";
import PhGalery from "./PhGalery/PhGalery";
import TextAU from "./Text/TextAU";
import Preloader from "../Functional/Preloader";
import Job from "../assets/logo/job.png";
import Relax from "../assets/logo/relax.png";
import AboutStatus from "./AboutStatus.jsx/AboutStatus";
import AboutStatusHooks from "./AboutStatus.jsx/AboutStatusHooks";

const AboutUs = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.aboutUs}>
      <div className={s.headUs}>Pink Punk</div>
      <PhGalery />
      <TextAU />
      <MessengerContainer />
      <div className={s.container}>
        <div className={s.wraperLogo}>
          <div className={s.avatar}>
            <img src={props.profile.photos.large} />
          </div>
        </div>

        <div>
          <div className={s.name}>Имя: {props.profile.fullName}</div>
          <AboutStatusHooks
            status={props.status}
            updateUserStatusThunk={props.updateUserStatusThunk}
          />
          <div className={s.jobwrapper}>
            {props.profile.lookingForAJob ? (
              <img className={s.serchJob} src={Job} />
            ) : (
              <img className={s.serchJob} src={Relax} />
            )}
          </div>
        </div>

        <div className={s.wraper}>
          <div className={s.facebook}>
            Facebook:{" "}
            <a href={`https://${props.profile.contacts.facebook}`}>
              {props.profile.contacts.facebook}
            </a>
          </div>
          <div className={s.twitter}>
            Twitter:{" "}
            <a href={`https://${props.profile.contacts.twitter}`}>
              {props.profile.contacts.twitter}
            </a>
          </div>
          <div className={s.github}>
            Github:{" "}
            <a href={`https://${props.profile.contacts.github}`}>
              {props.profile.contacts.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

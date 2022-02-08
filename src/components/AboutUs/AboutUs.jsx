import React, { useState } from "react";
import s from "./AboutUs.module.css";
import MessengerContainer from "./Messenger/MessengerContainer";
import PhGalery from "./PhGalery/PhGalery";
import TextAU from "./Text/TextAU";
import Preloader from "../Functional/Preloader";
import AboutStatus from "./AboutStatus.jsx/AboutStatus";
import AboutStatusHooks from "./AboutStatus.jsx/AboutStatusHooks";
import userNullPhoto from "../../components/assets/logo/pngegg.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";


const AboutUs = React.memo(props => { // React.memo сначала проверяет DOM и сравнивает его с VirtualDOM смотрит не поменялось ли чего

  let [editModeProfile,setEditModeProfile] = useState(true); // хук для переключения между редактированием профиля
  

  let activetatedEditModeProfile = () => {
    setEditModeProfile(false)  // работа с этим хуком 
  }
 
  let deactivatedEditModeProfile  = () =>{
    setEditModeProfile(true) // работа с этим хуком 
  }

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => { // добавляем фото и отправляем файл так 
    if (e.target.files.length) { // если е - переданое значение имеет длину то  
      props.savePhotoThunk(e.target.files[0]); // сетаем массив объектов с первоначальной длиной [0]
    }
  };

  const onSubmit = async (values,{setSubmitting}) => { // прокидываем в ProfileDataForm , можно было и непрокидывать 
    await props.saveProfileDataThunk( // асинхронно всё работает, через console.log можно проверять
      values.fullName,
      values.lookingForAJob,
      values.lookingForAJobDescription,
      values.aboutMe,
      values.contacts)
     await setSubmitting(false);
     await deactivatedEditModeProfile(); // с помощью хука создали и засунули сюда 
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
            <img src={props.profile.photos.large || userNullPhoto} />
            {props.isOwner && (
              <input
                className={s.inp}
                id="file"
                type={"file"}
                onChange={onMainPhotoSelected}
              />
            )}
           {props.isOwner && <label className={s.label} htmlFor="file">изменить фото</label> }
          </div>
        </div>
        <div>
          <div className={s.name}>Имя: {props.profile.fullName}</div>
          <AboutStatusHooks
            status={props.status}
            updateUserStatusThunk={props.updateUserStatusThunk}
          />
        </div>
        { editModeProfile
        ? <ProfileData 
        profile={props.profile} 
        isOwner={props.isOwner}
        activetatedEditModeProfile = {activetatedEditModeProfile}
        />
        : <ProfileDataForm 
        profile={props.profile}
        onSubmit={onSubmit}
        />}
      </div>
      
    </div>
  );
});

export default AboutUs;

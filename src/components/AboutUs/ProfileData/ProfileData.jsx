import React from "react";
import s from "./ProfileData.module.css"

const ProfileData = React.memo(props => {


  return (
      
    <div className={s.wraper}>
       <div className={s.inputData}> <b>полное имя : </b>{props.profile.fullName}</div>
      <div className={s.inputData}><b>ищу работу :</b> {props.profile.lookingForAJob ? "да" : "нахуй надо"}</div>
      <div className={s.inputData}><b>что ищу :</b> {props.profile.lookingForAJobDescription}</div>
      <div className={s.inputData}><b>контакты :</b>
      {Object.keys(props.profile.contacts)  // Object.keys - пробегается по масиву и делает из объектов строки с ключём и значением 
      .map (key=> { // далее мапимся и отрисовываем все объекты в теге Contact
      return <Contact  key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>} // key={key} - что бы не ругался 
      //key -  это и будет ключ contactTitle по которому мы мапимся, а contactValue={props.profile.contacts[key]} - а значение мы берем
      // у каждого ключа в масиве и сопоставляем их 
      )} </div>
     {props.isOwner &&  
     <div className={s.wrapButton}>
        <button className={s.edit} onClick={props.activetatedEditModeProfile}>изменить</button> 
        </div>}
    </div>
  );
});

const Contact =({contactTitle,contactValue}) => {
    return (
        <div className={s.dataSites}>
            <b>{contactTitle}</b> : <a href={contactValue}>{contactValue}</a>
        </div>
    )
}
export default ProfileData;

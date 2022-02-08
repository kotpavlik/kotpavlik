import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./ProfileDataForm.module.css";
import * as yup from "yup";





const ProfileDataForm = React.memo(props => {



  const validationsSchema = yup.object().shape({
    fullName: yup.string().typeError("должно быть строкой"),
    lookingForAJobDiscription: yup.string().typeError("должно быть строкой"),
    
  });

  const initialValues = {
    fullName: props.profile.fullName,
    lookingForAJob: props.profile.lookingForAJob,
    lookingForAJobDescription: props.profile.lookingForAJobDescription,
    contacts: {
      facebook: props.profile.contacts.facebook,
      instagram: props.profile.contacts.instagram,
      twitter: props.profile.contacts.twitter,
      website: props.profile.contacts.website,
      youtube: props.profile.contacts.youtube,
      mainLink: props.profile.contacts.mainLink,
      github: props.profile.contacts.github,
      vk:props.profile.contacts.vk
    },
    aboutMe:props.profile.aboutMe,
  };
  

  return (
    <div className={s.wraper}>

      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit = {props.onSubmit}
        validationSchema={validationsSchema}
      
      >

        {({ errors, touched, isValid, dirty, status }) => (
          <Form>

            <div>
              <label htmlFor="fullName" className={s.fullName}>
                {" "}
                <b>полное имя </b>
              </label>
              <br />
              <Field
                className={s.inputLogForm}
                type={`name`}
                name={`fullName`}
                placeholder={"fullName"}

              />
              {touched.fullName && errors.fullName && (
                <div className={s.error}>{errors.fullName}</div>
              )}
            </div>

            <div>
              <label htmlFor="aboutMe" className={s.fullName}>
                {" "}
                <b> обо мне </b>
              </label>
              <br />
              <Field
                className={s.inputLogForm}
                type={`name`}
                name={`aboutMe`}
                placeholder={"aboutMe"}
                
              />
              {touched.fullName && errors.fullName && (
                <div className={s.error}>{errors.fullName}</div>
              )}
            </div>

            <div className={s.checkboxWrap}>
              <label htmlFor="lookingForAJob" className={s.lookingForAJob}>
                <b>ищу работу</b>
              </label>
              <Field
                className={s.checkbox}
                type={`checkbox`}
                name={`lookingForAJob`}
              />
            </div>

            <div>
              <label
                htmlFor="lookingForAJobDescription"
                className={s.lookingForAJobDescription}
              >
                <b>что ищу :</b>
                <br />
              </label>

              <Field
                className={s.inputLogForm}
                type={`text`}
                name={`lookingForAJobDescription`}
                placeholder={"lookingForAJobDescription"}
                
              />
            </div>
            <br />
            <div className={s.contacts}>
              <b>контакты :</b>
              {
              Object.keys(props.profile.contacts).map((key) => {
                return (
                  <div key={key}>

                  <label htmlFor="contacts">
                    <b>{key}</b> : {props.profile.contacts[key] === null ? "тут сидит ебучий null" : props.profile.contacts[key] }
                  </label>
                  <Field
                    className={s.inputLogForm}
                    type={`url`}
                    name={`contacts.` + key}
                    id={key}
                    placeholder=""
                    
                  />
                  <br />
                </div>
                );
              })
             }
            </div>
             
            <div className={s.wrapButton}>
              <button
                className={s.edit}
                disabled={!isValid && !dirty}
                type="submit"
              >
                сохранить
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    
  );
});
export default ProfileDataForm;





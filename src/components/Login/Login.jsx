import React from "react";
import s from "./Login.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const Login = (props) => {
  const validationsSchema = yup.object().shape({
    login: yup
      .string()
      .typeError("должно быть строкой")
      .required("обязательно"),
    password: yup
      .string()
      .typeError("должно быть строкой")
      .required("обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "пароли не совпадают")
      .required("Обязательно"),
  });
  return (
    <div className={s.loginWraper}>
      <div className={s.formStyles}>
        <Formik
          initialValues={{
            login: "",
            password: "",
            confirmPassword: "",
          }}
          validateOnBlur
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 10);
          }}
          validationSchema={validationsSchema} 
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className={s.form}>
              <div>
                <label htmlFor={`login`}>логин</label>
                <br />
                <input
                  className={s.inputLogForm}
                  type={`text`}
                  name={`login`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                />
                {touched.login && errors.login && (
                <div className={s.error}>{errors.login}</div>
              )}
              </div>
              
              <div>
                <label htmlFor={`password`}>пароль</label>
                <br />
                <input
                  className={s.inputLogForm}
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
                {touched.password && errors.password && (
                <div className={s.error}>{errors.password}</div>
              )}
              <div>
                <label htmlFor={`confirmPassword`}>повторите пароль</label>
                <br />
                <input
                  className={s.inputLogForm}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <div className={s.error}>{errors.confirmPassword}</div>
              )}
              <button
                className={s.buttonLog}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={`submit`}
              >
                Отправить
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

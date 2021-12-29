import React from "react";
import s from "./Login.module.css";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { login } from "../../redux/Auth-Reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const validationsSchema = yup.object().shape({
    email: yup
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

  const initialValues = {
    email: "",
    password: "",
    rememberMe: "",
    confirmPassword: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    props.login(values.email, values.password, values.rememberMe);
    setSubmitting(false);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile/*"}/>
  }
  
  return (
    <div className={s.loginWraper}>
      <div className={s.formStyles}>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={validationsSchema}
        >
          {({ errors, touched, isValid, dirty, status }) => (
            <Form>
              <div className={s.form}>
                <div>
                  <label htmlFor={`email`}>email</label>
                  <br />
                  <Field
                    className={s.inputLogForm}
                    type={`email`}
                    name={`email`}
                    placeholder={"email"}
                  />
                  {touched.email && errors.email && (
                    <div className={s.error}>{errors.email}</div>
                  )}
                </div>

                <div>
                  <label htmlFor={`password`}>пароль</label>
                  <br />
                  <Field
                    className={s.inputLogForm}
                    type={`password`}
                    name={`password`}
                    placeholder={"Password"}
                  />
                  {touched.password && errors.password && (
                    <div className={s.error}>{errors.password}</div>
                  )}
                </div>
                <div>
                  <label htmlFor={`confirmPassword`}>повторите пароль</label>
                  <br />
                  <Field
                    className={s.inputLogForm}
                    type={`password`}
                    name={`confirmPassword`}
                    placeholder={`повторите пароль`}
                  />
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className={s.error}>{errors.confirmPassword}</div>
                )}
              </div>

              <div className={s.rememberMe}>
                <Field
                  className={s.check}
                  type={`checkbox`}
                  name={`rememberMe`}
                />
                <label className={s.checkLabel} htmlFor={`rememberMe`}>
                  запомнить меня
                </label>
              </div>
              
              <div>
                <button
                  className={s.buttonLog}
                  disabled={!isValid && !dirty}
                  type={`submit`}
                >
                  Отправить
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.Auth.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login);

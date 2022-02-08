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
      captcha: yup
      .string()
      .typeError("должно быть строкой")
      
  });
  const initialValues = {
    email: "",
    password: "",
    rememberMe: "",
    confirmPassword: "",
    captcha:""
  };

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    props.login(values.email, values.password, values.rememberMe,values.captcha,setStatus);
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

              <div className={s.errorAPItext}> {status} </div>
                <div className={s.captcha}> 
                {props.CaptchaUrl && <img src={props.CaptchaUrl}/>}
                {props.CaptchaUrl && 
                <div>
                  <label htmlFor={`captcha`}>введи цифры и буквы</label>
                  <br />
                  <Field
                    className={s.inputLogForm}
                    type={`input`}
                    name={`captcha`}
                    placeholder={"captcha"}
                  />
                  {touched.email && errors.email && (
                    <div className={s.error}>{errors.email}</div>
                  )}
                </div>}
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
    isAuth: state.Auth.isAuth,
    CaptchaUrl:state.Auth.CaptchaUrl

  }
}

export default connect(mapStateToProps, { login })(Login);

// import React from "react";
// import s from "./Login.module.css";
// import { Field, Form, Formik } from "formik";  - качаем библиотеку formik и используем ее инструменты 
// import * as yup from "yup"; - качаем библиотеку yup для валидаций 
// import { connect } from "react-redux"; - создаст нам контейнерную компоненту 
// import { login } from "../../redux/Auth-Reducer";
// import { Navigate } from "react-router-dom";

// const Login = (props) => { - ебал я рот классовую компаненту когда тут и функциональная подходит 
//   const validationsSchema = yup.object().shape({ - все валидации описываем в этой переменной в которой создаём обънет и погнали 
//     email: yup - описываем email
//       .string() - это строка 
//       .typeError("должно быть строкой") - говорим что должно быть строкой а не числом 
//       .required("обязательно"), - заполнено обязательно 
//     password: yup
//       .string()
//       .typeError("должно быть строкой")
//       .required("обязательно"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password")], "пароли не совпадают") - .oneOf метод совпадения [yup.ref("password")] ссылка на объект 
//       .required("Обязательно"),
//   });

//   const initialValues = {  - инициализируемые значения 
//     email: "", 
//     password: "",
//     rememberMe: "",
//     confirmPassword: "",
//   };

//   const onSubmit = (values, { setSubmitting, setStatus }) => { - описываем функцию onSubmit. setSubmitting - булево.setStatus - метод который берёт статус запрашиваемого API
//     props.login(values.email, values.password, values.rememberMe,setStatus); - прокидываем в санку все нужные значения 
//     setSubmitting(false); - закрываем setSubmitting принудительно и обязательно 
//   };

//   if (props.isAuth) {
//     return <Navigate to={"/profile/*"}/> - если инициализирован то ререндерит тебя на {"/profile/*"
//   }
  
//   return (
//     <div className={s.loginWraper}>
//       <div className={s.formStyles}>
//         <Formik   - оборачиваем все формы Formik ом
//           initialValues={initialValues} и в параметры прокидываем всё чем он будет пользоваться 
//           validateOnBlur
//           onSubmit={onSubmit}
//           validationSchema={validationsSchema}
//         >
//           {({ errors, touched, isValid, dirty, status }) => ( - создаём ананимную стрелочную функцию и прокидываем в параметры все нужные нам свойства читать в  yup и formik документации
//             <Form> - ну а теперь ещё вот этим оборачиваем если хотим использовать короткую запись и Field
//               <div className={s.form}>
//                 <div>
//                   <label htmlFor={`email`}>email</label> - то что будет написано над формой или рядом 
//                   <br />
//                   <Field - собственно сама форма 
//                     className={s.inputLogForm} - стили формы 
//                     type={`email`} - тип формы 
//                     name={`email`} - имя формы должно совпадать с значением initialValues
//                     placeholder={"email"} - то что будет как бы подсказываеть что тебе написать в форме 
//                   />
//                   {touched.email && errors.email && ( - если email в фокусе то ошибка email из typeError и выводим <div className={s.error}>{errors.email}</div>
//                     <div className={s.error}>{errors.email}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor={`password`}>пароль</label>
//                   <br />
//                   <Field
//                     className={s.inputLogForm}
//                     type={`password`}
//                     name={`password`}
//                     placeholder={"Password"}
//                   />
//                   {touched.password && errors.password && (
//                     <div className={s.error}>{errors.password}</div>
//                   )}
//                 </div>
//                 <div>
//                   <label htmlFor={`confirmPassword`}>повторите пароль</label>
//                   <br />
//                   <Field
//                     className={s.inputLogForm}
//                     type={`password`}
//                     name={`confirmPassword`}
//                     placeholder={`повторите пароль`}
//                   />
//                 </div>
//                 {touched.confirmPassword && errors.confirmPassword && (
//                   <div className={s.error}>{errors.confirmPassword}</div>
//                 )}
//               </div>

//               <div className={s.rememberMe}>
//                 <Field - тут уже создаём checkbox
//                   className={s.check}
//                   type={`checkbox`} - тут уже создаём checkbox
//                   name={`rememberMe`}
//                 />
//                 <label className={s.checkLabel} htmlFor={`rememberMe`}> - ну тут всё ясно 
//                   запомнить меня
//                 </label>
//               </div>

//               <div className={s.errorAPItext}> {status} </div> - а вот ёто мы отправляем в санку оно берёт там messanges и передаёт нам какая ошибка прилетает с сервака 

//               <div>
//                 <button - кнопка отправить всё из форм 
//                   className={s.buttonLog}
//                   disabled={!isValid && !dirty} - задисейблить если не завалидирован или если грязный как бомж -нужно глянуть что он имеет ввиду 
//                   type={`submit`} - тип отправить 
//                 >
//                   Отправить
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => { - mapStateToProps соотведственно делаем потому что оборачиваем HOCом connect и прокидываем сюда санку и стейт 
//   return {
//     isAuth: state.Auth.isAuth
//   }
// }

// export default connect(mapStateToProps, { login })(Login);

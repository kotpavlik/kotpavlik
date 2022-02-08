import React from "react";
import s from "./LogoFollow.module.css";
import userNullPhoto from "../../assets/logo/pngegg.png";
import { NavLink } from "react-router-dom";
import AvatarLottie from "../../AnimationLottie/Avatar";

const LogoFollow = (props) => {
  return (
    <div className={s.wraper}>
      <div className={s.photoContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? s.activeLink : " ")}
          to={"/profile/" + props.id}
        >
          <img className={s.logoUsers}
            src={props.photos != null ? props.photos : userNullPhoto}
            alt="no photo"
          />

        </NavLink>
      </div>
      
      <div className={s.buttonContainer}>
        {props.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
              props.follow(props.id);
            }}
            className={s.follow}
          >
            follow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === props.id)}
            onClick={() => {
            props.unfollow(props.id);
            }}
            className={s.unfollow}
          >
            unfollow
          </button>
        )}
      </div>
    </div>
  );
};

export default LogoFollow;

{
  /* <div className={s.buttonContainer}> */
}
{
  /* {props.followed ?  */
} // - если props.followed (true)
// (<button onClick={() => {   - тогда вызываем кнопку с слушателем событий onClick и передаем в параметры стрелочную функцию
// followAPI.deleteUnfollow(props.id)   - вызываем объект followAPI с методом deleteUnfollow и передаём в него props.id
// .then(data => { - в файле API обрабатываем response и передаем сюда только data
// if (data.resultCode == 0 ) { - если возвращается resultCode == 0 то всё ок то
// props.toggleFollow(props.id); - вызываем конект который вызывает экшн криэйтор,вызывает его и передаёт в него параметр
// }
// });

// 15.12.2021 сделали disabled  кнопки, что бы не клацали по ней пока отправляется запрос на сервер и что бы уходил 1
// запрос.
//26 disabled={props.followingInProgress.some(id => id === props.id)} - добавили disabled и сказали что он работает только
// при условии если в массиве followingInProgress id совпадает с той что приходит в пропсах props.id
//28 props.toogleFollowingInProgress(true, props.id); - запускаем колбек который принимает в параметры булево значение и
// id пользователя с которым производиться подписка. Если true то записываем id в массив, оно становиться равной
// с id из строки 28 и дизейблиться, а если false то не дизейблиться

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

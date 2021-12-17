import React from "react";
import s from "./Users.module.css";
import Location from "./Location/Location";
import LogoFollow from "./LogoFollow/LogoFollow";
import NameStatus from "./NameStatus/NameStatus";

const Users = (props) => {
  
  let PagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }

  let LogoFollowArrow = props.users.map((u) => (
    <LogoFollow
      toggleFollow={props.toggleFollow}
      followingInProgress={props.followingInProgress}
      toogleFollowingInProgress={props.toogleFollowingInProgress}
      follow={props.follow}
      unfollow={props.unfollow}
      id={u.id}
      followed={u.followed}
      photos={u.photos.small}
      key={u.id}
    />
  ));
  let NameStatusArrow = props.users.map((u) => (
    <NameStatus name={u.name} status={u.status} key={u.id} />
  ));
  let LocationArrow = props.users.map((u) => <Location key={u.id} />); 

  return (
    <div>
      {
        <div className={s.wraper}>
          <div className={s.grid1}>Users</div>
          <div className={s.grid0}>
            {pages.map((p) => {
              return (
                <div
                  className={`${s.countNoActive} ${
                    props.currentPage === p && s.count
                  }`}
                  onClick={(e) => {
                    debugger
                    props.onPageChange(p);
                  }}
                >
                  {p}
                </div>
              );
            })}
          </div>
          <div className={s.grid2}>{LogoFollowArrow}</div>
          <div className={s.grid3}>{NameStatusArrow}</div>
          <div className={s.grid4}>{LocationArrow}</div>
        </div>
      }
    </div>
  );
};

export default Users;

// Вместо функцианальной компаненты  компоненты создали классовую
// (пересмотреть видосы про ООП- инкапсуляцию,полиморфизм,наследование )
// class Users extends  React.Component { - создали класс который наследуется от объекта React.Component
// constructor (props){ - соотведственно сделали конструктор
// super(props); - унаследовались от React.Component
// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { - подключили npm install axios --save
//     this.props.setUsers (response.data.items); - засетали юзеров из API.Выше сделали get запрос по адресу API
// });
// }

// render () { - отрендерили JSX. МАР закидываем в рендер обязательно

//     this.LogoFollowArrow = this.props.users.map(u => <LogoFollow toggleFollow={this.props.toggleFollow} id={u.id} followed={u.followed} photos={u.photos.small } key={u.id}/>);
//     this.NameStatusArrow = this.props.users.map(u => <NameStatus name={u.name} status={u.status} key={u.id}/>);
//     this.LocationArrow = this.props.users.map(u => <Location  key={u.id}/>);
// дополнительные объекты создаем как свойства главного объекта через this. И пропсы прокидываем через this.Потому что
// эти пропсы сидят у главного объекта
//   return <div> {

//       <div className={s.wraper}>
//       <div className={s.grid1}>Users</div>
//       <div className={s.grid2}>{this.LogoFollowArrow}</div>
//       <div className={s.grid3}>{this.NameStatusArrow}</div>
//       <div className={s.grid4}>{this.LocationArrow}</div>
//       </div>

// }</div>
// }
// }
// export default Users;

// классовая компонента - это компонента у которой обязательно есть метод render, она обязательно должна отрисовать JSX
// componentDidMount() - метод где нужно делать все side effects - логика которую мы прописываем вручную, методы
// отвечающие за логику работы с state и store

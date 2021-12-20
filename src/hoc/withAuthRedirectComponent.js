import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {  // берум state у store 
    return {
        isAuth:state.Auth.isAuth  // именно то что нам надо для создания этого HOC
    }
};


export const withAuthRedirect = (Component) => {  // Это HOC и он в себя принимает компоненту 
    class RedirectComponent extends React.Component {  // классовая компонента, можно использовать функциональную
        render () {
            if (!this.props.isAuth) return <Navigate to="/login"/>; // логика перероутинга если ты не афторизован 
            return <Component {...this.props}/> // ретурниться компонента которая пришла в ХОК и в нее засовываются пропсы 
        }
    }

    let ConectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent); // Оборачиваем ещё одним ХОКом для того
    // что бы прокинуть нужные пропсы в наш ХОК-withAuthRedirect что бы он в свою очередь прокинул их в контейнерную компоненту 

    return ConectedRedirectComponent; // ретурним последнюю обертку 
}

// HOC(Hight Order Component) - это компонента который принимает в себя другую компаненту, создавая 
// для нее обёртку(контейнерную компоненту), добавляет логику или знания и возвращает(ретурнит) нужную компоненту 
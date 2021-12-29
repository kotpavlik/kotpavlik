import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import New from "./components/New/New";
import { Route, Routes } from "react-router";
import TestMessengerContiner from "./components/TestMessenger/TestMessengerContainer";
import ShopContainer from "./components/Shop/ShopContainer";
import ForMenContainer from "./components/ForMen/ForMenContainer";
import ForWomenContainer from "./components/ForWomen/ForWomenContainer";
import UsersContainer from "./components/Users/UsersContainer";
import AboutUsContainer from "./components/AboutUs/AboutUsContainer";
import Login from "./components/Login/Login";
import {initiolizeApp} from './redux/App-Reducer';
import { connect } from "react-redux";
import Preloader from "./components/Functional/Preloader";


class App extends React.Component {  // это компанента.Мы используем только функциональные компоненты, которые принимают в себя props и возвращают разметку jsx.
componentDidMount() {
  this.props.initiolizeApp();
}

render() {
  if(!this.props.initialized) {
  return <Preloader/>
  }
  return (
    <div className={s.wraper}>
      <Header />
      <div className={s.body_wraper}>
        <Routes>
          <Route path="/" element={<ShopContainer/>}/>
          <Route path="/new" element={<New />} />
          <Route path="/formen" element={<ForMenContainer />}/>
          <Route path="/forwomen" element={<ForWomenContainer/>}/>
          <Route path="/profile/:userId" element={<AboutUsContainer/>}/> 
          <Route path="/mess" element={<TestMessengerContiner />}/> 
          <Route path="/users" element = {<UsersContainer/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>   
      </div>
        <Footer /> 
    </div>
  );
}
}

let mapStateToProps = (state) => ({
  initialized:state.AppR.initialized
})

// в App отрисовке используются теги Route и Routes, они нужны для использования NavLink.В Routes должны быть обернуты все теги которые являются Route.
// Route использует атрибуты path="" и  element={здесь пишется тег отрисовки дерева}
export default connect(mapStateToProps,{initiolizeApp})(App);

// из App делаем классовую компоненту припиливаем  к ней 
//  componentDidMount() {
//  this.props.initiolizeApp();
//  }
// и вызываем санку initiolizeApp которая задиспачит криейтор и запустит промис 
// if(!this.props.initialized) {
// return <Preloader/>
// и пишем что пока initialized = false запускаем загрузочник <Preloader/>
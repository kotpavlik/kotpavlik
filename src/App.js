import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import New from "./components/New/New";
import AboutUs from "./components/AboutUs/AboutUs";
import { Route, Routes } from "react-router";
import TestMessengerContiner from "./components/TestMessenger/TestMessengerContainer";
import ShopContainer from "./components/Shop/ShopContainer";
import ForMenContainer from "./components/ForMen/ForMenContainer";
import ForWomenContainer from "./components/ForWomen/ForWomenContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {  // это компанента.Мы используем только функциональные компоненты, которые принимают в себя props и возвращают разметку jsx.


  return (
    <div className={s.wraper}>
      <Header />
      <div className={s.body_wraper}>
        <Routes>
          <Route path="/shop" element={<ShopContainer/>}/>
          <Route path="/new" element={<New />} />
          <Route path="/formen" element={<ForMenContainer />}/>
          <Route path="/forwomen" element={<ForWomenContainer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/> 
          <Route path="/mess" element={<TestMessengerContiner />}/> 
          <Route path="/users" element = {<UsersContainer/>}/>
        </Routes>   
      </div>
      <Footer />
    </div>
  );
}
// в App отрисовке используются теги Route и Routes, они нужны для использования NavLink.В Routes должны быть обернуты все теги которые являются Route.
// Route использует атрибуты path="" и  element={здесь пишется тег отрисовки дерева}
export default App;

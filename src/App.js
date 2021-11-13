import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import New from './components/New/New';
import AboutUs from './components/AboutUs/AboutUs';
import ForMen from './components/ForMen/ForMen';
import ForWomen from './components/ForWomen/ForWomen';


function App() {
  return (
    <div className ={s.wraper} >
      <Header/>
      <div className={s.body_wraper}>
      {/* <Shop/> */}
      <New/>
      <ForMen/>
      <ForWomen/>
      <AboutUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

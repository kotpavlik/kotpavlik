import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import New from './components/New/New';
import AboutUs from './components/AboutUs/AboutUs';
import ForMen from './components/ForMen/ForMen';
import ForWomen from './components/ForWomen/ForWomen';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



function App(props) {
  
  return (
    <BrowserRouter>
    <div className ={s.wraper} >
      <Header/>
      <div className={s.body_wraper}>
      <Routes>
        <Route  path="/shop" element={<Shop productForAll={props.state.ShopPage}/>}/>
        <Route  path="/new" element={<New/>}/>
        <Route  path="/formen" element={<ForMen productForMen={props.state.ForMenPage}/>}/>
        <Route  path="/forwomen" element={<ForWomen productForWomen={props.state.ForWomenPage}/>}/>
        <Route  path="/aboutus" element={<AboutUs about={props.state.AboutUsPage}/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

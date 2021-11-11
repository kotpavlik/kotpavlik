import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className ={s.wraper} >
      <Header/>
      <NavBar/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;

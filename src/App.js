import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className ='app-wraper' >
      <Header/>
      <NavBar/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;

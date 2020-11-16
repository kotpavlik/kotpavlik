import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Componets/Content/Content';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import NavCard from './Componets/NavCard/NavCard';
import NavFriends from './Componets/NavFriends/Friends';
import NavMassage from './Componets/NavMassage/NavMassage';
import NavMedia from './Componets/NavMedia/NavMedia';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar photofriends={props.state.friendsPage} />
        <div className='app-wrapper-content'>
          <Route path='/content' render={() =>
            <Content
              state={props.state.contentPage}
              dispatch={props.dispatch}/>} />
          <Route path='/navmassage' render={() => 
          <NavMassage 
          state={props.state.messagesPage} 
          dispatch={props.dispatch}/>} />
          <Route path='/navcard' render={() => <NavCard />} />
          <Route path='/navmedia' render={() => <NavMedia />} />
          <Route path='/friends' render={() => <NavFriends />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
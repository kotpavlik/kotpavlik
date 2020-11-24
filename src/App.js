import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ContentContainer from './Componets/Content/ContentContainer';
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
        <Navbar photofriends={props.store.friendsPage} />
        <div className='app-wrapper-content'>
          <Route path='/content' render={() =>
            <ContentContainer
              store={props.store}
              dispatch={props.dispatch}/>} />
          <Route path='/navmassage' render={() => 
          <NavMassage 
          store={props.store.messagesPage} 
          dispatch={props.dispatch}/>}
          store={props.store} />
          <Route path='/navcard' render={() => <NavCard />} />
          <Route path='/navmedia' render={() => <NavMedia />} />
          <Route path='/friends' render={() => <NavFriends />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
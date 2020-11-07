import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import NavCard from './NavCard/NavCard';
import NavFriends from './NavFriends/Friends';
import NavMassage from './NavMassage/NavMassage';
import NavMedia from './NavMedia/NavMedia';

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
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} />} />
          <Route path='/navmassage' render={() => 
          <NavMassage 
          state={props.state.messagesPage} 
          sendMessage={props.sendMessage}
          updateNewMessageText ={props.updateNewMessageText}
          />} />
          <Route path='/navcard' render={() => <NavCard />} />
          <Route path='/navmedia' render={() => <NavMedia />} />
          <Route path='/friends' render={() => <NavFriends />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
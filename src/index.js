import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import state , { subscribe } from './Redux/State'
import './index.css';
import App from './App';
import {addPost , sendMessage, updateNewMessageText, updateNewPostText} from './Redux/State'

 let rerenderEntireTree = () => { 
ReactDOM.render( 
    <React.StrictMode >
    <App state={state}
    addPost = { addPost } 
    updateNewPostText={updateNewPostText}
     sendMessage={sendMessage}
     updateNewMessageText={updateNewMessageText}/> 
    </React.StrictMode > ,
    document.getElementById('root')
);
}

rerenderEntireTree (state);

subscribe (rerenderEntireTree) ;

serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store'
import './index.css';
import App from './App';

 let rerenderEntireTree = () => { 
ReactDOM.render( 
    <React.StrictMode >
    <App state={store.getState()}
    dispatch = { store.dispatch.bind(store) } /> 
    </React.StrictMode > ,
    document.getElementById('root')
);
}

rerenderEntireTree (store.getState());

store.subscribe ( () => { 
    let state = store.getState();
    rerenderEntireTree(state);
}) ;

serviceWorker.unregister();
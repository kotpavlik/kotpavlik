import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';



  ReactDOM.render( // специальная обертка из модуля библиотеки react-router-dom на строку ниже, занимается роутингами и линками
    <BrowserRouter> 
    <Provider store={store}>
      <App  /> 
      </Provider>
    </BrowserRouter>,
    document.getElementById("root") // интропритирует весь код в HTML,JS,CSS нативный и подставляет в указаное место root
  );

reportWebVitals();


// удалили все функции которые перерисовывали нам дерево потому что теперь этим занимается функция connect из
// react-redux модуля.В нем эта финкция инкапсулирована
// Так же добавили  <Provider store={store}> это тоже элемент react-redux который занимается созданием и использованием context
// Context - эта область которая напрямую соеденяет молулиContainer и прокидывает в них state и dispatch


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { rerenderEntireTree } from './rerender';
import state from './Redux/State'



rerenderEntireTree (state);


serviceWorker.unregister();
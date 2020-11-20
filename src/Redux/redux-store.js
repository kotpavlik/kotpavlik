import {  combineReducers, createStore } from "redux";
import reducerContent from "./reducerContent";
import reducerMessages from "./reducerMessages"
import reducerFriends from "./reducerFriends"

let reducers = combineReducers({
    contentPage: reducerContent,
    messagesPage:reducerMessages,
    friendsPage:reducerFriends
});

let store = createStore(reducers);

export default store;


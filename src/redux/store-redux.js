import { combineReducers, createStore } from "redux";
import TestMessengerReducer from "./TestMessenger-Reducer";
import ShopReducer from "./Shop-Reducer";
import ForWomenReducer from "./ForWomen-Reducer";
import ForMenReducer from "./ForMen-Reducer";
import AboutUsReducer from "./AboutUs-Reducer";


let reducers = combineReducers({
    AboutUsPage: AboutUsReducer,
    ForMenPage: ForMenReducer,
    ForWomenPage: ForWomenReducer,
    ShopPage: ShopReducer,
    TestMessengerPage: TestMessengerReducer
});

let store = createStore(reducers);

export default store;
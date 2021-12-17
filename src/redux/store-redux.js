import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import TestMessengerReducer from "./TestMessenger-Reducer";
import ShopReducer from "./Shop-Reducer";
import ForWomenReducer from "./ForWomen-Reducer";
import ForMenReducer from "./ForMen-Reducer";
import AboutUsReducer from "./AboutUs-Reducer";
import UsersReducer from "./Users-Reducer";
import AuthReducer from "./Auth-Reducer";


let reducers = combineReducers({ // комбинирует reducer и объекты которые мы поместили внурь reducer, ониотрабатывают и попадают в store
    AboutUsPage: AboutUsReducer, // ключ:значение - в роли ключа объект в роли значения reducer который принимает объект приобразовывает его и передаёт в store
    ForMenPage: ForMenReducer,
    ForWomenPage: ForWomenReducer,
    ShopPage: ShopReducer,
    TestMessengerPage: TestMessengerReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // функция reducers объявленая выше является свойством store.И добавили промежуточный слой applyMiddleware

window.store = store;

export default store;
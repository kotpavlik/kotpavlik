import { combineReducers, createStore } from "redux";
import TestMessengerReducer from "./TestMessenger-Reducer";
import ShopReducer from "./Shop-Reducer";
import ForWomenReducer from "./ForWomen-Reducer";
import ForMenReducer from "./ForMen-Reducer";
import AboutUsReducer from "./AboutUs-Reducer";


let reducers = combineReducers({ // комбинирует reducer и объекты которые мы поместили внурь reducer, ониотрабатывают и попадают в store
    AboutUsPage: AboutUsReducer, // ключ:значение - в роли ключа объект в роли значения reducer который принимает объект приобразовывает его и передаёт в store
    ForMenPage: ForMenReducer,
    ForWomenPage: ForWomenReducer,
    ShopPage: ShopReducer,
    TestMessengerPage: TestMessengerReducer
});

let store = createStore(reducers); // функция reducers объявленая выше является свойством store.

export default store;
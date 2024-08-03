/**
 * store oluşturma
 * 1) redux kütüphanesinden createStore methodu import edilir.
 * 2) store içerisinde tutulacak olan herbir veri için reducer lar oluşturulur.
 * 3)Oluşturulan reducerlar combineReducer methodun ile birleştirilir
 * 4)store a birleştirilen reducerler gönderilir.
 */




import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/useReducer";
//!birden fazla reducer varsa bunları birleştirir
const rootReducer = combineReducers({
    todoReducer,
    userReducer,
});
//!store oluşturulur
const store = createStore(rootReducer);

//projeye tanıtmak için export ederiz
export default store;
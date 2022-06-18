import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paginationReducer from './PaginationSlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reducer = combineReducers({
    paginationStatus: paginationReducer,

});
export const presistConfig = {
    key: "root",
    storage,
}

const persistHandler = persistReducer(presistConfig, reducer);

export const store = configureStore({
    reducer: persistHandler,

})
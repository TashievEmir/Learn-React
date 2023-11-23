import {combineReducers, createStore} from "@reduxjs/toolkit"
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);
export default store;
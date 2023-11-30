import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import store from './redux/reduxStore'
import {addPost} from './redux/state';
import {Provider} from "react-redux";

let rerenderEntireTree =(state) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log(state)
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider>
                    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
);
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree();

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

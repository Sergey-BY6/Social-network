import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe} from './Redux/state'
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()
subscribe(rerenderEntireTree)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './Redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import { StoreContext } from './StoreContext';


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App store={store}/>
                {/*<App />*/}
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

//
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


// rerenderEntireTree()
// store.subscribe ( () => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
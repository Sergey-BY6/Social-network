import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {store} from './Redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';




// export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
                {/*<App  store={store}/>*/}
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }


// rerenderEntireTree()
// store.subscribe(rerenderEntireTree)


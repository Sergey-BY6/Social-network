import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStateType} from './Redux/state'
import {BrowserRouter} from 'react-router-dom';
import { rerenderEntireTree } from './rerenderEntireTree';



//
// export const rerenderEntireTree (state: RootStateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state}/>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }

rerenderEntireTree(state)
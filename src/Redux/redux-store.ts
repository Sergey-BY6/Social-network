import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {storeType} from './store';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})


// type RootRedusersType = typeof reducers
// type StoooreType = ReturnType<RootRedusersType>

export let store: storeType = createStore(reducers)
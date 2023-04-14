import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from "redux-form"
import {appReducer} from './app-reducer';


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

})


export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store


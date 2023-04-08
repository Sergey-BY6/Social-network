import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';


const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean ///было false
}

let initialState: InitialStateType = {
    id: 1 ,
    login: "1" ,
    email: "1" ,
    isAuth: false ///было false
}

// export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payload.data,

            }
        }
        default: {
            return state
        }
    }
}


export type MainType = setUserDataType



type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = ( id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data: {
                id,
                login,
                email,
                isAuth
            }
        }
    } as const
}


export const getAuthUserData = () => {

    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, MainType> => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}


export const logout = () => {

    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}
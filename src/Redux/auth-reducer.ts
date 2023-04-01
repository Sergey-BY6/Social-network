import {Dispatch} from 'redux';
import {authAPI} from '../api/api';


const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: 1 ,
    login: "1" ,
    email: "1" ,
    isAuth: false
}

export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payload.data,
                // isAuth: true
            }
        }
        default: {
            return state
        }
    }
}


export type MainType = setUserDataType



type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = ( id: number, login: string, email: string,) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data: {
                id,
                login,
                email,
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
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}
import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {stopSubmit} from 'redux-form';


const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'

type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: null | string
}

let initialState: InitialStateType = {
    id: null,
    login: '1',
    email: '1',
    isAuth: false,
    captchaUrl: null
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
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}


export type MainType = setUserDataType | stopSubmitType | getCaptchaUrlSuccessType


type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
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


type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        }
    } as const
}


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


type stopSubmitType = ReturnType<typeof stopSubmit>

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAction<void, AppStateType, unknown, MainType> => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}


export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


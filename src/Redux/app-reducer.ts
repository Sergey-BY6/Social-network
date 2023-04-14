import {AnyAction, Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {stopSubmit} from 'redux-form';
import {getAuthUserData} from './auth-reducer';


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

// export type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}


export type MainType = initializedSuccessType


type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


export const initializeApp = (): ThunkAction<void, AppStateType, unknown, AnyAction> => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(()=> {
        dispatch(initializedSuccess())
    })
}


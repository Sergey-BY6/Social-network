import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {getAuthUserData} from './auth-reducer';


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}



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


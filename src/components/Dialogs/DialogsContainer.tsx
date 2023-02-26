import React from 'react';
import {
    addMessageAC,
    dialogsType,
    InitialStateType,
    messagesType,
    updateNewMessageTextAC
} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import { Dispatch } from 'redux';



type MapStatePropsType = {
    // dialogsPage: InitialStateType
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessageText: string
}


type MapDispatchPropsType = {
    updateNewMessageText: (eText: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType






const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (eText: string) => {
            dispatch(updateNewMessageTextAC(eText))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        },
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
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
import {compose, Dispatch} from 'redux';
import {Redirect} from 'react-router-dom';
import {mapStateToPropsForRedirectType, withAuthRedirect} from '../../hoc/withAuthRedirect';



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


// let AuthRedirectComponent = withAuthRedirect(Dialogs)



// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
//
// export default DialogsContainer;


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
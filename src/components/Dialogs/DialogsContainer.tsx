import React from 'react';
import {
    addMessageAC,
    dialogsType, MessageFullType,
    // InitialStateType, messageFullType,
    // messagesType,
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
    messages: MessageFullType
    // newMessageText: string
}


type MapDispatchPropsType = {
    // updateNewMessageText: (eText: string) => void
    addMessage: (block: string, newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        // newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        // updateNewMessageText: (eText: string) => {
        //     dispatch(updateNewMessageTextAC(eText))
        // },
        addMessage: (block: string, newMessageBody: string) => {
            dispatch(addMessageAC(block, newMessageBody))
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
import React from 'react';
import {addMessageAC, dialogsType, MessageFullType} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {compose, Dispatch} from 'redux';
import { withAuthRedirect} from '../../hoc/withAuthRedirect';



type MapStatePropsType = {
    dialogs: dialogsType[]
    messages: MessageFullType
}


type MapDispatchPropsType = {
    addMessage: (block: string, newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (block: string, newMessageBody: string) => {
            dispatch(addMessageAC(block, newMessageBody))
        },
    }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
// export default DialogsContainer;


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
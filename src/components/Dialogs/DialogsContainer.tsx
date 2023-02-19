import React from 'react';
import {storeType} from '../../Redux/store';
import {addMessageAC, updateNewMessageTextAC} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    // dialogs: dialogsType[]
    // messages: messagesType[]
    // newMessageText: string
    // updateNewMessageText: (MessageText: string) => void
    // addMessage: () => void

    // dispatch: (action: mainType) => void
    store: storeType
}


const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const addMessageText = () => {
        // props.addMessage()
        props.store.dispatch(addMessageAC())
    }

    const onChangeMessageTextHandler = (eText: string) => {
        // props.updateNewMessageText(e.currentTarget.value)
        props.store.dispatch(updateNewMessageTextAC(eText))
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} updateNewMessageText={onChangeMessageTextHandler} addMessage={addMessageText}/>
    );
};

export default DialogsContainer;
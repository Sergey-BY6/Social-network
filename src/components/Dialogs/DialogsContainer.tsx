import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';


type DialogsContainerPropsType = {
    // dialogs: dialogsType[]
    // messages: messagesType[]
    // newMessageText: string
    // updateNewMessageText: (MessageText: string) => void
    // addMessage: () => void

    // dispatch: (action: mainType) => void
    // store: storeType
}


const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addMessageText = () => {
                    // props.addMessage()
                    store.dispatch(addMessageAC())
                }

                const onChangeMessageTextHandler = (eText: string) => {
                    // props.updateNewMessageText(e.currentTarget.value)
                    store.dispatch(updateNewMessageTextAC(eText))
                }
                return (
                    <Dialogs dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageText={state.dialogsPage.newMessageText}
                             updateNewMessageText={onChangeMessageTextHandler}
                             addMessage={addMessageText}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
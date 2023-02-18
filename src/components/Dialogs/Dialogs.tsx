import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {dialogsType, mainActionType, messagesType} from '../../Redux/state';


type DialogsPropsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessageText: string
    // updateNewMessageText: (MessageText: string) => void
    // addMessage: () => void

    dispatch: (action: mainActionType) => void

}


const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar}/>)

    let messageElements = props.messages.map(el => <Message message={el.message}/>)


    const addMessageText = () => {
        // props.addMessage()
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewMessageText(e.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: e.currentTarget.value})
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    value={props.newMessageText}
                    onChange={onChangeMessageTextHandler}
                    className={s.area}>
                </textarea>
                <button
                    className={s.btnAdd}
                    onClick={addMessageText}>Add
                </button>
            </div>
        </div>

    );
};

export default Dialogs;
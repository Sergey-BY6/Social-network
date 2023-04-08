import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import { AddMessageFormRedux, AddMessageFormType } from './addMessageForm/addMessageForm';


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar}/>)

    let messageElements = props.messages.map(el => <Message key={el.id} message={el.message}/>)


    const addNewMessage = (formData: AddMessageFormType) => {
        // console.log(formData.newMessageBody)
        props.addMessage(formData.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>

    );
};

export default Dialogs;



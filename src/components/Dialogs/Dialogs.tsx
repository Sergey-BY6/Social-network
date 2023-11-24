import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {AddMessageFormRedux, AddMessageFormType} from './addMessageForm/addMessageForm';
import {Route, useLocation} from 'react-router-dom';


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar}
                                                             status={el.status}/>)

    const messagesFunc = (block: string) => {
        let messageForDialog = props.messages[block].map(el => <Message key={el.id} message={el.message}/>)
        return messageForDialog.length > 0 ? <div>{messageForDialog}</div> : <div>No message</div>
    }

    const location = useLocation()
    const path = location.pathname

    const addNewMessage = (formData: AddMessageFormType) => {
            props.addMessage(path, formData.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {/*{messageElements}*/}
                <Route path={'/dialogs/1'} render={() => messagesFunc("/dialogs/1")}/>
                <Route path={'/dialogs/2'} render={() => messagesFunc("/dialogs/2")}/>
                <Route path={'/dialogs/3'} render={() => messagesFunc("/dialogs/3")}/>
                <Route path={'/dialogs/4'} render={() => messagesFunc("/dialogs/4")}/>
                <Route path={'/dialogs/5'} render={() => messagesFunc("/dialogs/5")}/>
                <Route path={'/dialogs/6'} render={() => messagesFunc("/dialogs/6")}/>

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>

    );
};

export default Dialogs;




import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';



const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} avatar={el.avatar}/>)

    let messageElements = props.messages.map(el => <Message key={el.id} message={el.message}/>)


    const addMessageText = () => {
        props.addMessage()
    }

    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    // if(!props.isAuth) return <Redirect to={"/login"}/>


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
import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { dialogsType, messagesType } from '../../Redux/state';


type DialogsPropsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let dialogElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id} avatar={el.avatar}/>)

    let messageElements = props.messages.map(el => <Message message={el.message}/>)

    let textMessageRef = React.createRef<HTMLTextAreaElement>()

    const addTextRef = () => {
        let text = textMessageRef.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    ref={textMessageRef} className={s.area}>
                </textarea>
                <button
                    className={s.btnAdd}
                    onClick={addTextRef}>Add</button>
            </div>
        </div>

    );
};

export default Dialogs;
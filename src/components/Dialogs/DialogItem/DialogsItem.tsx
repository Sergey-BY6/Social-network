import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogItemPropsType = {
    name: string
    id: number
    avatar: string
    status: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.avatar} alt={'image'}/>
            <div className={s.nameStatusBlock}>
                <div className={s.dialogsName}><NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
                </div>
                <div className={s.status}>{props.status}</div>
            </div>
        </div>
    )
}


export default DialogItem;
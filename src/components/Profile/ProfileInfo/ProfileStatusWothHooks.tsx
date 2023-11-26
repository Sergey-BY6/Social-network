import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'
import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../../Redux/redux-store';
import {updateStatus} from '../../../Redux/profileReducer';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    const dispatch = useAppDispatch()

    useEffect (() => {
        setStatus(props.status)
    },[props.status])


    const activateEditModeHandler = () => {
        setEditMode(true)
    }

    const deactivateEditModeHandler = () => {
        setEditMode(false)
        dispatch(updateStatus(status))
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input onChange={onChangeStatusHandler}
                           value={status}
                           onBlur={deactivateEditModeHandler}
                           autoFocus

                    />
                </div>
                :
                <div>
                    <span onDoubleClick={activateEditModeHandler}>{props.status ? props.status : '-----'}</span>
                </div>}
        </div>
    );
}

export default ProfileStatusWithHooks;
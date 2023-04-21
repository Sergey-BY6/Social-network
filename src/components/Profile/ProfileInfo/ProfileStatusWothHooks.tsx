import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect (() => {
        setStatus(props.status)
    },[props.status])


    const activateEditModeHandler = () => {
        setEditMode(true)
    }

    const deactivateEditModeHandler = () => {
        setEditMode(false)
        props.updateStatus(status)
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
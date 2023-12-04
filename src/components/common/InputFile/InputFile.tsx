import React, {ChangeEvent, useRef} from 'react';
import s from './InputFile.module.css'
import {useAppDispatch} from './../../../Redux/redux-store';
import {savePhoto} from './../../../Redux/profileReducer';



export const InputFile = () => {
const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    };

    return (
        <div className={s.mainBtn}>
            <button onClick={selectFileHandler} className={s.btn}></button>
            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={uploadHandler}
            />
        </div>
    )
}
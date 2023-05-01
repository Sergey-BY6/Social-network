import React from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}


export const Paginator: React.FC<PaginatorPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
            <div>
                {pages.map(el => {
                    return (
                        <span
                            key={el}
                            className={props.currentPage === el ? s.selectPage : ''}
                            onClick={() => {
                                props.onPageChanged(el)
                            }}
                        >{el}</span>
                    )
                })}
            </div>
    );
};


import React, {useState} from 'react';
import s from './Paginator.module.css';



type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}


export const Paginator: React.FC<PaginatorPropsType> = (props) => {

    const portionSize = 10
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
            <div className={s.paginator}>
                {portionNumber > 1 &&
                <button
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    className={s.btn}
                >Prev</button>
                }
                <div className={s.pages}>
                    {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(el => {
                    return (
                        <span
                            key={el}
                            className={props.currentPage === el ? s.selectedPage: s.pageNumber}
                            onClick={() => {
                                props.onPageChanged(el)
                            }}
                        >{el}</span>
                    )
                })}
                </div>
                {portionCount > portionNumber &&
                    <button
                        onClick={() => setPortionNumber(portionNumber + 1)}
                        className={s.btn}
                    >Next</button>
                }
            </div>
    );
};


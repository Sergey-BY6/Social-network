import React from 'react';
import {mapStateToPropsType, UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from './../../assets/images/user.jpg'


class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(55)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(el => {
                        return (
                            <span
                                key={el}
                                className={this.props.currentPage === el ? s.selectPage : ''}
                                onClick={() => {
                                    this.onPageChanged(el)
                                }}
                            >{el}</span>
                        )
                    })}
                </div>
                {
                    this.props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} className={s.userPhoto}
                                 alt="paint"/>
                        </div>
                        <div>
                                 {el.followed
                                     ? <button onClick={() => this.props.unfollow(el.id)}>UnFollow</button>
                                     : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;
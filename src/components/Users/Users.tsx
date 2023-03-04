import React from 'react';
import {mapStateToPropsType, UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from './../../assets/images/user.jpg'


class Users extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
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
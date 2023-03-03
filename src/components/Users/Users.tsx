import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from "./Users.module.css"
import axios from 'axios';
import userPhoto from "./../../assets/images/user.jpg"


const Users: React.FC<UsersPropsType> = (props) => {

    // {id: 1, photoUrl: "https://avatars.mds.yandex.n", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
    //
    if (props.usersPage.users.length === 0) {
        // debugger
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
          console.log(response)
          props.setUsers(response.data.items)
      })
    }
    console.log(props.usersPage.users)
    return (
        <div>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} className={s.userPhoto} alt="paint"/>
                        </div>
                        <div>
                                 {el.followed
                                     ? <button onClick={()=> props.unfollow(el.id)}>UnFollow</button>
                                     : <button onClick={()=> props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div>
                            <div>{"el.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;
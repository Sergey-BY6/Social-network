import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from "./Users.module.css"


const Users: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers( [
            {id: 1, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
            {id: 2, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: true, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
            {id: 3, photoUrl: "https://avatars.mds.yandex.net/i?id=a4064402cbc6638c11a181ce2e88f9bf2d5386e8-5383276-images-thumbs&ref=rim&n=33&w=112&h=165", followed: false, fullName: "Andrew", status: "I am a boss too", location: {city: "Kiev", country: "Ukraine"}}
        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photoUrl} className={s.userPhoto} alt="paint"/>
                        </div>
                        <div>
                                 {el.followed
                                     ? <button onClick={()=> props.unfollow(el.id)}>UnFollow</button>
                                     : <button onClick={()=> props.follow(el.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;
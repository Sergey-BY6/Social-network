import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {InitialStateType, postsType, ProfileType, setUserProfile, toggleProfilePage} from '../../Redux/profileReducer';


type ProfilePropsType = {}

class ProfileContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
     this.props.toggleProfilePage(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
            this.props.toggleProfilePage(false)
            console.log(this.props)
            // console.log(this.props.)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching}/>

            </div>
        );
    }
}





export type mapStateToPropsType = {
    profile: ProfileType | null
    isFetching: boolean
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    toggleProfilePage: (isFetching: boolean) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}


export default connect (mapStateToProps, {setUserProfile, toggleProfilePage})(ProfileContainer);
import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import { ProfileType, setUserProfile, toggleProfilePage} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter } from 'react-router-dom';


// type ProfilePropsType = {}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
     this.props.toggleProfilePage(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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



type PathParamsType = {
    userId: string
}

export type mapStateToPropsType = {
    profile: ProfileType | null
    isFetching: boolean
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    toggleProfilePage: (isFetching: boolean) => void
}


export type OwnProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect (mapStateToProps, {setUserProfile, toggleProfilePage})(WithUrlDataContainerComponent);
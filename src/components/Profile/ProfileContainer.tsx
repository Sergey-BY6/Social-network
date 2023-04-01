import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {getUserProfile, ProfileType, toggleProfilePage} from '../../Redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {mapStateToPropsForRedirectType, withAuthRedirect} from '../../hoc/withAuthRedirect';



// type ProfilePropsType = {}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        this.props.toggleProfilePage(true)
        this.props.getUserProfile(userId)
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
    toggleProfilePage: (isFetching: boolean) => void
    getUserProfile: (userId: string) => void
}


export type OwnProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect (mapStateToProps, {
    toggleProfilePage,
    getUserProfile
})(WithUrlDataContainerComponent));
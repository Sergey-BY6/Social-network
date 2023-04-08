import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {getStatus, getUserProfile, ProfileType, toggleProfilePage, updateStatus} from '../../Redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {mapStateToPropsForRedirectType, withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import Dialogs from '../Dialogs/Dialogs';


// type ProfilePropsType = {}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = "2"
            userId = `${this.props.authorizedUserId}`
        }
        this.props.toggleProfilePage(true)
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         isFetching={this.props.isFetching}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
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
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}


type mapDispatchToPropsType = {
    toggleProfilePage: (isFetching: boolean) => void
    getUserProfile: (userId: string) => void

    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}


export type OwnProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect (mapStateToProps, {
//     toggleProfilePage,
//     getUserProfile
// })(WithUrlDataContainerComponent));


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        toggleProfilePage,
        getUserProfile,

        getStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {
    getStatus,
    getUserProfile,
    ProfileType,
    savePhoto,
    toggleProfilePage,
    updateStatus
} from '../../Redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';




export class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = "2"
            userId = `${this.props.authorizedUserId}`
            if (!(+userId)) {
                this.props.history.push('/login')
            }
        }

        if (+userId === 28096) {
            //перенес в navbar
            // this.props.toggleProfilePage(true)
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }

    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         isFetching={this.props.isFetching}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
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
    savePhoto: (photoFile: File) => void
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        toggleProfilePage,
        getUserProfile,

        getStatus,
        updateStatus,
        savePhoto
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
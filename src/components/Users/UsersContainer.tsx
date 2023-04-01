import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {
    follow, getUsers,
    InitialStateType,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
} from '../../Redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {mapStateToPropsForRedirectType, withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import Dialogs from '../Dialogs/Dialogs';


class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        //
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(55)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     console.log(data)
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching}/>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}


export type mapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
& mapStateToPropsForRedirectType


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
//
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }


//  let withRedirect = withAuthRedirect(UsersAPIContainer)
//
// export const UsersContainer = connect(mapStateToProps, {
//     follow,
//     unFollow,
//     setCurrentPage,
//     toggleFollowingInProgress,
//     getUsers
// })(withRedirect)



export const UsersContainer  = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersAPIContainer)


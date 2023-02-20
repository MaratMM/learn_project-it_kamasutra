import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, setToggleIsFetching } from "../../redux/usersReducer";
// import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC, setToggleIsFetchingAC } from "../../redux/usersReducer";
import axios from 'axios'
import React from 'react'
import { Users } from './UsersTest'
import { Preloader } from '../common/Preloader/Preloader'

export class UsersAPIcomponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(prostoFunction.data.items)
            //нижняя строка устанавливает количество человек приходящих с сервера
            // this.props.setUsersTotalCount(prostoFunction.data.totalCount)
        })
    }

    onPageChanged = (elem) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(elem)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${elem}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(prostoFunction.data.items)
        })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow} onPageChanged={this.onPageChanged} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) =>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId)=> {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users)=> {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage)=> {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount: (totalCount)=> {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setToggleIsFetching: (isFetching)=> {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         },
//     }
// }

// export let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIcomponent)

export let UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setToggleIsFetching,
    })(UsersAPIcomponent)
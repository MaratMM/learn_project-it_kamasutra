import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import axios from 'axios'
import React from 'react'
import {Users} from './UsersTest'

export class UsersAPIcomponent extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setUsers(prostoFunction.data.items)
            this.props.setUsersTotalCount(prostoFunction.data.totalCount)
        })
    }

    onPageChanged = (elem)=> {
        this.props.setCurrentPage(elem)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${elem}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setUsers(prostoFunction.data.items)
        })
    }

    render() {
        
        return (
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow} onPageChanged={this.onPageChanged} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=> {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersTotalCount: (totalCount)=> {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIcomponent)
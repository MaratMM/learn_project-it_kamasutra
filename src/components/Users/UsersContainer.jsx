import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import {Users} from './UsersCopy'

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
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
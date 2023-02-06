import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import {Users} from './UsersCopy'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)
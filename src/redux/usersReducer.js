const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {id:1, followed:false, fullName:'Alexander', statusProfile:'im main mutherfucker', location:{city:'kazan', country:'russia'}},
        {id:2, followed:true, fullName:'Dimon', statusProfile:'im main sucker', location:{city:'moscow', country:'russia'}},
        {id:3, followed:false, fullName:'Evgeny', statusProfile:'im main dumb', location:{city:'nizhnekamsk', country:'russia'}},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const followAC = () => {
    return {
        type: FOLLOW,
    }
}
export const unfollowAC = () => {
    return {
        type: UNFOLLOW,
    }
}
export default usersReducer;
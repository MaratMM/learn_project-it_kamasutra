import axios from 'axios'
import style from './Users.module.css'

export let Users = (props) => {
    let getUsers = () =>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(prostoFunction => {
                props.setUsers(prostoFunction.data.items)
            })
            // props.setUsers(
            //     [
            //         { id: 1, followed: false, fullName: 'Alexander', statusProfile: 'im main mutherfucker', location: { city: 'kazan', country: 'russia' } },
            //         { id: 2, followed: true, fullName: 'Dimon', statusProfile: 'im main sucker', location: { city: 'moscow', country: 'russia' } },
            //         { id: 3, followed: false, fullName: 'Evgeny', statusProfile: 'im main dumb', location: { city: 'nizhnekamsk', country: 'russia' } },
            //     ]
            // )
        }
    }
    let UsersData = props.users.map((elem) => {
        return (
            <div key={elem.id}>
                <div>
                    <img className={style.imgProfilePhoto} src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg" alt="profilePhoto" />
                    {elem.followed ? <button onClick={() => { props.unfollow(elem.id) }}>unFollow</button> : <button onClick={() => { props.follow(elem.id) }}>Follow</button>}
                </div>
                <div>
                    <div>
                        <span>{elem.name}</span>
                        <span>{elem.status}</span>
                    </div>
                    <div>
                        <span>{"elem.location.city"}</span>
                        <span>{"elem.location.country"}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            <h1>Hellow users</h1>
            {UsersData}
        </div>
    )
}
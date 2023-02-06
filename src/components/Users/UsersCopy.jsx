import axios from 'axios'
import style from './Users.module.css'
import React from 'react'

export class Users extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(prostoFunction => {
            this.props.setUsers(prostoFunction.data.items)
        })
    }

    render() {
        return (
            <div>
                <h1>Hellow users</h1>
                {
                    this.props.users.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <div>
                                    <img className={style.imgProfilePhoto} src="https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg" alt="profilePhoto" />
                                    {elem.followed ? <button onClick={() => { this.props.unfollow(elem.id) }}>unFollow</button> : <button onClick={() => { this.props.follow(elem.id) }}>Follow</button>}
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
                }
            </div>
        )
    }
}
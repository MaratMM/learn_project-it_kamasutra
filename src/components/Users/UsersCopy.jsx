import axios from 'axios'
import style from './Users.module.css'
import React from 'react'

export class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setUsers(prostoFunction.data.items)
            this.props.setUsersTotalCount(prostoFunction.data.totalCount)
        })
    }

    onPageChanged (elem) {
        this.props.setCurrentPage(elem)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${elem}&count=${this.props.pageSize}`).then(prostoFunction => {
            this.props.setUsers(prostoFunction.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages= []
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <h1>Hellow users</h1>
                <div>
                    {pages.map((elem)=> {
                        return (
                            <span onClick={(e)=> {this.onPageChanged(elem)}} className={`${this.props.currentPage === elem && style.currentPage} ${style.pageNumber}`}>{elem}</span>  
                        )
                    })}
                </div>
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
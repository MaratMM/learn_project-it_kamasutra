import style from './Users.module.css'

export let Users = (props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                            <span onClick={(e)=> {props.onPageChanged(elem)}} className={`${props.currentPage === elem && style.currentPage} ${style.pageNumber}`}>{elem}</span>  
                        )
                    })}
                </div>
                {
                    props.users.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <div>
                                    <img className={style.imgProfilePhoto} src={elem.photos.small !== null ? elem.photos.small  : "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg"} alt="profilePhoto" />
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
                }
            </div>
    )
}
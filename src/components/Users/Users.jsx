export let Users = (props) => {
    
    let UsersData = props.users.map((elem)=>{
        return (
            <div>
                <div>
                    <img src="#" alt="profilePhoto" />
                    <button>unFollow</button>
                </div>
                <div>
                    <div>
                        <span>{elem.fullName}</span>
                        <span>{elem.statusProfile}</span>
                    </div>
                    <div>
                        <span>{elem.location.city}</span>
                        <span></span>
                        
                        {elem.location.country}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Hellow users</h1>
            {UsersData}
        </div>
    )
}
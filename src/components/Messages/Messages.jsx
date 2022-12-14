import { Outlet } from 'react-router-dom'
import { NavigationLink } from '../Navigation/NavigationLink/NavigationLink'
import style from './Messages.module.css'
import React from "react"

export let Messages = (props) => {

    let Contacts = props.contactData.map((elem) => {
        return (
            <NavigationLink nameLink={elem.nameLink} link={elem.link} />
        )
    })

    

    return (
        <div className={style.messages}>
            <div className={style.contacts}>
                {Contacts}
            </div>
            <div className={style.dialog}>
                <p>
                    <Outlet />
                    
                </p>
            </div>
        </div>
    )
}
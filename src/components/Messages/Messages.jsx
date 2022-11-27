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

    let textareaMessage = React.createRef()
    let addNewMessage = () => {
        alert(textareaMessage.current.value)
    }

    return (
        <div className={style.messages}>
            <div className={style.contacts}>
                {Contacts}
            </div>
            <div className={style.dialog}>
                <p>
                    <Outlet />
                    <textarea ref={textareaMessage} name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={addNewMessage}>send Message</button>
                </p>
            </div>
        </div>
    )
}
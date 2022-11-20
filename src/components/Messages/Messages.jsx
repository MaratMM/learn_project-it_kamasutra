import { Outlet } from 'react-router-dom'
import { NavigationLink } from '../Navigation/NavigationLink/NavigationLink'
import style from './Messages.module.css'

export let Messages = (props)=> {
    return (
        <div className={style.messages}>
            <div className={style.contacts}>
                <NavigationLink nameLink={'Katerina'} link={`/messages/Katerina`} />
                <NavigationLink nameLink={'Mihail'} link={`/messages/Mihail`} />
                <NavigationLink nameLink={'Kolya'} link={`/messages/Kolya`} />
                <NavigationLink nameLink={'Natasha'} link={`/messages/Natasha`} />
            </div>
            <div className={style.dialog}>
                <p>
                    <Outlet />
                </p>
            </div>
        </div>
    )
}
import style from './Navigation.module.css'
import { NavigationLink } from './NavigationLink/NavigationLink'

let navLinkData = {
    NavigationLinkData: [
        { nameLink: 'myProfile', link: '/profile/me' },
        { nameLink: 'Messages', link: '/messages' },
        { nameLink: 'News', link: '/news' },
        { nameLink: 'Music', link: '/music' },
        { nameLink: 'testHook', link: '/testHook' },
        { nameLink: 'Setings', link: '/setings' },
        { nameLink: 'Users', link: '/users' },
    ]
}

export const Navigation = (props) => {

    let NavigationLinkItems = navLinkData.NavigationLinkData.map((item) => {
        return (
            <NavigationLink nameLink={item.nameLink} link={item.link} />
        )
    })

    return (
        <div className={style.navigation}>
            {NavigationLinkItems} 
        </div>
    )
}
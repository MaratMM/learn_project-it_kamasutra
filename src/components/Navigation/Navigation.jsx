import style from './Navigation.module.css'
import { NavigationLink } from './NavigationLink/NavigationLink'


export const Navigation = (props) => {

    let NavigationLinkItems = props.NavigationLinkData.map((item) => {
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
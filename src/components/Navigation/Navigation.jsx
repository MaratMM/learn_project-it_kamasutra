import style from './Navigation.module.css'
import { NavigationLink } from './NavigationLink/NavigationLink'

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <NavigationLink nameLink={'Profile'} link={`/profile`} />
            <NavigationLink nameLink={'Messages'} link={`/messages`} />

            <a className={style.link} href={`/messages`}>News</a>
            <a className={style.link} href="#">Music</a>
            <a className={style.link} href="#">Setings</a>
        </div>
    )
}
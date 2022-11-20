import style from './NavigationLink.module.css'
import { NavLink } from 'react-router-dom'

export let NavigationLink = (props) => {
    let activeStyle = {
        fontSize: "30px",
    };
    return (
        <NavLink to={props.link} className={style.link}
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
            {props.nameLink}
        </NavLink>
    )
}
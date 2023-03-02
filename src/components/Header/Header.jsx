import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import Logo from './logo.svg'

export function HeaderAll (props) {
    return (
        <div className={style.header}>
            <a href="/"><img className={style.header__logo} src={Logo} alt="" /></a>
            
            {props.isAuth ? <NavLink to={'/login'} className={style.loginLink}>{props.login}</NavLink> : <NavLink to={'/login'} className={style.loginLink}>LOGIN</NavLink>}
        </div>
    );
}
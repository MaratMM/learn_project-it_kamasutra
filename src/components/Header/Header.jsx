import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import Logo from './logo.svg'

export function HeaderAll () {
    return (
        <div className={style.header}>
            <a href="/"><img className={style.header__logo} src={Logo} alt="" /></a>
            <NavLink to={'/login'} className={style.loginLink}>LOGIN</NavLink>
        </div>
    );
}
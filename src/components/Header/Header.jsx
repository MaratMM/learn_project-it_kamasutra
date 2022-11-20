import style from './Header.module.css'
import Logo from './Logo.png'

export function HeaderAll () {
    return (
        <div className={style.header}>
            <a href="/"><img className={style.header__logo} src={Logo} alt="" /></a>
        </div>
    );
}
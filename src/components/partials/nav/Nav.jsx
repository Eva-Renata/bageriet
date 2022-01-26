import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'
import background from '../../../assets/Images/slide1.jpg'

export const Nav = props => {
    return (
        <nav className={style.navbar} style={{ backgroundImage: `url(${background})` }}>
            <ul className={style.navlist}>
                {props && props.navItems.map((value,index) => {
                    return (
                        <li key={index}>
                            <NavLink to={value.path}>{value.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
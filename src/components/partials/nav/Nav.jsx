import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'

export const Nav = props => {
    return (
        <nav >
            <ul>
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
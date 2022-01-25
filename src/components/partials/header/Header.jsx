import style from './Header.module.scss'
import { Nav } from '../nav/Nav'

const navItems = [
    {name:'Forside', path:'/'},
    {name:'Produkter', path:'/produkter'},
    {name:'Kontakt', path:'/kontakt'},
    {name:'Login', path:'/login'},
]

export const Header = () => {
    return (
        <>
        <h2>header</h2>
        <Nav navItems={navItems}/>
        </>
        
    )
}
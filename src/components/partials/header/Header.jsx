import style from './Header.module.scss'
import { Nav } from '../nav/Nav'


// navlinks array
const navItems = [
    {name:'Forside', path:'/'},
    {name:'Produkter', path:'/produkter'},
    {name:'bageriet', path:'/'},
    {name:'Kontakt', path:'/kontakt'},
    {name:'Login', path:'/login'},
]

export const Header = () => {
 return (
     <>
        <Nav navItems={navItems}/>
     </>

 )
}
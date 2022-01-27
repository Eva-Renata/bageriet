import style from './Header.module.scss'
import { Nav } from '../nav/Nav'
//import { FaSearch } from "react-icons/fa";

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
     <header>
        <Nav navItems={navItems}/>
        <div className={style.search}>
            <form>
                <input type="text" placeholder="Search..." name="search"/>
                {/* <FaSearch/> */}
            </form>
        </div>
     </header>

 )
}
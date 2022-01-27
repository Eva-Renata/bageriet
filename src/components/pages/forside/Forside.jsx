import style from './Forside.module.scss'
import {Slider}  from '../../partials/slider/Slider'
import { News } from '../../partials/news/News'

export const Forside = () => {
    return(
     <section>
       <Slider />
       <News />
     </section>
    )
}
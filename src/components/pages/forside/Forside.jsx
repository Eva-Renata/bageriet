import style from './Forside.module.scss'
import {Slider}  from '../../partials/slider/Slider'
import { News } from '../../partials/news/News'
import { Nyhedsbrev } from '../../partials/nyhedsbrev/Nyhedsbrev'

export const Forside = () => {
    return(
     <section>
       <Slider />
       <News />
       <Nyhedsbrev />
     </section>
    )
}
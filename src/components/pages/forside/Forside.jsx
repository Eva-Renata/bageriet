import style from './Forside.module.scss'
import {Slider}  from '../../partials/slider/Slider'
import { News } from '../../partials/news/News'
import { Nyhedsbrev } from '../../partials/nyhedsbrev/Nyhedsbrev'
import { AuthContext } from '../../Context/AuthProvider'
import { useContext } from 'react'

export const Forside = () => {
  const {loginData} = useContext(AuthContext)
  
    return(
     <section>
       <Slider />
       <div className={style.logindiv}>
        {!loginData ?
          <p>Du er ikke logget ind</p>
          :
          <p>Du er logget ind, som {loginData.username}</p>
       }
       </div>
       
       <News />
       <Nyhedsbrev />
     </section>
    )
}
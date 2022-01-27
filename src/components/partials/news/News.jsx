import style from './News.module.scss' 
import axios from 'axios' //til fetch
import { useEffect } from 'react';
import { useState} from "react";

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const url = 'https://api.mediehuset.net/bakeonline/news';
            const result =  await axios.get(url)
            setNews(result.data.items)
            console.log(result);
        }
        getData();
    },[setNews])


    return(
        <section className={style.newssection}>
        <h3>Vi skaber lækkert! brød</h3>
        <p>Der er mange tilgængelige  udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud.</p>

        <section className={style.figuresection}>
            {news && news.map(nyhed => {
                
                return(
                    <figure key={nyhed.id}>
                        <img src={nyhed.image} alt="image" />
                        <figcaption>
                            <h4>{nyhed.title}</h4>
                            <p>{nyhed.teaser}</p>
                        </figcaption>
                    </figure>
                )
            })}
        </section>
        
        </section>
    )
}

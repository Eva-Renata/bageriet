import style from './Slider.module.scss'
//importing carousel and slide pictures
import Carousel from'react-material-ui-carousel'
import Slide1 from '../../../assets/Images/slide1.jpg'
import Slide2 from '../../../assets/Images/slide2.jpg'
import Slide3 from '../../../assets/Images/slide3.jpg'

export const Slider = () => {
    const carouselItems = [
        {
            url: Slide1,
            title: "Vi elsker at lave brød",
            alt: "elsker brød"
        },
        {
            url: Slide2,
            title: "Brød er det bedste",
            alt: "Brød er bedste"
        },
        {
            url: Slide3,
            title: "Vi bager dagen lang",
            alt: "bager"
        },
    ]

    return (
        <Carousel>
            {
                //mapper items fra array. 
                carouselItems.map((item, index) => {
                    return(
                        <Item key={index} item={item}></Item>
                    )
                    
                })
            }
        </Carousel>
    ) 
}

function Item(props) {
        return(
           <section className={style.slide}>
                <h3>{props.item.title}</h3>
                <img src={props.item.url} alt={props.item.alt} />
           </section>
        )
    }
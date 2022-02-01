import styles from './Nyhedsbrev.module.scss'
import background from '../../../assets/Images/newsletterbg.jpg'

export const Nyhedsbrev = () => {
    return (
        <div className={styles.wrapper} >
            <section className={styles.nyhedsbrev} >
                <h3>Tilmeld dig vores nyhedsbrev</h3>
                <p>Der er mange tilgængelige  udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>

                <form >
                    <input type="email" placeholder="Indtast din email....." />
                    <button type="submit">TILMELD</button>
                </form>
            </section>
        </div>
        
        
    )
}

// style={{ backgroundImage: `url(${background})`, width:'100%'}}
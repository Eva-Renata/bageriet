import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer>
            <img src={require('../../../assets/Images/chevron.png')} alt="chevron" id="chevron"/>
            <h3>bageriet</h3>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum men de fleste udgaver har gennemgået forandringer.</p>
            <div className={styles.colorpatch}>
                <p>Copyright ©  2017 bageriet aps</p>
            </div>
        </footer>

    )
}
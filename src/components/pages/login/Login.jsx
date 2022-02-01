import axios from 'axios'
import style from './Login.module.scss'
import { useState } from 'react'


export const Login = () => {
    const txtMessage = 'Indtast brugernavn og adgangskode for at logge ind'
    //hook for a message- to change it in function of logged in or out
    const [message, setMessage] = useState(txtMessage);
    const [loginData, setLoginData] = useState('')

    
    const SubmitLogin = async e => {
        const formData = new FormData(e.target.form)
        try {
            const result = await axios.post('https://api.mediehuset.net/token', formData)
            handleSessionData(result);
        }
        //catching error, if it is
        catch(err) {
            console.error(err)
            setMessage('Kunne ikke logge ind')
        }
    
    }

    const handleSessionData = resp => {
        //201 is http response code for GET (succeded)
        if(resp.status === 201) {
            sessionStorage.setItem('token', JSON.stringify(resp.data))
            setLoginData(resp.data)
            setMessage(`Du er logget ind som ${resp.data.username}`)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
        setMessage(txtMessage)
    }

    return (
        <section className={style.login}>
            <h3>Login side</h3>
            <p>{message}</p>
            {/* if not logged in, the formular will show */}
            {!loginData ?
            <form method="post">
                <div>
                    <label htmlFor="username">Brugernavn:</label>
                    <input type="text" name="username" id="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className={style.buttons}>
                    <button type='button' onClick={SubmitLogin}>Login</button>
                    <button type='reset'>Nulstil felter</button>
                </div>
            </form>
            // if logged in, the logout button will show
            :
            <form>
                <button type="button" onClick={logOut}>Log out</button>
            </form>
            }
        </section>      
    );
}
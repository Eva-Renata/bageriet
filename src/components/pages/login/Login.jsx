import axios from 'axios'
import style from './Login.module.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { useForm } from "react-hook-form"

export const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    // const txtMessage = 'Indtast brugernavn og adgangskode for at logge ind'
    //hook for a message- to change it in function of logged in or out
    const [message, setMessage] = useState('');
    const {loginData, setLoginData} = useContext(AuthContext)
    
    const SubmitLogin = async data => {
        //console.log(data)
        const formData = new FormData()
        formData.append('username', data.username)
        formData.append('password', data.password)
        try {
            const result = await axios.post('https://api.mediehuset.net/token', formData)
            handleSessionData(result);
            // put the token in sessionstorage
            setMessage('')
        }
        //catching error, if there is
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
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
        
    }

    return (
        <section className={style.login}>
            <h3>Login side</h3>
            
            {/* if not logged in, the formular will show  */}
            {!loginData ?
            <>
            <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
            <form method="post" onSubmit={handleSubmit(SubmitLogin)}>
                <div>
                    <label htmlFor="username">Brugernavn:</label>
                    {/* <input type="text" name="username" id="username"/> */}
                    <input {...register("username", { required: true })}  />
                    {/* registrerer data, hvis der er skrevet noget. ellers der kommer en span du skal udfylde */}
                    {errors.username && <span >Du skal udfylde feltet navn</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"  {...register("password", { required: true })}/>
                    {errors.password && <span>Du skal indtaste adgangskode</span>}
                </div>
                <div className={style.buttons}>
                    <button type='submit' >Login</button>
                    <button type='reset'>Nulstil felter</button>
                </div>
            </form>
            </>

            // if logged in, the logout button will show
            :
            <>
                <p>Du er logget ind, som <i>{loginData.username}</i></p>
                <form>
                    <button type="button" onClick={logOut}>Log out</button>
                </form>
            </>
            }
        </section>      
    );
}
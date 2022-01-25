import style from './Main.module.scss'

export const Main = props => {
    return (
        <main>
            {props.children}
        </main>
    )
}
import style from "../About/About.module.css"
export default function About({language}){
    return (
        <div className={style.Container}>
             {language==="spanish"?
             <div className={style.InfoContainer}>
             <h1 className={style.Title}>Hola! bienvenido a mi portfolio.</h1>
                <span>Mi nombre es joaquin, desarrollador web fullstack con experiencia en trabajo
                    en equipo.
                </span>
             </div>:
             <div className={style.InfoContainer}>
             <h1 className={style.Title}>Hi! welcome to my portfolio</h1>
                <span>My name is joaquin, I'm fullstack web developer whith experience in teamwork.
                </span>
             </div>
             }
        </div>
    )
}
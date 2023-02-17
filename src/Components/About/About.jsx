import style from "../About/About.module.css"
import profile from "../../assets/profile.jpg"
export default function About({language}){
    return (
        <div className={style.Container}>
             {language==="spanish"?
              <div>
               <h1 className={style.Title}>Hola! bienvenido a mi portfolio.</h1>
               <div className={style.InfoContainer}>
                <span className={style.info}>Mi nombre es joaquin, desarrollador web fullstack con experiencia en trabajo
                    en equipo.
                </span>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
              </div>
             </div>:

             <div >
                <h1 className={style.Title}>Hi! welcome to my portfolio</h1>
                <div className={style.InfoContainer}>      
                <span className={style.info}>My name is joaquin, I'm fullstack web developer whith experience in teamwork.
                </span>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
               </div>  
             </div>
             }
        </div>

    )
}
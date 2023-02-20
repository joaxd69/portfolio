import darkstyle from "../About/About.module.css"
import lightstyle from "../About/AboutW.module.css"
import profile from "../../assets/profile.jpg"
import { Link } from "react-router-dom"
export default function About({language,darkmode}){
    const style = darkmode?darkstyle:lightstyle
    return (
        <div className={style.Container}>
             {language==="spanish"?
             
              <div>
               <h1 className={style.Title}>Acerca de mi.</h1>
               <div className={style.InfoContainer}>
                <p className={style.info}>
                  Hola! soy Joaquin de 23 años actualmente.Soy desarrollador web fullstack egresado del bootcamp
                  de Soy henry (imagen ), en donde adquiri conocimientos y desarrolle aplicaciones web de manera individual y 
                  de manera grupal. <br />
                  Me adapto a cualquier entorno, me gusta progresar y seguir creciendo el en mundo del desarrollo . <br />
                  Actualmente estoy en busca de poder demostrar mis habilidades como desarrollador a quien confie en mi.
                  Me gusta el back end, el front end y manejar base de datos.
                  Por cualquier propuesta que involucre el desarrollo web ,laboral o no, que tengas para mi puedes
                   <Link to= '/Contact'> contactarme</Link> 
                </p>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
              </div>
             </div>:

             <div >
                <h1 className={style.Title}>About me.</h1>
                <div className={style.InfoContainer}>      
                 <p className={style.info}>
                 Hi! I'm joaquin.Actually I'm 23 years old. I'm fullstack web developer graduated from Soy Henry bootcamp(image)
                 where i acquired knowledge and created web aplications individually and groupally. <br />
                 I adapt to any environment, I like to progress and continue learning in the develompent world. <br />
                 Actually i'm looking to demonstrate my develompent skills whoever trusts me.
                 I like back end, front end and manage databases.
                 For any proposal involving web develompent,even if not work, you can 
                   <Link to= '/Contact'> contact me</Link> 
                 </p>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
               </div>  
             </div>
             }
        </div>

    )
}
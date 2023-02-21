import darkStyle from "./Home.module.css"
import nodarkstyle from './HomeW.module.css'
import imagedev from '../../assets/frontend1.png'
import imageback from '../../assets/backimage4.png'
import imagedb from '../../assets/Database.png'
export default function Home({language,darkmode}){
    const style = darkmode?darkStyle:nodarkstyle
    return(
        <div>
            {language==='spanish'?
            <div className={style.Container}>

              <h1 >Desarrollador web full stack</h1>

             <div className={style.SpanContainer}>
             <span >Hola, mi nombre es joaquin.Soy desarrollador web full stack
                con experiencia  en crear aplicaciones web trabajando tanto en front end,
                 como en back end y base de datos.
              </span> 
             </div> 

             <section className={style.Section1} >
                 <div className={style.Container2}>
                <div className={style.ImageContainer}>
              <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
              <h1 className={style.Title}>Desarrollo Front-end</h1>
              <span>Sitios web responsives,creados para una optima experiencia del usuario.</span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
              <img  src={imageback} alt="" width={210} height={200}/>
                </div>
              <h1 className={style.Title}>Desarrollo Back-end</h1>
              <span>Back end con codigo prolijo,estilo modular,codigos escalables.

              </span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
              <img  src={imagedb} alt="" width={150} height={200}/>
                </div>
              <h1 className={style.Title}>Base de datos</h1>
              <span>Trabajos con base de datos incluidas</span>
              </div>
             </section>
             <hr className={style.Separation}/>
            </div>:

            <div className={style.Container}>
              <h1  >Full stack web developer</h1> 
              <div className={style.SpanContainer}>
               <span>Hi, my name is Joaquin,I'm Full stack web developer with experience in
                 build web aplications, working on back end, front end and database
              </span>
              </div>
              <section className={style.Section1} >
                  <div className={style.Container2}>
                <div className={style.ImageContainer}> 
                <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
                <h1 className={style.Title}>Front-end development</h1>
                <span> Responsive websites built for an optimal user experience</span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
                <img  src={imageback} alt="" width={210} height={200}/>
                </div>
                <h1 className={style.Title}>Back-end development</h1>
                <span>Back-end with ordered code,modular style, scalable</span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
                <img  src={imagedb} alt="" width={150} height={200}/>
                </div>
                <h1 className={style.Title}>Databases</h1>
                <span> Projects with databases</span>
              </div>
              </section>
               <hr className={style.Separation}/>
             
            </div>
            }
        </div>
    )
}
import style from "./Home.module.css"
import imagedev from '../../assets/program3.png'
export default function Home({language}){
    return(
        <div>
            {language==='spanish'?
            <div className={style.Container}>
              <h1 >Desarrollador web full stack</h1>
              <span>Hola, mi nombre es joaquin.Soy desarrollador web full stack
                con experiencia  en crear aplicaciones web trabjando tanto en front end,
                 como en back end y base de datos.
              </span> <br />
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
              <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
              <h1 className={style.Title}>Desarrollo Back-end</h1>
              <span>Back end con codigo prolijo,estilo modular,codigos escalables.

              </span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
              <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
              <h1 className={style.Title}>Base de datos</h1>
              <span>Trabajos con base de datos incluidas</span>
              </div>
             </section>
             
            </div>:

            <div className={style.Container}>

              <h1  >Full stack web developer</h1> 
              <span>Hi, mi name is Joaquin,I'm Full stack web developer with experience in
                 build web aplications, working on back end, front end and database
              </span> <br />
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
                <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
                <h1 className={style.Title}>Back-end development</h1>
                <span>Back-end with ordered code,modular style, scalable</span>
              </div>
              <div className={style.Container2}>
                <div className={style.ImageContainer}>
                <img  src={imagedev} alt="" width={150} height={200}/>
                </div>
                <h1 className={style.Title}>Databases</h1>
                <span> Projects with databases</span>
              </div>
              </section>
            
             
            </div>
            }
        </div>
    )
}
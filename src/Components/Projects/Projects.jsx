import darkstyle from './Projects.module.css'
import lightstyle from './ProjectsW.module.css'
import videogameimg from '../../assets/Videogame.png'
import videogameresp from '../../assets/Videogameresp.jpeg'
import {Link} from 'react-router-dom'
export default function Projects({language,darkmode}){
     const style = darkmode?darkstyle:lightstyle
    return(
        <div className={style.PrincipalContainer}>
            <div className={style.LinksContainer}>
            
               <ul className={style.Links}>
                <span>{language==='spanish'?'Ir a :':'Go to :'} </span>
                <a href="#Videogame">Videogames</a>
                <a href="#Talkap">Talkap</a>
                <a href="#Rick"> Rick y morty app</a>
             </ul> 
            </div>
             
            {language==='spanish'?
            <div className={style.SecondContainer}>
                <h1 className={style.Title}>Mis proyectos</h1>

                <section className={style.Projects}>
                   <div className={style.LeftContainer}>
                        <div className={style.ProjectTitle}>
                        <h1>Videogames</h1>
                    </div>
                    
                    <section className={style.ProjectInfo} id='Videogame'>
                        <span>
                            Mi aplicacion web con tematica de juegos es parte de un proyecto individual realizado en Henry(imagen)
                            en donde aplique todo mis conocimientos aprendidos a lo largo del curso.Trabaje en el front end, back end
                            y base de datos de esta aplicacion.Esta lograda con Javascript, React, Redux,Css,Node.js,Postgress,Express.
                            <br />
                            <Link to='videogames'>Mas detalles</Link>
                        </span>
                    </section>
                   </div>
                   

                   <div className={style.ProjectImage}>
                     <img src={videogameimg} className={style.BigImage} alt='image' />
                     <img src={videogameresp}  className={style.ResponsiveImage} alt='image' />
                   </div>
                </section>

            </div>:

                <div className={style.SecondContainer}>
                   <h1 className={style.Title}>My proyects</h1>

                   <section className={style.Projects}>
                     <div className={style.LeftContainer}>
                      <div className={style.ProjectTitle}>
                         <h1>Videogames</h1>
                     </div>
                     <div className={style.ProjectInfo}>
                       <span>
                        This is my web aplication whith game tematic.I did this project in Henry bootcamp where I
                        applied all my knowledges whta i've learned throughout the cuourse.I worked in front-end,back-end and database in this
                        aplication.This web app is created with  Javascript, React, Redux,Css,Node.js,Postgress,Express.
                        <br />
                        <Link to = 'videogames'>More details</Link>
                       </span>
                      </div>
                    </div>


                <div className={style.ProjectImage}>
                <img src={videogameimg} className={style.BigImage} alt='image' />
                <img src={videogameresp}  className={style.ResponsiveImage} alt='image' />
                </div>
                </section>
                </div>
        }

        </div>
    )
}
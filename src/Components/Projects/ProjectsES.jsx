import darkstyle from './Projects.module.css'
import lightstyle from './ProjectsW.module.css'
import videogameimg from '../../assets/Videogame.jpg'
import videogameresp from '../../assets/Videogameresp.jpeg'
import talkapimg from '../../assets/talkap.png'
import talkapresp from '../../assets/talkapresponsive.jpeg'
import {Link} from 'react-router-dom'

export default function ProjectsEs({darkmode}){
    const style = darkmode?darkstyle:lightstyle
    return(
  
        <div className={style.SecondContainer}>
          <h1 className={style.Title}>Mis proyectos</h1>
          <div className={style.Projects}>
           <div className={style.LeftContainer}>
             <div className={style.ProjectTitle} id='Videogame'>
                <h1>Videogames</h1>
             </div>
            
           <section className={style.ProjectInfo} >
             <span>
             Mi aplicación web con temática de juegos es parte de un proyecto individual realizado en Henry(imagen)
               en donde aplique todos mis conocimientos aprendidos a lo largo del curso. Trabajé en el Front end, back end
               y base de datos de esta aplicación. Esta lograda con Javascript,React,Redux,Css,Node.js,PostgreSQL,Express.
               <br />
               <Link to='videogames'>MAS DETALLES</Link>
            </span>
           </section>
          </div>
        
           <div className={style.ProjectImage}>
             <img src={videogameimg} className={style.BigImage} alt='computeimage' />
             <img src={videogameresp}  className={style.ResponsiveImage} alt='responsiveimage' />
           </div>
        </div>
        <hr />

        <div className={style.Projects}>
           <div className={style.LeftContainer}>
             <div className={style.ProjectTitle} id='Talkap'>
                <h1>Talkap</h1>
             </div>
            
           <section className={style.ProjectInfo} >
             <span>
             Trabaje en equipo en el desarrollo de una aplicación web que fue un proyecto realizado 
                 en el bootcamp de Henry.
                 Este proyecto es una aplicación de chat donde puedes agregar amigos, enviarles audios, mensajes, videos, imágenes a 
                 quien desees.
                 Esta lograda con, socket io, Javascript, React, Redux, Chakra, Css, Express,PostgreSQL , Node.js ,entre otras tecnologías

               <br />
               <Link to='Talkap'>MAS DETALLES</Link>
            </span>
           </section>
          </div>
        
           <div className={style.ProjectImage}>
             <img src={talkapimg} className={style.BigImage} alt='computeimage' />
             <img src={talkapresp}  className={style.ResponsiveImage} alt='responsiveimage' />
           </div>
        </div>

         <div className={style.LastContainer}>
             <h1>OTROS PROYECTOS EN PROCESO....</h1>
             <span>Actualmente me encuentro realizando otros proyectos para sumar a este portfolio.</span>
         </div>
         
    </div>
    )
}
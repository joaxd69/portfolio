import darkstyle from './Projects.module.css'
import lightstyle from './ProjectsW.module.css'
import ProjectsEn from '../Projects/ProjectsEn'
import ProjectsEs from './ProjectsES'
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
          <ProjectsEs darkmode={darkmode}/>:
          <ProjectsEn darkmode={darkmode}/>
        }
        </div>
    )
}
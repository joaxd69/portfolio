import darkstyle from './Projects.module.css'
import lightstyle from './ProjectsW.module.css'
import videogameimg from '../../assets/Videogame.jpg'
import videogameresp from '../../assets/Videogameresp.jpeg'
import talkapimg from '../../assets/talkap.png'
import talkapresp from '../../assets/Talkapresponsive.jpeg'
import {Link} from 'react-router-dom'

export default function ProjectsEn ({darkmode}){
    const style = darkmode?darkstyle:lightstyle
    return(
        
     <div className={style.SecondContainer}>
        <h1 className={style.Title}>My proyects</h1>
      <div className={style.Projects}>

        <div id='Videogame' className={style.LeftContainer}>
           <div className={style.ProjectTitle}>
              <h1>Videogames</h1>
        </div>

        <section  className={style.ProjectInfo}>
            <span>
             This is my web aplication whith game tematic.I did this project in Henry bootcamp where I
             applied all my knowledges whta i've learned throughout the cuourse.I worked in front-end,back-end and database in this
             aplication.This web app is created with  Javascript, React, Redux,Css,Node.js,Postgress,Express.
               <br />
             <Link to = 'videogames'>More details</Link>
            </span>
          </section>
          
        </div>


       <div className={style.ProjectImage}>
          <img src={videogameimg} className={style.BigImage} alt='imagecomputer' />
          <img src={videogameresp}  className={style.ResponsiveImage} alt='responsiveimage' />
         </div>
      </div>
        <hr />
      <div className={style.Projects}>
           <div className={style.LeftContainer}>
             <div id='Talkap' className={style.ProjectTitle}>
                <h1>Talkap</h1>
             </div>
            
           <section className={style.ProjectInfo} >
             <span>
              I worked as a team in develop of a web aplication.It was a project made at Henry bootcamp.
              It's an chat aplication where you can meet or add new friends and send them audio, messages ,videos or images.
              This aplications is achivied with socket io, Javascript, React, Redux, Chakra, Css, Express,Postgress , Node.js ,
              among other technologies.
               <br />
               <Link to='Talkap'>More details</Link>
            </span>
           </section>
          </div>
        
           <div className={style.ProjectImage}>
             <img src={talkapimg} className={style.BigImage} alt='computeimage' />
             <img src={talkapresp}  className={style.ResponsiveImage} alt='responsiveimage' />
           </div>
        </div>
        <div className={style.LastContainer}>
             <h1>OTHER PROJECTS IN PROCESS....</h1>
             <span>Actually i'm working in other projects to add in this portfolio.</span>
         </div>
 </div>
    )
}
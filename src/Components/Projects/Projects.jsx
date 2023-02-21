import darkstyle from './Projects.module.css'
import lightstyle from './ProjectsW.module.css'
import videogameimg from '../../assets/Videogame.png'
import videogameresp from '../../assets/Videogameresp.jpeg'
export default function Projects({language,darkmode}){
     const style = darkmode?darkstyle:lightstyle
    return(
        <div className={style.PrincipalContainer}>

            {language==='spanish'?
            <div className={style.SecondContainer}>
                <h1 className={style.Title}>Mis proyectos</h1>

                <section className={style.Projects}>
                   <div className={style.LeftContainer}>
                        <div className={style.ProjectTitle}>
                        <h1>Videogames</h1>
                    </div>
                    <div className={style.ProjectInfo}>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Doloribus possimus vero dolorum distinctio laborum similique reiciendis 
                            necessitatibus fugiat alias dolores adipisci accusantium, ad illum.
                            Dolor perspiciatis voluptates voluptatem possimus. Deleniti?
                        </span>
                    </div>
                   </div>
                   

                   <div className={style.ProjectImage}>
                     <img src={videogameimg} className={style.BigImage} alt='image' />
                     <img src={videogameresp}  className={style.ResponsiveImage} alt='image' />
                   </div>
                </section>

            </div>:

            <div className={style.SecondContainer} >
                <h1 className={style.Title}>My projects</h1>
                <section className={style.Projects}>

                </section>
            </div>
        }

        </div>
    )
}
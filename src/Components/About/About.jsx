import darkstyle from "../About/About.module.css"
import lightstyle from "../About/AboutW.module.css"
import profile from "../../assets/profile.jpg"
import Henrry from "../../assets/HENRYLOGO.jpg"
import { Link } from "react-router-dom"
import IconComponent from '../IconComponent/IconComponent'
export default function About({language,darkmode}){
    const style = darkmode?darkstyle:lightstyle
    const styledarkmode= darkmode?{backgroundColor:'rgb(166, 169, 172)',marginTop:'15px',padding:'2px'}:
    {backgroundColor:' rgba(255, 255, 255, 0)',marginTop:'15px',padding:'2px'}

    return (
        <div className={style.Container}>
             {language==="spanish"?
             
              <div>
               <h1 className={style.Title}>Acerca de mi.</h1>
               <div className={style.InfoContainer}>
                <p className={style.info}>
                  Hola! soy Joaquin de 23 años actualmente.Soy desarrollador web fullstack egresado del bootcamp
                  de Soy henry <span> <a href="https://www.soyhenry.com/" target='_blank'><img src={Henrry} className={style.henrylogo}/></a> </span> ,
                   en donde adquiri conocimientos y desarrolle aplicaciones web de manera individual y 
                  de manera grupal. <br />
                  Me adapto a cualquier entorno, me gusta progresar y seguir creciendo el en mundo del desarrollo . <br />
                  Actualmente estoy en busca de poder demostrar mis habilidades como desarrollador a quien confie en mi.
                  Me gusta el back end, el front end y manejar base de datos.
                  Por cualquier propuesta que involucre el desarrollo web ,laboral o no, que tengas para mi puedes
                   <Link to= '/Contact'> CONTACTARME</Link> 
                </p>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
              </div>
                      <hr />
              <section className={style.SkillsSection}>
          
                   <article className={style.HardSkills}>
                      <h1> Mis habilidades tecnicas :</h1>    
                        <IconComponent name={'HTML'} height='50' width='50'/>
                      <IconComponent name={'javascript' } height='50' width='50'/>
                        <IconComponent name={'css' } height='50' width='50'/>
                        <IconComponent name={'react'} height='50' width='50'/>
                        <IconComponent name={'redux'} height='50' width='50'/>
                        <IconComponent name={'postgreSQL'} height='50' width='50'/>
                        <IconComponent name={'node'} height='50' width='55' styles={{backgroundColor:'white'}} />
                        <IconComponent name={'express'}  height='30' width='110'
                         styles={styledarkmode} />
                         <IconComponent name={'sequelize'} height='50' width='60'/>
                         <IconComponent name={'chakra'} height='50' width='50'/>

                   </article>

                   <article className={style.SoftSkills}>
                    <h1> Mis habilidades blandas :</h1> 
                    <p>
                      - <span>Trabajo en equipo :</span> Me gusta trabajar en equipo,  me esfuerzo por trabajar de manera efectiva con todas las personas de un equipo,
                      adaptandome a diferentes situaciones o cambios que puedan surgir en un trabajo de equipo. <br />
                      - <span>Empatia :</span>  Me pongo en lugar de los demas para  entender sus perspectivas y necesidades dentro de un proyecto en equipo. <br />
                      - <span>Aprendizaje constante:</span>  Estoy siempre dispuesto a adquirir nuevos conocimientos y habilidades, y  abierto a nuevas formas de trabajar y pensar. <br />
                      - <span>Resolucion de problemas:</span>  Me gusta identificar problemas y encontrar soluciones creativas y efectivas. <br />
                      - <span>Atencion al detalle:</span>Siempre presto atención a los detalles para asegurarme de que el código sea preciso y libre de errores.
                    </p>
                   </article>

                   <article className={style.HardSkills}>
                    <h1> Otros conocimientos: </h1> 

                        <IconComponent name={'stripe'} height='50' width='100'/>
                         <IconComponent name={'nodemailer'} height='50' width='50'/>
                         <IconComponent name={'auth0'} height='50' width='90' 
                         styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                         <IconComponent name={'socket'} height='50' width='50'styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                   </article>
              </section>
             </div>:

             <div >
                <h1 className={style.Title}>About me.</h1>
                <div className={style.InfoContainer}>      
                 <p className={style.info}>
                 Hi! I'm joaquin.Actually I'm 23 years old. I'm fullstack web developer graduated from Soy Henry bootcamp  
                 <span> <a href="https://www.soyhenry.com/" target='_blank'><img src={Henrry} className={style.henrylogo}/></a> </span> 
                 where i acquired knowledge and created web aplications individually and groupally. <br />
                 I adapt to any environment, I like to progress and continue learning in the develompent world. <br />
                 Actually i'm looking to demonstrate my develompent skills whoever trusts me.
                 I like back end, front end and manage databases.
                 For any proposal involving web develompent,even if not work, you can 
                   <Link to= '/Contact'> CONTACT ME</Link> 
                 </p>
                <div className={style.ImageContainer}>
                  <img className={style.image} src={profile} alt="" />  
                </div>
               </div>  
               <hr />
               <section className={style.SkillsSection}>
                  
                  <article className={style.HardSkills}>
                     <h1> My Hardskills:</h1>    
                     <IconComponent name={'HTML' } height='50' width='50'/>
                     <IconComponent name={'javascript' } height='50' width='50'/>
                       <IconComponent name={'css' } height='50' width='50'/>
                       <IconComponent name={'react'} height='50' width='50'/>
                       <IconComponent name={'redux'} height='50' width='50'/>
                       <IconComponent name={'postgreSQL'} height='50' width='50'/>
                       <IconComponent name={'node'} height='50' width='55' styles={{backgroundColor:'white'}} />
                       <IconComponent name={'express'}  height='30' width='110'
                        styles={styledarkmode} />
                        <IconComponent name={'sequelize'} height='50' width='60'/>
                        <IconComponent name={'chakra'} height='50' width='50'/>

                  </article>

                  <article className={style.SoftSkills}>
                   <h1> My SoftSkills :</h1> 
                   <p>
                     - <span>Team work:</span> I like work in team, I strive to work effectively with everyone on a team,
                     adapting to different situations or changes that may arise in a team work. <br />
                     - <span>Empathy :</span> I put myself in other people's shoes to understand their perspectives and needs within a team project. <br />
                     - <span>Constant learning:</span> I am always willing to acquire new knowledge and skills, and open to new ways of working and thinking. <br />
                     - <span>Problem solving:</span> I like to identify problems and find creative and effective solutions. <br />
                     - <span>Attention to details:</span>I always pay attention to detail to make sure the code is accurate and error-free.
                   </p>
                  </article>

                  <article className={style.HardSkills}>
                   <h1>Other knowledge: </h1> 

                       <IconComponent name={'stripe'} height='50' width='100'/>
                        <IconComponent name={'nodemailer'} height='50' width='50'/>
                        <IconComponent name={'auth0'} height='50' width='90' 
                        styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                        <IconComponent name={'socket'} height='50' width='50'styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                  </article>
             </section>
             </div>
             }
        </div>

    )
}
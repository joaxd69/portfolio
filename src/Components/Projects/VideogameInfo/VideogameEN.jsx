import Carrusel from '../../Carrusel/Carrusel'
import darkStyle from './VideogameInfo.module.css'
import lightStyle from './VideogameInfoW.module.css'
import image1 from '../../../assets/Videogame1.jpg'
import image2 from '../../../assets/Videogame2.jpg'
import image3 from '../../../assets/Videogame3.jpg'
import image4 from '../../../assets/Videogame4.jpg'
import image5 from '../../../assets/Videogame5.jpg'
import image6 from '../../../assets/Videogame6.jpg'
import image7 from '../../../assets/Videogame7.jpg'
import image8 from '../../../assets/Videogame8.jpg'
import image9 from '../../../assets/Videogame9.jpg'
import image10 from '../../../assets/Videogame10.jpg'
import image12 from '../../../assets/Videogameresp.jpeg'
import IconComponent from '../../IconComponent/IconComponent'
import { useEffect, useState } from 'react'

export default function VideogameES({darkmode}){
    const style = darkmode?darkStyle:lightStyle  
    const [ actualsection,setActualSection]=useState('Back')
    const [ lastSection,setLastSection]=useState('Back')
    
 
    useEffect(()=>{
     let actualsec=document.getElementById(actualsection);
     let lastsec=document.getElementById(lastSection);
     const action=()=>{
        lastsec.style.backgroundColor='rgb(164, 175, 175)'
        lastsec.style.border='none'
        
        actualsec.style.backgroundColor='rgb(94, 182, 185)'
        actualsec.style.border='1px solid black'
        setLastSection(actualsection)
     }
     action()
     
    },[actualsection,lastSection])

    const [options,setOptions]=useState({
        Front:false,
        Back:true,
        DB:false
    })
  
    let images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image12]
    const handleChange=(e)=>{
      e.preventDefault();
      if(e.target.value==='Front'){setOptions({Front:true,Back:false,DB:false});setActualSection(e.target.value)}
      if(e.target.value==='Back'){setOptions({Front:false,Back:true,DB:false});setActualSection(e.target.value)}
      if(e.target.value==='DB'){setOptions({Front:false,Back:false,DB:true});setActualSection(e.target.value)}
    }
    const styledarkmode= darkmode?{backgroundColor:'rgb(166, 169, 172)',marginTop:'15px',padding:'2px'}:
                                   {backgroundColor:' rgba(255, 255, 255, 0)',marginTop:'15px',padding:'2px'}
    return(
        <div className={style.PrincipalContainer}>
           <h1 className={style.Title}>Individual project : Video game theme</h1> 
          <button className={style.buttondeploy}>
                    <a href="https://videogames-deploy-nine.vercel.app/" target='_blank'>Go to Appweb</a>     
         </button>
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h2>Details :</h2>
                    
                  <p>
                  This web application is my individual project done at henry's bootcamp. The objective was to apply and
                  connect all my knowledge learned during the course.My web application has a front end built with technologies like
                  javascript,react,redux and pure css.
                   .Back end was built with Node.js ,
                   Express for the construction of a rest API that allows to make CRUD operations (Create, Read, Update and Delete),
                   in the server data.
                    My web application has a database built whith postgress controlled with sequelize from my server.
                   </p>
                   <h2>Operation:</h2>
                   <div>
                    <button onClick={handleChange} id='Back' value='Back'>Back end</button>
                    <button onClick={handleChange} id='Front' value='Front'> Front end</button>
                    <button onClick={handleChange} id='DB'value='DB'>Base de datos</button>
                   </div>
                   {options.Back&&<p>
                      Back end: The server connects to an external api, which returns information from more than 800 thousand games.
                      Only 100 games are managed by my server at the beginning, which are sent to the front end. 
                      Through the different routes generated with express, the user from the front end will be able to perform a complete crud,
                       so the user will be able to make requests, 
                       GET to get the games and their details, POST to upload details of a new game that will be saved in the database. 
                      , PUT to edit the details of the game uploaded by the user and DELETE to delete the details of the game created by the user.      
                   </p>}
                  
                    { options.Front&& <p>
                        Front end: The front end receives the data from the different routes of my server. The paginate  sort the 100 games and their details that were configured
                         on my server and their details that were configured on my server and also the games created by the user.
                         The user can search games on the search bar and and in case there are no result can click in "more results",
                         and  will be redirected to a section  where there are more results, these are the games that don't come initially on my server,so
                         my server make another request and return new results.

                        The use can create information about a new game  through a form controlled with javascript, also it is possible to 
                        add games to a favorites section, and delete if the user wants. In addition, the user can edit the information of the game
                        created or delete that information.
                    </p>}
                   {options.DB&&<p>
                      Database: It is responsible for hosting the games created by the user .Sequelize from the server takes care of,
                      to request the data, add new data, delete or edit them, whenever the user requires it.
                    </p>}
                </div>

                <div className={style.CarruselContainer}>
                   <Carrusel images={images}/>
                </div>
            </div>

            <section className={style.TecSection}>
                     <div className={style.TitleSecTec}>
                         <h1 >Technologies used:</h1>   
                     </div>
                    <div className={style.Tecnologies}>
                        <IconComponent name={'javascript' } height='50' width='50'/>
                        <IconComponent name={'css' } height='50' width='50'/>
                        <IconComponent name={'react'} height='50' width='50'/>
                        <IconComponent name={'redux'} height='50' width='50'/>
                        <IconComponent name={'postgres'} height='50' width='50'/>
                        <IconComponent name={'node'} height='50' width='55' styles={{backgroundColor:'white'}} />
                        <IconComponent name={'express'}  height='30' width='110'
                         styles={styledarkmode} />
                    </div>         
            </section>
        </div>
    )
}
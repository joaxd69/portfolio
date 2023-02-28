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
import { Link } from 'react-router-dom'

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
            <Link to='/Projects'>
            <button className={style.GoBack}>Volver atras</button>
            </Link>
            
           <h1 className={style.Title}>Proyecto individual: Temática videojuegos</h1> 
           <button className={style.buttondeploy}>
                    <a href="https://videogames-deploy-nine.vercel.app/" rel="noopener noreferrer" target='_blank'>Ir a la aplicacion web</a>     
         </button>
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h2>Detalles</h2>
                  <p>
                  Esta aplicación web es mi proyecto individual realizado en el bootcamp de Henry que tiene como objetivo aplicar y conectar todos mis conocimientos
                  aprendidos durante la cursada .Mi aplicación web consta de un Front end construido 
                  con tecnologías como javascript,react,redux y css puro. 
                  El back end fue construido con Node.js, Express para la construcción de un API rest que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar ),
                  en los datos del servidor. Mi aplicación web posee una base de datos construida con PostgreSQL manejada con Sequelize desde mi servidor.                   </p>
                   <h2>Funcionamiento</h2>
                   <div>
                    <button onClick={handleChange} id='Back' value='Back'>Back end</button>
                    <button onClick={handleChange} id='Front' value='Front'> Front end</button>
                    <button onClick={handleChange} id='DB'value='DB'>Base de datos</button>
                   </div>
                   {options.Back&&<p>
                    Back end: El servidor se conecta con una api externa, la cual ofrece información de más de 800 mil juegos. Solo 100 juegos son manejados por
                     mi servidor en un inicio, los cuales son enviados al Front end. A través de las distintas, rutas generadas con Express , el usuario desde el 
                     Front end podrá realizar un CRUD completo, ya que podrá hacer peticiones, GET para obtener los juegos y sus detalles, POST para subir detalles 
                     de un nuevo juego que será guardado en la base de datos , PUT para editar los detalles del juego que subió el usuario y DELETE para eliminar 
                     los detalles del juego que creo el usuario.      
                   </p>}
                  
                  { options.Front&& <p>
                    Front end: Desde el Front end se reciben los datos de las distintas rutas de mi servidor. Son paginados los 100 juegos
                      y sus detalles que fueron configurados en mi servidor y también los juegos creados por el usuario. El usuario podrá buscar juegos
                      en la barra de búsqueda y en caso de que no haya resultados podrá elegir en "more results" y será redirigido a una sección
                      donde se obtienen más resultados que son los juegos que no vienen inicialmente en mi servidor, si no que mi servidor hacer otra consulta 
                      y devuelve nuevos juegos. 
                      Puedo crear información acerca de un nuevo juego a través de un formulario controlado con JavaScript, también es posible 
                      agregar juegos a una sección de favoritos, y eliminarlos si quisiéramos. Además, el usuario podrá editar la información del juego
                      creado o eliminar esa información
.
                   </p>}
                   {options.DB&&<p>
                    Base de datos: Se encarga de alojar los juegos creados por el usuario. Sequelize desde el servidor se encarga,
                      de requerir los datos, agregar nuevos datos, eliminarlos o editarlos, cada vez que el usuario lo requiera

                    </p>}
                </div>

                <div className={style.CarruselContainer}>
                   <Carrusel images={images}/>
                </div>

            </div>

            <section className={style.TecSection}>
                     <div className={style.TitleSecTec}>
                         <h1 >Tecnologias usadas :</h1>   
                     </div>
                    <div className={style.Tecnologies}>
                        <IconComponent name={'javascript' } height='50' width='50'/>
                        <IconComponent name={'css' } height='50' width='50'/>
                        <IconComponent name={'react'} height='50' width='50'/>
                        <IconComponent name={'redux'} height='50' width='50'/>
                        <IconComponent name={'postgreSQL'} height='50' width='50'/>
                        <IconComponent name={'node'} height='50' width='55' styles={{backgroundColor:'white'}} />
                        <IconComponent name={'express'}  height='30' width='110'
                         styles={styledarkmode} />
                    </div>         
            </section>
        </div>
    )
}
import image1 from '../../../assets/talkap.png'
import image2 from '../../../assets/talkapresponsive.jpeg'
import image3 from '../../../assets/talkap3.png'
import image4 from '../../../assets/talkap4.png'
import image5 from '../../../assets/talkap5.png'
import image6 from '../../../assets/talkap6.png'
import image7 from '../../../assets/talkap7.png'
import image8 from '../../../assets/talkap8.png'
import image9 from '../../../assets/talkap9.png'
import image10 from '../../../assets/talkap10.png'
import Carrusel from '../../Carrusel/Carrusel'
import darkStyle from './TalkapInfo.module.css'
import lightStyle from './TalkapInfoW.module.css'
import IconComponent from '../../IconComponent/IconComponent'

import { useEffect, useState } from 'react'

export default function TalkapInfoES({darkmode}){
    const style = darkmode?darkStyle:lightStyle  
    const [ actualsection,setActualSection]=useState('Contributions')
    const [ lastSection,setLastSection]=useState('Contributions')
    const [ myworks,setMyworks]=useState('backend')
    
 
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
        Back:false,
        DB:false,
        contribution:true
    })
  
    let images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
    const handleChange=(e)=>{
      e.preventDefault();
      if(e.target.value==='Front'){setOptions({Front:true,Back:false,DB:false,contribution:false});setActualSection(e.target.value)}
      if(e.target.value==='Back'){setOptions({Front:false,Back:true,DB:false,contribution:false});setActualSection(e.target.value)}
      if(e.target.value==='DB'){setOptions({Front:false,Back:false,DB:true,contribution:false});setActualSection(e.target.value)}
      if(e.target.value==='Contributions'){setOptions({Front:false,Back:false,DB:false,contribution:true});setActualSection(e.target.value)}
    }
    const styledarkmode= darkmode?{backgroundColor:'rgb(166, 169, 172)',marginTop:'15px',padding:'2px'}:
                                   {backgroundColor:' rgba(255, 255, 255, 0)',marginTop:'15px',padding:'2px'}
     const handleSelect =(e)=>{
        e.target.value==='backend'?setMyworks('backend'):setMyworks('frontend')
     }
    return(
        <div className={style.PrincipalContainer}>
           <h1 className={style.Title}>Proyecto grupal : Talkap</h1> 
           <button className={style.buttondeploy}>
                    <a href="https://videogames-deploy-nine.vercel.app/" rel="noopener noreferrer" target='_blank'>Ir a la aplicacion web</a>     
         </button>
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h2>Detalles</h2>
                  <p>
                   Esta aplicación web es el proyecto grupal realizado en el bootcamp de henry.Es una aplicacion de chat que permite 
                    varios usuarios, donde podran chatear con usuarios que elijan o en una sala de chat general donde estan todos los usuarios
                   registrados.El usuario puede agregar amigos ,eliminarlos de su lista de amigos, darles una puntuacion e incluso bloquearlos.
                   La aplicacion tiene un panel de administradores, donde los administradores podran ver las estadisticas de la aplicacion, usuarios
                   registrados, total de mensajes enviados, donadores y tambien banear usuarios.El usuario puede enviar mensajes, videos , audios grabados,
                   y hacer donaciones si quisiera.
                   </p>
                   <h2>Funcionamiento</h2>
                   <div>
                    <button onClick={handleChange} id='Contributions' value='Contributions'>Mis aportes.</button>
                    <button onClick={handleChange} id='Back' value='Back'>Back end.</button>
                    <button onClick={handleChange} id='Front' value='Front'> Front end.</button>
                    <button onClick={handleChange} id='DB'value='DB'>Base de datos.</button>
                   </div>
                   {options.Back&&<p>
                      Back end:
                       El back end esta construido con node js, socket.io para manejar datos mas rapidamente en tiempo real,
                       postgreSQL controlado con sequelize para almacenar los distintos datos de la aplicacion.
                       Se uso express para el manejo de algunas rutas.Tambien se implementaron servicios externos, Cloudinary para 
                       el manejo de imagenes,videos,audios, Nodemailer para el envios mails a los usuarios, stripe  para recibir donaciones,   
                   </p>}
                  
                  { options.Front&& <p>
                      Front end:El front end esta construido con Javascript,React, redux toolkit para manejar estados globales,
                      Chakra como framework de componentes estilizados , css, socket.io y auth 0 para el registro de usuarios.
                      La aplicacion tiene una landing page donde el usuario podra acceder a una seccion de about us y a una seccion de 
                      de preguntas frecuentes sobre la aplicacion y sus respuestas.
                      El usuario podra loguearse o registrarse si no lo esta.Cuando el usuario se registra , se le envia un mail de bienvenida,
                      puede chatear con cualquier usuario registrado en la aplicacion.
                      Es posible realizar donaciones para los desarrolladores atraves de un formulario que provee Stripe, luego de la donacion,
                      el usuarios recibe un mail de agradecimiento,y una mensaje de agradecimiento en la aplicacion.
                   </p>}
                   {options.DB&&<p>
                      Base de datos: Se encarga de alojar los datos de los usuarios, sus chats,sus amigos, sus puntuaciones.
                      Tambien guarda datos generales,como la cantidad total de usuarios, el total de los mensajes de toda la
                      aplicacion,si son donadores o no.
                    </p>}
                    {options.contribution&&<p>
                        Mis aportes fueron: <select name="" id="" onChange={handleSelect}> 
                                  <option value="backend">Back end</option>
                                  <option value="frontend">Front end</option>
                                 </select>
                         { myworks==='backend'&& <p>
                            -Incorporar a Cloudinary como servicio para manejar imagenes,videos y audios que los usuarios envian, y guardarlos
                            en la base de datos. <br />
                            -Incorporar Stripe para que el usuario pueda hacer donaciones, y devolver mensaje de agradecimiento. <br />
                            -Incorporar una lista de los usuarios que son donadores.
                      </p> }
                       {  myworks==='frontend'&& <p>
                        -Permitir que el usuario pueda enviar imagenes y videos desde su galeria , convirtiendo los archivos en codigo 
                        base 64 para que pueda ser recibido en mi servidor.<br />
                        -Permitir que el usuario pueda grabar audios con su microfono y enviarlos.El audio tambien es convertido en codigo
                        legible para el servidor. <br />
                       - Lograr que las imagenes, videos y audios sean renderizados en los chats. <br />
                       - Mostrar mensaje de agradecimiento, segundos despues de que el usuario hiciera una donacion.</p> }
                    </p>

                    }
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
                        <IconComponent name={'postgres'} height='50' width='50'/>
                        <IconComponent name={'node'} height='50' width='55' styles={{backgroundColor:'white'}} />
                        <IconComponent name={'stripe'} height='50' width='100'/>
                        <IconComponent name={'express'}  height='30' width='110'
                         styles={styledarkmode} />
                         <IconComponent name={'nodemailer'} height='50' width='50'/>
                         <IconComponent name={'sequelize'} height='50' width='60'/>
                         <IconComponent name={'auth0'} height='50' width='90' 
                         styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                         <IconComponent name={'socket'} height='50' width='50'styles={{backgroundColor:'rgb(166, 169, 172)'}}/>
                         <IconComponent name={'chakra'} height='50' width='50'/>
                         
                    </div>         
            </section>
        </div>
    )
}
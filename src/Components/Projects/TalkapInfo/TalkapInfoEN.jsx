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

export default function TalkapInfoEN({darkmode}){
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
                    <h2>Details</h2>
                  <p>
                    This web application is the group project done in henry's bootcamp.It is a chat application,
                    It is a chat application that allows many users and they  chat with each other in the main room or
                    in private with a specific user.The user can add users to friend list or delete them if the user want,
                    also the user can give a feedback to other users or block them.
                    
                    This web app has a administrations panel where the administrations can see the application statistics,
                    for example, total registered users,total sended messages, donor users and can block any user.
                     
                    The user can send text messages, audios messages,videos and send donations if the user want.
                   </p>
                   <h2>Funcionamiento</h2>
                   <div>
                    <button onClick={handleChange} id='Contributions' value='Contributions'>Mis aportes.</button>
                    <button onClick={handleChange} id='Back' value='Back'>Back end.</button>
                    <button onClick={handleChange} id='Front' value='Front'> Front end.</button>
                    <button onClick={handleChange} id='DB'value='DB'>Base de datos.</button>
                   </div>
                   {options.Back&&<p>
                    -The back end is built whit node.js,sockte.io to handle data faster in real time. <br />
                    -PostgreSQL controled by sequelize to host application data <br />
                    -Express js , for the creation of query paths <br />
                    -Were also implemented external services,like cloudinary for images ,videos,audios management <br /> 
                    -Nodemailer for send mails to users <br />
                    -Finally stripe  to  receive donations. 
                   </p>}
                  
                  { options.Front&& <p>
                      The front end is built with Javascript,React.js,Redux toolkit to manage global states <br />
                      Chakra.ui  as a framework of styled components and css <br />
                      Socket.io to listen to socket.io routes from server. <br />
                      Auth0  to users authentications <br />
                      
                      The app has a landing page  where the user can go to about section or
                      frequent questions section about the application and their answers.
                      
                      The user can login or register if is'nt registered.When the user registers
                      an welcome  email will be sent to the user email.
                      All users can chat whith any registered user or chat among all users in general chat.

                      it is possible to make donations to developers through a form provided by Stripe, after the donation,
                      the user receives a thank you email,and a thank you message in the application.
                   </p>}
                   {options.DB&&<p>

                     Database: 
                      Database was made with postgreSQl and sequelize.
                      It is responsible for hosting user data, 
                      their chats,their friends, their scores etc.
                      
                      General data are stored for example: the total number of
                       users, the total number of messages in the entire
                      application,and information about who are donors.
                    </p>}
                    {options.contribution&&<p>
                        My contributions:  <select name="" id="" onChange={handleSelect}> 
                                  <option value="backend">Back end</option>
                                  <option value="frontend">Front end</option>
                                 </select>
                         { myworks==='backend'&& <p>

                            -Incorporate Cloudinary as a service to manage images, videos 
                            and audios that users send, and save them in the database. <br />
                            -Incorporate Stripe so that the user can make donations, and return a thank you message. <br />
                            -Incorporate a list of users donor users.
                      </p> }
                       {  myworks==='frontend'&& <p>
                       -Allow the user to send images and videos from his gallery,converting the files into base 64 so that it can be received on the server.<br />
                       -Allow the users can 
                        -Allow the user to record audios with his microphone and send them to the user.The audio is also converted to server-readable code. <br />
                        - Make images, videos and audios visible in chats. <br />
                        - Display a thank you message, seconds after the user made a donation.</p> }
                    </p>

                    }
                </div>

                <div className={style.CarruselContainer}>
                   <Carrusel images={images}/>
                </div>

            </div>

            <section className={style.TecSection}>
                     <div className={style.TitleSecTec}>
                         <h1 >Technologies used :</h1>   
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
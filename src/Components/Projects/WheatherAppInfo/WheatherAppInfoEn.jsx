import darkstyle from './Wheather.module.css'
import lightStyle from './WheatherW.module.css'
import Carrusel from '../../Carrusel/Carrusel'
import IconComponent from '../../IconComponent/IconComponent'
import image1 from '../../../assets/wheatherapp1.png'
import image2 from '../../../assets/wheatherapp2.png'
import image3 from '../../../assets/wheatherapp3.png'
import image4 from '../../../assets/wheatherapp4.png'
import image5 from '../../../assets/wheatherapp5resp.png'
import image6 from '../../../assets/wheatherapp6resp.png'
import image7 from '../../../assets/wheatherapp7resp.png'
import image8 from '../../../assets/wheatherapp8resp.png'


import { Link } from 'react-router-dom'
export default function WheaterAppInfoEn ({darkmode}){
   
    const style = darkmode?darkstyle:lightStyle 
  
    let images=[image1,image2,image3,image4,image5,image6,image7,image8]
  
    return(
        <div className={style.PrincipalContainer}>
            <Link to='/Projects'>
            <button className={style.GoBack}>Go back.</button>
            </Link>
            
           <h1 className={style.Title}>Wheather App</h1> 
           
           <button className={style.buttondeploy}>
                    <a href="https://wheater-app-gules.vercel.app/" rel="noopener noreferrer" target='_blank'>Ir a la aplicacion web</a>     
         </button>
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h2>Details :</h2>
                  <p>

                  This web application shows the weather in real time of the user location and his location in the map.The user will be able to see
                  the current weather and the weather for the next 2 days (api limitation).It is possible to search to find the wheater of other places,
                  or interact with the map and choose a location to display the weather.Also is possible change the language of the application, if the 
                  user would like to.

                 
                  </p>
                   <h2>Operation:</h2>
                  <p>
                  The application was built with React and TypeScript.To display information about the weather, we integrated the api from <a href="https://www.weatherapi.com/" target='_blank' without rel="noreferrer">Wheather api</a>,
                    and  <a href="https://www.google.com.ar/maps" target='_blank' without rel="noreferrer">Google Maps</a> api to integrate an interactive map.For the styles I used pure Css with media querys for a responsive design.
                  </p>
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
                        <IconComponent name={'react'} height='50' width='50'/>
                        <IconComponent name={'css' } height='50' width='50'/>
                        <IconComponent name={'TypeScript'} height='50' width='50'/>
                             
                    </div>         
            </section>
        </div>
    )
}
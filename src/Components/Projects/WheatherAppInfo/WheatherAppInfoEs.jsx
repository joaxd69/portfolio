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
export default function WheaterAppInfoEs ({darkmode}){
   
    const style = darkmode?darkstyle:lightStyle 
  
    let images=[image1,image2,image3,image4,image5,image6,image7,image8]
  
    return(
        <div className={style.PrincipalContainer}>
            <Link to='/Projects'>
            <button className={style.GoBack}>Volver atras</button>
            </Link>
            
           <h1 className={style.Title}>Wheather App</h1> 
           
           <button className={style.buttondeploy}>
                    <a href="https://wheater-app-gules.vercel.app/" rel="noopener noreferrer" target='_blank'>Ir a la aplicacion web</a>     
         </button>
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h2>Detalles</h2>
                  <p>
                  Aplicacion web que muestra el clima en tiempo real del lugar donde se encuentre el usuario , y su ubicacion en un mapa.El usuario podra ver
                  el clima actual y el clima para los siguientes 2 dias (limitacion de la api).Es posible realizar busquedas para encontrar
                  el clima de otros lugares o interactuar con el mapa y elegir una ubicacion para mostrar su clima.Se puede cambiar el idioma de la aplicacion, si 
                  usuario quisiera.
                  </p>
                   <h2>Funcionamiento</h2>
                  <p>
                    La aplicacion esta construida con React y TypeScript. Para mostrar informacion acerca del clima se integro la api de <a href="https://www.weatherapi.com/" target='_blank' without rel="noreferrer">Wheather api</a>,
                    y la api de <a href="https://www.google.com.ar/maps" target='_blank' without rel="noreferrer">Google Maps</a> para integrar un mapa interactivo.Para los estilos use Css puro con media querys para un diseño responsive.
                  </p>
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
                        <IconComponent name={'react'} height='50' width='50'/>
                        <IconComponent name={'css' } height='50' width='50'/>
                        <IconComponent name={'TypeScript'} height='50' width='50'/>
                             
                    </div>         
            </section>
        </div>
    )
}
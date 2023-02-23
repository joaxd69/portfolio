import Carrusel from '../../Carrusel/Carrusel'
import darkStyle from './VideogameInfo.module.css'
import lightStyle from './VideogameInfoW.module.css'
import image1 from '../../../assets/Videogame1.png'
import image2 from '../../../assets/Videogame2.png'
import image3 from '../../../assets/Videogame3.png'
import image4 from '../../../assets/Videogame4.png'
import image5 from '../../../assets/Videogame5.png'
import image6 from '../../../assets/Videogame6.png'
import image7 from '../../../assets/Videogame7.png'
import image8 from '../../../assets/Videogame8.png'
import image9 from '../../../assets/Videogame9.png'
import image10 from '../../../assets/Videogame10.png'
import image12 from '../../../assets/Videogameresp.jpeg'
export default function VideogameES({darkmode}){
    const style = darkmode?darkStyle:lightStyle
    let images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image12]
    return(
        <div className={style.PrincipalContainer}>
           <h1>Proyecto individual : Tematica videojuegos</h1> 
          
            <div className={style.SecondContainer}>

                <div className={style.DetailsContainer}>
                    <h1>detalles</h1>
                   <span>
                    Esta aplicacion web consta de un front end, y un back end realizados por mi, ademas tambien posee una base,
                    de datos.Consume una restapi que ofrece (link de api), que proporciona informacion sobre mas de 800 mil juegos,
                    de los cuales 100 son traidos a mi servidor y luego paginados en mi front end.
                    Mi servidor se conecta con la api y obtiene los datos ademas establece las rutas donde seran requeridos
                    los distintos datos que obtuvo de la api.Las diferentes rutas de  mi servidor estan  creadas con express.
                    Mi front end recibe los datos de mi servidor y los renderiza para que sean visibles en mi aplicacion web.
                    La aplicacion web consta de un paginado para ordenar los 100 juegos que llegan,podremos ver los detalles de los juegos,
                    como asi tambien agregar a favoritos y elminarlos de favoritos si quisieramos.
                    Podemos crear un nuevo juego y sus detalles, este sera guardado en la base de datos, y podra ser editado
                    o  eliminado si quisieramos.
                   </span>
                </div>

                <div className={style.CarruselContainer}>
                   <Carrusel images={images}/>
                </div>

            </div>

            <div className={style.Teconologies}>

                    <h1 >tecnologias usadas</h1> 
                    <span>javascript</span>
                    <span>react</span>
                    <span>redux</span>
                    <span>postgres</span>
                    <span>Css</span>
                    <span>Node.js</span>
                    <span>Express</span>
            </div>
        </div>
    )
}
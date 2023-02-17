import style from "./Nav.module.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Nav ({languaje}){
    return (
        <div>
            {languaje==='spanish'?
               <nav className={style.Nav}> 

               <input type="checkbox" className={style.check} name=""
                id="check" style={{display:'none'}} />
               <label htmlFor="check" >
                <FontAwesomeIcon icon={faBars} className={style.Menu} />
                </label>
                  
                
               <div className={style.TitleContainer}>
                <h1 className={style.Title}>
                Mi portfolio
               </h1>
               </div>
               
              <div className={style.ButtonsContainer}>
                 <button className={style.Buttons}>
                    <a href="">Sobre mi</a>
                </button>
                <button className={style.Buttons}>
                    <a href="">Proyectos</a>
                </button>
                <button className={style.Buttons}>
                    <a href="">Contacto</a>
                </button>
                <button className={style.Buttons}>
                    <a href="">Servicios</a>
                </button>
                
                <button className={style.Buttons}>
                    <a href="">Proceso</a>
                </button>
              </div>
               
            </nav>:
           <nav className={style.Nav}> 

           <input type="checkbox" className={style.check} name=""
            id="check" style={{display:'none'}} />
           <label htmlFor="check" >
            <FontAwesomeIcon icon={faBars} className={style.Menu} />
            </label>
              
            
           <div className={style.TitleContainer}>
            <h1 className={style.Title}>
            My portfolio
           </h1>
           </div>
           
          <div className={style.ButtonsContainer}>
             <button className={style.Buttons}>
                <a href="">About me</a>
            </button>
            <button className={style.Buttons}>
                <a href="">Project</a>
            </button>
            <button className={style.Buttons}>
                <a href="">Contact</a>
            </button>
            <button className={style.Buttons}>
                <a href="">Services</a>
            </button>
            
            <button className={style.Buttons}>
                <a href="">Process</a>
            </button>
          </div>
           
        </nav>
            
        }
        </div>
    )
}
import darkstyle from "./Nav.module.css"
import lightstyle from "./NavW.module.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export default function Nav ({languaje,darkmode}){
   const style =darkmode?darkstyle:lightstyle
   const backgroundColor=darkmode?{backgroundColor:'black'}:
                                  {backgroundColor:'lightblue'}
   const fontcolor = darkmode?{color:'white'}:{color:'black'}
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
                    <Link to = '/'>
                    <span>Home</span>
                    </Link>
                    
                </button>
                <button className={style.Buttons}>
                    <Link to = '/Projects'>
                    Proyectos
                    </Link>
                    
                </button>
                <button className={style.Buttons}>
                    <Link to='/Services'>                    
                    Servicios
                    </Link>
                </button>
                
                <button className={style.Buttons}>
                    <Link to='/About'>
                     Sobre mi
                    </Link>
                </button>
                <button className={style.Buttons} style={backgroundColor} >
                    <Link to='/Contact' style={fontcolor}>
                      Contacto
                    </Link>
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
                <Link to= '/'>
                Home
                </Link>
            </button>
            <button className={style.Buttons}>
                <Link to ='/Projects'>
                Project
                </Link>
            </button>
            <button className={style.Buttons}>
                <Link to='/Services'>
                Services
                </Link>
            </button>
            
            <button className={style.Buttons}>
                <Link to='/About'>
                About me
                </Link>
            </button>
            <button className={style.Buttons} id={style.contact} style={backgroundColor}>
                <Link to = '/Contact' style={fontcolor}>
                Contact
                </Link>
            </button>
          </div>
           
        </nav>
            
        }
        </div>
    )
}
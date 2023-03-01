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
   const resetnav=()=>{
    const navOn=document.getElementById('check')
    navOn.checked=false
   }
    

    return (
        <div className={style.initialdiv}>
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
                
              <input type="checkbox" className={style.check} name=""
                id="check" style={{display:'none'}} />
               <label htmlFor="check" >
                <FontAwesomeIcon icon={faBars} className={style.Menu2} />
                </label>
                  
                 <button className={style.Buttons}>
                    <Link onClick={resetnav} to = '/'>
                    <span>Home</span>
                    </Link>
                    
                </button>
                <hr />
                <button className={style.Buttons}>
                    <Link onClick={resetnav} to = '/Projects'>
                    Proyectos
                    </Link>
                </button> <hr />
                <button className={style.Buttons}>
                    <Link onClick={resetnav} to='/Services'>                    
                    Servicios
                    </Link>
                </button>
                <hr />
                <button className={style.Buttons}>
                    <Link onClick={resetnav} to='/About'>
                     Sobre mi
                    </Link>
                </button> <hr />
                <button className={style.Buttons} style={backgroundColor} >
                    <Link onClick={resetnav} to='/Contact' style={fontcolor}>
                      Contacto
                    </Link>
                </button>
                <hr />
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
          <input type="checkbox" className={style.check} name=""
                id="check" style={{display:'none'}} />
               <label htmlFor="check" >
                <FontAwesomeIcon icon={faBars} className={style.Menu2} />
                </label>
          <button className={style.Buttons}>
                <Link onClick={resetnav} to= '/' >
                Home
                </Link>
            </button>
            <hr />
            <button className={style.Buttons}>
                <Link onClick={resetnav} to ='/Projects'>
                Project
                </Link>
            </button>
            <hr />
            <button className={style.Buttons}>
                <Link onClick={resetnav} to='/Services'>
                Services
                </Link>
            </button>
            <hr />
            <button className={style.Buttons}>
                <Link onClick={resetnav} to='/About'>
                About me
                </Link>
            </button>
            <hr />
            <button className={style.Buttons} id={style.contact} style={backgroundColor}>
                <Link onClick={resetnav} to = '/Contact' style={fontcolor}>
                Contact
                </Link>
            </button>
            <hr />
          </div>
           
        </nav>
            
        }
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun ,faMoon} from '@fortawesome/free-solid-svg-icons';
import styledark from './Darkmode.module.css'
import stylelight from './Darkmodew.module.css'
export default function Darkmode ({darkmode,language,handleDarkChange}){
      const style = darkmode?styledark:stylelight
   return (
  
        language==="spanish"?
       (

          darkmode ?<button className={style.Buttons} onClick={handleDarkChange} value='white'>  
                     Modo claro
                     <FontAwesomeIcon icon={faSun}  color='yellow'/>
                    </button>:
                    <button className={style.Buttons} onClick={handleDarkChange} value='dark'>
                        Modo oscuro
                        <FontAwesomeIcon icon={faMoon}/>
                    </button>
          
          
       )
         :   
       
         (darkmode ?<button className={style.Buttons} onClick={handleDarkChange} value='white'>  
                     Light mode
                     <FontAwesomeIcon icon={faSun}  color='yellow'/>
                    </button>:
                    <button className={style.Buttons} onClick={handleDarkChange} value='dark'>
                        Dark mode
                        <FontAwesomeIcon icon={faMoon}/>
                    </button>
          )
        
        
        
   )
}
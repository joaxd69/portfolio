import VideogameEN from "./VideogameEN";
import VideogameES from "./VideogameES";

export default function VideogameInfo ({language,darkmode}){
    return(
        language==='spanish'?<VideogameES darkmode={darkmode}/> :
               <VideogameEN darkmode={darkmode}/>
          )
}
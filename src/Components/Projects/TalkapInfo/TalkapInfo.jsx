import TalkapInfoEN from "./TalkapInfoEN";
import TalkapInfoES from "./TalkapInfoES";

export default function TalkapInfo ({darkmode,language}){
 return(
    language==='spanish'?
     <TalkapInfoES darkmode={darkmode}/>:
     <TalkapInfoEN darkmode={darkmode}/>
 )
}
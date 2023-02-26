import ServicesEN from "./ServicesEN";
import ServicesES from "./ServicesES";

export default function Services({darkmode,language}){
    return (
        language==='spanish'?
        <ServicesES darkmode={darkmode}/>:
        <ServicesEN darkmode={darkmode}/>
    )
}
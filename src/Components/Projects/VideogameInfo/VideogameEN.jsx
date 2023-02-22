import darkStyle from './VideogameInfo.module.css'
import lightStyle from './VideogameInfoW.module.css'
export default function VideogameEN({darkmode}){
    const style = darkmode?darkStyle:lightStyle
    return(
        <div>
    <h1> Individual Project: Videogames tematic</h1>
    </div>
    )
}
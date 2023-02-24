import javascript from '../../icons/Javascript.jpg'
import css from '../../icons/css.png'
import react from '../../icons/react.png'
import redux from '../../icons/redux.jpg'
import postgres from '../../icons/postgress.png'
import node from '../../icons/node.png'
import express from '../../icons/express.jpg'
export default function IconComponent ({name,width,height,styles}){
  
    let icon={
        javascript,
        css,
        react,
        redux,
        postgres,
        node,
        express
     }
     const style= styles?styles:{}
    return (
        <div>
        {icon[name]&&
        <img src={icon[name]} height={height} width={width} style={style}/>
        }
        <h5 style={{margin:'0'}}>{name}</h5>
        </div>
    )
}
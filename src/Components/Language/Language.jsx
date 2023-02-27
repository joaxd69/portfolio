import style from './Language.module.css'
export default function Language({language,handleChange,darkmode}){
  const color = darkmode?{color:'white'}:{color:'black'}
  return (

    <div>
    {language==="spanish"?
          <div className='Language'>
         <span style={color}>Cambiar idioma :</span>
         <select className={style.Selects} onChange={handleChange}>
          <option value={"spanish"}>Español </option>
          <option value={"english"}>Ingles </option>
          
         </select>
         </div>:
         <div className='Language'>
          <span style={color}>Change language :</span>
          <select className={style.Selects} onChange={handleChange}>
           <option value={"spanish"}>Spanish </option>
           <option value={"english"}> English </option>
          </select>  
          </div>
        } 
    </div>
    
  )
}
export default function Language({language,handleChange}){
  return (
    <div>
    {language==="spanish"?
          <div className='Language'>
         <span>Cambiar idioma</span>
         <select onChange={handleChange}>
          <option value={"spanish"}>Español </option>
          <option value={"english"}>Ingles </option>
          
         </select>
         </div>:
         <div className='Language'>
          <span>Change language</span>
          <select onChange={handleChange}>
           <option value={"spanish"}>Spanish </option>
           <option value={"english"}> English </option>
          </select>  
          </div>
        } 
    </div>
    
  )
}
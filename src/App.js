import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
function App() {

  const [language,setLanguage]= useState('spanish')
  const handleChange=(e)=>setLanguage(e.target.value)
  return (
    <div className="App">
      <Nav languaje={language}/>
      
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
     <About language={language} />
    </div>
  );
}

export default App;

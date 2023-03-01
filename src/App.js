import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Nav/Nav';
import { Route, Routes, } from 'react-router-dom';
import Language from './Components/Language/Language';
import Home from './Components/Home/Home';
import Darkmode from './Components/Darkmode/Darkmode';
import Projects from './Components/Projects/Projects';
import VideogameInfo from './Components/Projects/VideogameInfo/VideogameInfo';
import TalkapInfo from './Components/Projects/TalkapInfo/TalkapInfo';
import Services from './Components/Services/Services';
function App() {

  const [language,setLanguage]= useState('spanish')
  const [darkMode,setDarkMode]= useState(false)
  const handleChange=(e)=>setLanguage(e.target.value)
  const handleDarkChange=(e)=>{
    e.target.value==='dark'?setDarkMode(true):setDarkMode(false); 
  }
  document.body.style.backgroundColor = darkMode?'rgb(27, 25, 34)':'white';
  return (
    <div className="App">
      <Nav languaje={language} darkmode={darkMode}/>
      <section className='config'>
      <Language language={language} 
      handleChange={handleChange}
      darkmode={darkMode} />
      <Darkmode language={language}
      darkmode={darkMode}
      handleDarkChange={handleDarkChange}/>
   
      </section>
      

      <Routes>
        <Route path='/' element={<Home language={language} darkmode={darkMode}/>}/>
        <Route  path='/about' element={<About language={language} darkmode={darkMode}/>}/>
        <Route  path='/Contact' element={<Contact language={language} darkmode={darkMode}/>}/>
        <Route  path='/Projects' element={<Projects language={language} darkmode={darkMode}/>}/>
        <Route  path='/Projects/Videogames' element={<VideogameInfo language={language} darkmode={darkMode}/>}/>
        <Route  path='/Projects/Talkap' element={<TalkapInfo language={language} darkmode={darkMode}/>}/>
        <Route  path='/Services' element={<Services language={language} darkmode={darkMode}/>}/>
      </Routes>
    </div>
    
  );
}

export default App;

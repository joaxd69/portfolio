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
import VideogameInfo from './Components/VideogameInfo/VideogameInfo';
function App() {

  const [language,setLanguage]= useState('spanish')
  const [darkMode,setDarkMode]= useState(true)
  const handleChange=(e)=>setLanguage(e.target.value)
  const handleDarkChange=(e)=>{
    e.target.value==='dark'?setDarkMode(true):setDarkMode(false); 
  }
  document.body.style.backgroundColor = darkMode?'rgb(27, 25, 34)':'white';
  return (
    <div className="App">
      <Nav languaje={language} darkmode={darkMode}/>
      <Darkmode language={language}
      darkmode={darkMode}
      handleDarkChange={handleDarkChange}/>
      <Language language={language} 
      handleChange={handleChange}
      darkmode={darkMode} />

      <Routes>
        <Route path='/' element={<Home language={language} darkmode={darkMode}/>}/>
        <Route  path='/about' element={<About language={language} darkmode={darkMode}/>}/>
        <Route  path='/Contact' element={<Contact/>}/>
        <Route  path='/Projects' element={<Projects language={language} darkmode={darkMode}/>}/>
        <Route  path='/Projects/Videogames' element={<VideogameInfo language={language} darkmode={darkMode}/>}/>
      </Routes>
    </div>
    
  );
}

export default App;

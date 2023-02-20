import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Nav/Nav';
import { Route, Routes, } from 'react-router-dom';
import Language from './Components/Language/Language';
import Home from './Components/Home/Home';
function App() {

  const [language,setLanguage]= useState('spanish')
  const handleChange=(e)=>setLanguage(e.target.value)
  return (
    <div className="App">
      <Nav languaje={language}/>
      <Language language={language} 
      handleChange={handleChange}/>
      <Routes>
        <Route path='/' element={<Home language={language}/>}/>
        <Route  path='/about' element={<About language={language}/>}/>
        <Route  path='/Contact' element={<Contact/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

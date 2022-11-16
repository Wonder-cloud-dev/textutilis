
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
 const [mode, setMode] =useState('light');
 const [alert, setAlert] =useState(null);

 const showAlert =(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
     setAlert(null)
  }, 1500);
 }

 const toggleMode =()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743'
    document.title = 'TextUtilis - Dark Mode'
    showAlert("Dark Mode has been Enabled", "success");
  } else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    document.title = 'TextUtilis - Light Mode'
    showAlert("Light Mode has been Enabled", "success");
  }
 }

  return (
   <>
   <Router>
    <Navbar title="textUtilis" mode={mode} toggleMode={toggleMode} aboutText="About"  /> 
    <Alert alert={alert}/>
    <diiv className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
    
        
        
        
    </Routes>
  </diiv>
  </Router>
     

      
    </>
 );
}

export default App;

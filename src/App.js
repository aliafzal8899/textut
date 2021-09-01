
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    },3000);
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#06001b";
      showalert("Dark Mode Enable","success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white"
    }

  }
  return (
    <>
     {/* <Router> */}
     <Navbar title="Textutils" mode={mode} togglemode={togglemode}></Navbar>
  <Alert alert={alert}/>
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
         */}
          {/* <Route path="/"> */}
          <TextForm title="Enter Text To Convert" mode={mode} showalert={showalert}></TextForm>

          {/* </Route>
        </Switch>
     </Router> */}
 
  

  </>
  );
}

export default App;

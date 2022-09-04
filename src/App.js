import  { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }



  const togglemode = ()=>{
    if (mode === "light"){
      setMode("dark");
     document.body.style.backgroundColor='hsl(242deg 82% 21%)';
     showAlert("dark mode has been enable","sucess")
    } 
       else {setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","sucess")
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert= {alert}/>


      <div className="container my-3">
        
       
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Home">
          <Textform heading="Enter the text to analysis" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;

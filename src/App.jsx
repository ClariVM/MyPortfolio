import React from "react";
import {NavBar, Home, About, Project, Education, Contact,Footer} from './components'; 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
    return (
      <>
       <NavBar/>
       <Home/>
       <About/>
       <Project/>
       <Education/>
       <Contact/>
       <Footer/>
      </>
    );
  }
  
  export default App;
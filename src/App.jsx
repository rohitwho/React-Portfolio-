// import { useState } from 'react'
// import React from "react";
// import './App.css'
import Header from "./Components/Home/header"
import Contact from "./Components/contact/contact"
import Hero from "./Components/Home/hero"
import Project from "./Components/projects/project"
import About from "./pages/About-Me"
import Socials from "./pages/Socials"
import Portfolio from "./Components/Main"
import {NextUIProvider} from "@nextui-org/react";


import "./styles.css"

function App() {
 

  return (<div>
    <NextUIProvider>



<Portfolio/>
  <About/>
<Project/>
<Socials/>
    </NextUIProvider>
  
  
  
  </div>)

}

export default App

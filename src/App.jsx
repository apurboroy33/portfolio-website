import React from "react";
import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from "./components/sections/Hero/Hero.jsx"
import About from "./components/sections/About/About.jsx"

function App() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  )
}

export default App

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Hero from "./components/sections/Hero.jsx"
import About from "./components/sections/About.jsx"
import Contact from './components/sections/Contact.jsx'

// function App() {
//     return (
//         <div>
//             <Hero className=""/>
//             <About />
//             <Contact />
//         </div>
//     );
// }

// export default App;

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-400">
          PORTFOLIO
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I’m Apurbo. I build thoughtful websites.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m a beginner web developer creating clean, useful experiences.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          View my work
        </a>
      </section>
    </main>
  );
}
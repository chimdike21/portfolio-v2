import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Services from './components/services/services'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import { useEffect } from 'react'
import './index.css'

function App() {
  
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add('active')
          }
          else{
            entry.target.classList.remove('active')
          }


        })
      },
      {
        threshold:0.15
      }
    )

    sections.forEach((section)=>{
      observer.observe(section)
    })

    return ()=> observer.disconnect()

  },[])


  return (
    <>
      <Navbar />
      
      <div className="reveal">
        <Hero />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Services />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App

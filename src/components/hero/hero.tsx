import { useRef, useState } from 'react'
import './hero.css'

function Hero() {
    const [mousePosition, setMousePosition] = useState({

        x: window.innerWidth / 2,

        y: window.innerHeight / 2

    })

    const heroRef = useRef<HTMLElement>(null)

    const handleMouseMove = (
        e: React.MouseEvent<HTMLElement>
    ) => {

        if(!heroRef.current) return

        const rect = heroRef.current.getBoundingClientRect()

        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <section
        className="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
    >
        <div

className="cursor-glow"

style={{

    left: mousePosition.x,

    top: mousePosition.y

}}

/>
        <div className="hero-content">
          <h1 className="hero-title">Chimdi</h1>
  
          <h2 className="hero-subtitle">
            Frontend Developer & App Builder
          </h2>
  
          <p className="hero-text">
            I build modern websites and applications with clean design,
            smooth interactions, and great user experiences.
          </p>
  
          <div className="hero-buttons">
            <button>View Projects</button>
            <button>Contact Me</button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
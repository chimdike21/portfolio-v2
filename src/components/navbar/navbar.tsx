import './navbar.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Navbar() {
    const [activeSection, setActiveSection] = useState('about')
    const navRef = useRef<HTMLUListElement>(null)
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

    const moveIndicator = (element: HTMLAnchorElement | null) => {
        if (!element) return

        setIndicatorStyle({
            left: element.offsetLeft,
            width: element.offsetWidth,
        })
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.45,
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    useLayoutEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const activeLink = nav.querySelector('a.active') as HTMLAnchorElement | null
        if (!activeLink) return

        moveIndicator(activeLink)
    }, [activeSection])


    return (
        <nav className="navbar">

        <h2 className="logo">
            Chimdi<span>.</span>
        </h2>
        <ul
            className="nav-links"
            ref={navRef}
            onMouseLeave={() => {
                const activeLink = navRef.current?.querySelector('a.active') as HTMLAnchorElement | null
                moveIndicator(activeLink)
            }}
        >
    
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>Contact</a></li>


          <div
              className="nav-indicator"
              style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
              }}
          />
        </ul>
    
      </nav>
    )
  }
  
  export default Navbar
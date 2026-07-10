import './about.css'
import { FiPenTool, FiZap, FiMonitor, FiCode } from 'react-icons/fi'


function About() {
    return (
      <section className="about" id="about">
        <h2>About Me</h2>
  
        
        <div className="about-content">
        <div className="about-grid">
            <div className="about-profile">
              <div className="profile-placeholder">
                CD
              </div>
            </div>

            <div className="about-text">
              <p>
                I'm Chimdi, a frontend developer passionate about building modern,
                responsive web experiences that feel as good to use as they look.
              </p>

              <p>
                I enjoy turning ideas into polished products, paying close attention
                to clean design, performance, accessibility, and the small details
                that create memorable user experiences.
              </p>

              <p>
                I'm constantly expanding my skills through real-world projects and
                enjoy solving problems with React, TypeScript, Flutter, and modern
                frontend tools. My goal is to build software that's both visually
                appealing and genuinely useful.
              </p>
            </div>
          </div>

          <div className="about-highlights">
          <div className="highlight-card">
              <FiPenTool />
              <span>Clean UI</span>
            </div>

            <div className="highlight-card">
              <FiZap />
              <span>Performance</span>
            </div>

            <div className="highlight-card">
              <FiMonitor />
              <span>Responsive Design</span>
            </div>

            <div className="highlight-card">
              <FiCode />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
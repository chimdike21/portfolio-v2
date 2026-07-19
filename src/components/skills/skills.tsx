import './skills.css'
import { FiMonitor, FiSmartphone, FiTool } from 'react-icons/fi'
import SectionHeading from '../section-heading/section-heading'

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: <FiMonitor />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Mobile',
      icon: <FiSmartphone />,
      skills: ['Flutter', 'Dart']
    },
    {
      title: 'Tools',
      icon: <FiTool />,
      skills: ['Git', 'GitHub', 'Figma', 'Vite']
    }
  ]

  return (
    <section className="skills" id="skills">
    <SectionHeading
    eyebrow="EXPERTISE"
    title="Technical Skills"
    subtitle="These are the technologies and tools I use to build modern digital experiences."
/>

      <div className="skills-container">
      {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
                        <h3>
              <span className="skill-icon">{group.icon}</span>
              {group.title}
            </h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-card" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
import './skills.css'
import { FiMonitor, FiSmartphone, FiTool } from 'react-icons/fi'

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
      <h2>Skills</h2>

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
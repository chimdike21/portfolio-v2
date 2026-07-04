import './skills.css'

function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Flutter",
    "HTML",
    "CSS",
    "Git"
  ]

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
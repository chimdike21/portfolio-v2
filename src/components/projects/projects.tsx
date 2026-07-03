import './projects.css'

function Projects() {
    const projects = [
        {
            title: "Expense Tracker",
            description: "Track expenses and spending habits.",
            tech: "React + TypeScript"
        },
        {
            title: "Trading Journal",
            description: "Record and review trading performance.",
            tech: "React"
        },
        {
            title: "Physi-O-Mac Website",
            description: "Gym website for Nigerian users.",
            tech: "React"
        }
    ]

    return (
        <section className="projects">

            <h2>Featured Projects</h2>

            <div className="projects-container">

                {projects.map((project) => (

                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <span>{project.tech}</span>
                    </div>

                ))}

            </div>

        </section>
    )
}

export default Projects
import './projects.css'

function Projects() {
    const projects = [
        {
            title: "Expense Tracker",
            description: "Track expenses, spending habits and manage personal finances.",
            tech: "React + TypeScript",
            status: "Completed",
            image: "/expense.png"
        },
        {
            title: "Trading Journal",
            description: "Record trades and review performance analytics.",
            tech: "React",
            status: "In Progress",
            image: "/trading.png"
        },
        {
            title: "Physi-O-Mac Website",
            description: "Modern gym website built for Nigerian users.",
            tech: "React",
            status: "Completed",
            image: "/gym.png"
        }
    ]

    return (
        <section className="projects" id="projects">

            <h2>Featured Projects</h2>

            <div className="projects-container">

                {projects.map((project) => (

                    <div className="project-card" key={project.title}>

                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>
                        
                        <div className="project-top">
                            <h3>{project.title}</h3>
                            <span
                                className={`status ${project.status.toLowerCase().replace(' ', '-')}`}
                            >
                                {project.status}
                            </span>
                        </div>

                        <p>{project.description}</p>
                        
                        <span className="tech">
                            {project.tech}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default Projects
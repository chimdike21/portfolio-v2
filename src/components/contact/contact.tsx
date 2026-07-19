import './contact.css'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import SectionHeading from '../section-heading/section-heading'

function Contact() {
    return (
        <section className="contact" id="contact">
            
            <div className="contact-content">
                <div className="contact-text">
                    {/* <span className="section-label">GET IN TOUCH</span> */}

                    <SectionHeading
    eyebrow="GET IN TOUCH"
    title="Let's Build Something Great"
    subtitle="Whether you have a project, an opportunity, or just want to connect, I'd love to hear from you.  Let's create
                        something meaningful together."
/>

                    {/* <p>
                        Whether you have a freelance project, an internship opportunity,
                        or simply want to connect, I'd love to hear from you. Let's create
                        something meaningful together.
                    </p> */}
                </div>

                <div className="contact-cards">
                    <a href="mailto:you@example.com" className="contact-card">
                        <FiMail />

                        <div className="contact-card-content">
                            <h3>Email</h3>
                            <span>you@example.com</span>
                        </div>
                    </a>
                    <a href="#" className="contact-card">
                    <FiGithub />

                        <div className="contact-card-content">
                            <h3>GitHub</h3>
                            <span>Coming Soon</span>
                        </div>
                    </a>

                    <a href="#" className="contact-card">
                        <FiLinkedin />

                        <div className="contact-card-content">
                            <h3>LinkedIn</h3>
                            <span>Coming Soon</span>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Contact
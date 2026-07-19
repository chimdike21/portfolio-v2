import './footer.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-logo">
                    Chimdike<span>.</span>
                </h2>

                <p>
                    Building modern web experiences with clean code and thoughtful design.
                </p>

                <div className="footer-links">
                    <a
                        href="https://github.com/chimdike21"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/chimdike-nwachukwu-882b7137a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>

                    <a href="mailto:nwachukwudivine02@gmail.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>

                <span className="copyright">
                    Designed &amp; Developed by Chimdike
                </span>
            </div>
        </footer>
    )
}

export default Footer
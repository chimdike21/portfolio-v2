import './footer.css'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-logo">
                    Chimdi<span>.</span>
                </h2>

                <p>
                    Building modern web experiences with clean code and thoughtful design.
                </p>

                <div className="footer-links">
                    <a href="#" aria-label="GitHub">
                        <FiGithub />
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>

                    <a href="mailto:you@example.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>

                <span className="copyright">
                    Designed &amp; Developed by Chimdi
                </span>
            </div>
        </footer>
    )
}

export default Footer
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ashish Yadav</h3>
            <p>Engineering precision meets creative code.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/itsashish1" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ashish Yadav. All rights reserved. | Designed & Built with <span className="heart">❤</span></p>
        </div>
      </div>
    </footer>
  )
}

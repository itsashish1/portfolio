import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero')
      const heroHeight = hero ? hero.offsetHeight : 300
      const trigger = Math.max(heroHeight - 70, 50)
      setIsSticky(window.scrollY > trigger)

      // Update active nav link
      const sections = document.querySelectorAll('section')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`} id="navbar">
      {/* Animated Characters - Jumping across nav items */}
      <div className="nav-character-container">
        <span className="nav-character-jump" id="char-hash">#</span>
        <span className="nav-character-jump" id="char-at">@</span>
      </div>
      
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#" className="brand-link">
            <span className="brand-icon">◻</span>
            <span className="brand-text">Ashish Yadav</span>
          </a>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleNavClick}>Projects</a></li>
          <li><a href="#github" className={`nav-link ${activeSection === 'github' ? 'active' : ''}`} onClick={handleNavClick}>GitHub</a></li>
          <li><a href="#leetcode" className={`nav-link ${activeSection === 'leetcode' ? 'active' : ''}`} onClick={handleNavClick}>LeetCode</a></li>
          <li><a href="#learning" className={`nav-link ${activeSection === 'learning' ? 'active' : ''}`} onClick={handleNavClick}>Learning</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleNavClick}>Contact</a></li>
        </ul>

        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section')
      let current = 'hero'
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 250) {
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

  const navLinks = [
    { id: 'hero', label: '01. HOME' },
    { id: 'about', label: '02. ABOUT' },
    { id: 'skills', label: '03. MATRIX' },
    { id: 'github', label: '04. REPOS' },
    { id: 'leetcode', label: '05. STATS' },
    { id: 'learning', label: '06. LOGS' },
    { id: 'contact', label: '07. TRANSMIT' },
  ]

  return (
    <header className={`hud-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="hud-navbar" id="navbar">
        {/* Cyber Brand Tag */}
        <a href="#hero" className="hud-brand">
          <span className="hud-status-dot"></span>
          <span className="hud-brand-tag">[SYS_ONLINE]</span>
          <span className="hud-brand-name">Ashish Yadav</span>
        </a>

        {/* HUD Nav Links */}
        <ul className={`hud-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hud-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cyber Controls */}
        <div className="hud-controls">
          <button className="hud-theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          
          <a href="#contact" className="hud-cta-btn">
            <span className="cta-icon">⚡</span> CONNECT
          </a>

          <button 
            className={`hud-hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

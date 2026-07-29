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
    { id: 'hero', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'github', label: 'GitHub' },
    { id: 'leetcode', label: 'LeetCode' },
    { id: 'learning', label: 'Learning' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className={`apple-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="apple-navbar" id="navbar">
        {/* Apple Brand */}
        <a href="#hero" className="apple-brand">
          <span className="brand-symbol"></span>
          <span className="brand-text">Ashish Yadav</span>
        </a>

        {/* Minimal Nav Links */}
        <ul className={`apple-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`apple-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="apple-controls">
          <button className="apple-theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          
          <a href="#contact" className="apple-cta-btn">
            Connect
          </a>

          <button 
            className={`apple-hamburger ${isMenuOpen ? 'active' : ''}`} 
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

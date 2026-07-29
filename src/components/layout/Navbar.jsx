import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
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

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-layer-group' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code-branch' },
    { id: 'github', label: 'GitHub', icon: 'fab fa-github' },
    { id: 'leetcode', label: 'LeetCode', icon: 'fas fa-brain' },
    { id: 'learning', label: 'Learning', icon: 'fas fa-graduation-cap' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' },
  ]

  return (
    <aside className="side-navbar" id="navbar">
      <div className="side-nav-container">
        {/* Brand Header */}
        <div className="side-nav-brand">
          <a href="#hero" className="brand-link">
            <span className="brand-icon">◻</span>
            <div className="brand-info">
              <span className="brand-text">Ashish Yadav</span>
              <span className="brand-subtext">Portfolio</span>
            </div>
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="mobile-controls">
          <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Vertical Navigation Menu */}
        <nav className={`side-nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <i className={`${item.icon} nav-item-icon`}></i>
                  <span className="nav-item-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Footer Control inside Sidebar */}
          <div className="sidebar-footer">
            <button className="sidebar-theme-btn" onClick={toggleTheme}>
              <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
              <span>{isDarkMode ? 'Dark Obsidian' : 'Light Mode'}</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}

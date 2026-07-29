import React, { useState, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="apple-footer">
      <div className="container">
        <div className="footer-pill-content">
          <div className="footer-left">
            <span className="footer-status-badge">
              <span className="status-green-dot"></span> System Operational
            </span>
            <span className="footer-clock">{time || '12:00:00 PM'}</span>
          </div>

          <div className="footer-center">
            <p>© {currentYear} Ashish Yadav. Crafted with Precision & Performance.</p>
          </div>

          <div className="footer-right">
            <a href="https://github.com/itsashish1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gtc-ashish" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

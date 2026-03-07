

import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const GITHUB_USERNAME = 'itsashish1'
  const LINKEDIN_URL = 'https://www.linkedin.com/in/gtc-ashish'
  
  const [profileData, setProfileData] = useState({
    name: 'Ashish Yadav',
    avatar: '',
    bio: '',
    followers: 0,
    repos: 0,
    githubUrl: `https://github.com/${GITHUB_USERNAME}`
  })

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const data = await response.json()
        
        setProfileData({
          name: data.name || 'Ashish Yadav',
          avatar: data.avatar_url,
          bio: data.bio || 'B.Tech Student | Industrial Automation Engineer | Web Developer',
          followers: data.followers,
          repos: data.public_repos,
          githubUrl: data.html_url
        })
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      }
    }

    fetchGitHubData()
  }, [])

  useEffect(() => {
    const titleLines = document.querySelectorAll('.title-line')
    titleLines.forEach((line, index) => {
      const text = line.textContent
      line.textContent = ''
      let charIndex = 0

      const typeChar = () => {
        if (charIndex < text.length) {
          line.textContent += text.charAt(charIndex)
          charIndex++
          setTimeout(typeChar, 50)
        }
      }

      setTimeout(typeChar, index * 400)
    })
  }, [])

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.hero-visual')
      parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.3}px)`
      })
    }

    window.addEventListener('scroll', handleParallax)
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Floating Programming Words */}
      <div className="floating-words">
        <span className="floating-word">C++</span>
        <span className="floating-word">Python</span>
        <span className="floating-word">JavaScript</span>
        <span className="floating-word">React</span>
        <span className="floating-word">Coding</span>
        <span className="floating-word">Algorithms</span>
        <span className="floating-word">Development</span>
        <span className="floating-word">Web Dev</span>
        <span className="floating-word">DSA</span>
        <span className="floating-word">Open Source</span>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Passionate Developer</span>
            <span className="title-line">Turning Logic into Scalable Solutions</span>
          </h1>
          <p className="hero-subtitle">B.Tech Computer Science Student | C++ Programmer | Web Developer</p>
          <p className="hero-description">
            Focused on data structures, algorithms, and problem solving using C++, while building modern web applications and sharing projects on GitHub. Actively solving coding challenges, developing projects, and continuously improving my software development skills through real-world practice and open-source work.
          </p>
          
          <div className="hero-profile-stats">
            <div className="profile-stat">
              <span className="stat-value">{profileData.repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="profile-stat">
              <span className="stat-value">{profileData.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-github"></i> GitHub Profile
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fab fa-linkedin"></i> LinkedIn Profile
            </a>
          </div>

          <div className="hero-social-links">
            <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:contact@example.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
        <div className="hero-visual">
          <div className="water-drop-words">
            <span className="water-drop-word">Ashish Yadav</span>
            <span className="water-drop-word">BTech CSE</span>
            <span className="water-drop-word">C++</span>
            <span className="water-drop-word">Web Dev</span>
            <span className="water-drop-word">Coding</span>
            <span className="water-drop-word">GitHub</span>
          </div>
          <div className="profile-image-container">
            {profileData.avatar ? (
              <img src={profileData.avatar} alt={profileData.name} className="profile-image" />
            ) : (
              <img src="https://via.placeholder.com/350x400?text=Ashish+Yadav" alt={profileData.name} className="profile-image" />
            )}
            <div className="image-border-glow"></div>
            <div className="animated-blocks-small">
              <div className="block block-1"></div>
              <div className="block block-2"></div>
              <div className="block block-3"></div>
              <div className="block block-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



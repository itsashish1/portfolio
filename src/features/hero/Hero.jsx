import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Tilt3DCard from '../../components/3d/Tilt3DCard'
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
          bio: data.bio || 'Industrial Automation Engineer & Full Stack Developer',
          followers: data.followers || 0,
          repos: data.public_repos || 0,
          githubUrl: data.html_url || `https://github.com/${GITHUB_USERNAME}`
        })
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content container">
        {/* Left Bold Column */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <div className="dopamine-badge">
            <span className="badge-green-dot"></span>
            <span>Available for Full Stack & Industrial Automation</span>
          </div>

          <h1 className="hero-title">
            ENGINEERING <span className="dopamine-gradient-text">PRECISION.</span>
          </h1>

          <p className="hero-subtitle">
            Architecting deterministic PACSystems C++ logic & modern web applications.
          </p>

          <p className="hero-description">
            B.Tech Computer Science Engineer specializing in industrial control systems, 
            embedded automation, and high-performance React digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn btn-dopamine-primary">
              <i className="fas fa-arrow-down"></i> Explore Narrative
            </a>
            <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dopamine-secondary">
              <i className="fab fa-github"></i> GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Right Tactile Glass Profile Showcase */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <Tilt3DCard maxTilt={10}>
            <div className="tactile-glass-card">
              <div className="card-image-wrapper">
                {profileData.avatar ? (
                  <img src={profileData.avatar} alt={profileData.name} className="profile-image-tactile" />
                ) : (
                  <div className="profile-avatar-placeholder">
                    <i className="fas fa-user-code"></i>
                  </div>
                )}
              </div>
              
              <div className="card-info">
                <h3>{profileData.name}</h3>
                <p>Full Stack & Industrial Automation</p>
                
                <div className="tactile-stats-row">
                  <div className="tactile-stat-item">
                    <span className="stat-num">{profileData.repos}</span>
                    <span className="stat-lbl">Repos</span>
                  </div>
                  <div className="tactile-stat-item">
                    <span className="stat-num">{profileData.followers}</span>
                    <span className="stat-lbl">Followers</span>
                  </div>
                  <div className="tactile-stat-item">
                    <span className="stat-num">56+</span>
                    <span className="stat-lbl">LeetCode</span>
                  </div>
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </motion.div>
      </div>
    </section>
  )
}

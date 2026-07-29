import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero3DCanvas from './Hero3DCanvas'
import Tilt3DCard from './Tilt3DCard'
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
          bio: data.bio || 'B.Tech Student | Industrial Automation Engineer | Full Stack Developer',
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
      {/* 3D WebGL Background Scene */}
      <Hero3DCanvas />

      <div className="hero-content container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Industrial Automation & Full Stack Engineer</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="gradient-text">Precision</span> Code & Digital Experiences
          </h1>

          <p className="hero-subtitle">
            Engineering precision meets creative web technology
          </p>

          <p className="hero-description">
            B.Tech Computer Science Engineer specializing in deterministic PACSystems logic, 
            C++ algorithmic computing, and high-performance React web applications.
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
            <div className="profile-stat">
              <span className="stat-value">56+</span>
              <span className="stat-label">LeetCode Solved</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="fab fa-github"></i> View GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fab fa-linkedin"></i> Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Tilt3DCard maxTilt={15}>
            <div className="profile-card-3d">
              <div className="card-glass-glow"></div>
              {profileData.avatar ? (
                <img src={profileData.avatar} alt={profileData.name} className="profile-image-3d" />
              ) : (
                <div className="profile-avatar-placeholder">
                  <i className="fas fa-user-code"></i>
                </div>
              )}
              <div className="card-info-overlay">
                <h3>{profileData.name}</h3>
                <p>Full Stack & Automation</p>
              </div>
            </div>
          </Tilt3DCard>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <a href="#about">
          <span className="mouse-wheel"></span>
        </a>
      </div>
    </section>
  )
}

import React from 'react'
import Tilt3DCard from '../../components/3d/Tilt3DCard'
import './About.css'

export default function About() {
  const highlights = [
    { icon: 'fas fa-code-branch', number: '15+', label: 'GitHub Repositories' },
    { icon: 'fas fa-star', number: '10+', label: 'Stars Earned' },
    { icon: 'fas fa-award', number: '56+', label: 'LeetCode Problems' },
    { icon: 'fas fa-users', number: '4+', label: 'Network Followers' }
  ]

  const techStack = [
    { title: 'PACSystems C-Toolkit', icon: 'fas fa-microchip', category: 'Automation Engine', count: 'Core' },
    { title: 'Full Stack Web', icon: 'fab fa-react', category: 'React & Next.js', count: 'Advanced' },
    { title: 'Systems Programming', icon: 'fas fa-terminal', category: 'C++ & Python', count: 'Expert' },
    { title: 'Database & REST', icon: 'fas fa-database', category: 'SQL & APIs', count: 'Proficient' }
  ]

  return (
    <section id="about" className="about section-animate">
      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header">
          <span className="section-index">// 01. ABOUT ME</span>
          <h2 className="section-title">Engineering Philosophy & Systems</h2>
          <p className="section-subtitle">Combining deterministic industrial control with high-performance modern web software.</p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="bento-about-grid">
          {/* Bento Box 1: Profile & Bio */}
          <Tilt3DCard maxTilt={8} className="bento-box bento-box-profile">
            <div className="bento-profile-card">
              <div className="bento-avatar-wrapper">
                <div className="bento-avatar-placeholder">
                  <i className="fas fa-user-code"></i>
                </div>
              </div>
              <h3 className="bento-name">Ashish Yadav</h3>
              <p className="bento-role"><i className="fas fa-location-arrow"></i> B.Tech CS Engineer • India</p>
              <p className="bento-bio">
                Specializing in deterministic PACSystems C++ logic, real-time industrial automation, 
                and building scalable React web applications.
              </p>
              <a href="https://github.com/itsashish1" target="_blank" rel="noopener noreferrer" className="bento-action-btn">
                <i className="fab fa-github"></i> GitHub Profile
              </a>
            </div>
          </Tilt3DCard>

          {/* Bento Box 2: Tech Radar Stack */}
          <div className="bento-box bento-box-tech">
            <h3 className="bento-card-title"><i className="fas fa-layer-group"></i> Core Technology Stack</h3>
            <div className="bento-tech-list">
              {techStack.map((tech, idx) => (
                <div key={idx} className="bento-tech-item">
                  <div className="bento-tech-icon">
                    <i className={tech.icon}></i>
                  </div>
                  <div className="bento-tech-info">
                    <h4>{tech.title}</h4>
                    <p>{tech.category}</p>
                  </div>
                  <span className="bento-tech-badge">{tech.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Stat Counters */}
        <div className="bento-stats-grid">
          {highlights.map((item, idx) => (
            <Tilt3DCard key={idx} maxTilt={10}>
              <div className="bento-stat-card">
                <div className="bento-stat-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="bento-stat-num">{item.number}</div>
                <div className="bento-stat-lbl">{item.label}</div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

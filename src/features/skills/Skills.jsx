import React from 'react'
import { useNavigate } from 'react-router-dom'
import Tilt3DCard from '../../components/3d/Tilt3DCard'
import './Skills.css'

export default function Skills() {
  const navigate = useNavigate()
  
  const skillCategories = [
    {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      skills: [
        { name: 'PACSystems C Toolkit', level: 92 },
        { name: 'PME Block Mapping', level: 88 },
        { name: 'Scan-Safe Logic', level: 95 },
        { name: 'Deterministic Systems', level: 90 }
      ]
    },
    {
      category: 'Backend & Systems',
      icon: 'fas fa-server',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'REST APIs & SQL', level: 88 }
      ]
    },
    {
      category: 'Frontend Engineering',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: 'React 18', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'UI/UX Animations', level: 90 }
      ]
    },
    {
      category: 'Tools & Ecosystem',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', level: 94 },
        { name: 'VS Code & Linux', level: 90 },
        { name: 'Runtime Debugging', level: 88 },
        { name: 'Vercel Deployment', level: 92 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section-animate">
      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header">
          <span className="section-index">// 02. TECHNICAL MATRIX</span>
          <h2 className="section-title">Core Engineering Competencies</h2>
          <p className="section-subtitle">Comprehensive breakdown of technical proficiencies across systems & full stack software.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <Tilt3DCard key={index} maxTilt={8}>
              <div className="skill-category-box">
                <div className="skill-cat-header">
                  <i className={cat.icon}></i>
                  <h3>{cat.category}</h3>
                </div>

                <div className="skill-meter-list">
                  {cat.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="skill-meter-item"
                      onClick={() => navigate(`/skill/${skill.name.replace(/\s+/g, '-')}`)}
                    >
                      <div className="meter-label-row">
                        <span className="meter-name">{skill.name}</span>
                        <span className="meter-percent">{skill.level}%</span>
                      </div>
                      <div className="meter-track">
                        <div className="meter-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

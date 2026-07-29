import React from 'react'
import Tilt3DCard from '../../components/3d/Tilt3DCard'
import './Projects.css'

export default function Projects() {
  const caseStudies = [
    {
      id: '01',
      title: 'Intelligent Computer Vision Pipeline',
      subtitle: 'Assignment-5-Intelligent-Image-Processing',
      problem: 'Processing image transformation pipelines manually resulted in slow rendering and lack of interactive visual feedback.',
      process: 'Architected a modular Python computer vision backend coupled with a real-time interactive Flask web interface.',
      decisions: 'Chose NumPy & OpenCV for hardware-accelerated tensor operations, delivering sub-50ms frame processing.',
      impact: '100% automated filter pipeline with real-time UI controls.',
      tech: ['Python', 'OpenCV', 'Flask', 'NumPy', 'HTML5/CSS3'],
      github: 'https://github.com/itsashish1/Assignment-5-Intelligent-Image-Processing',
      live: 'https://github.com/itsashish1/Assignment-5-Intelligent-Image-Processing'
    },
    {
      id: '02',
      title: 'DevPilot & CarrierBuddy Platform',
      subtitle: 'AI Career Assistant & Outreach Copilot',
      problem: 'Job seekers struggle with resume alignment, mock interviews, and manual outreach tracking.',
      process: 'Built a full stack platform with FastAPI, Claude AI API, React, Node.js, and EC2 backend integration.',
      decisions: 'Utilized asynchronous FastAPI endpoints to handle multi-agent LLM analysis with sub-second streaming latency.',
      impact: 'Personalized roadmap generation and mock interview simulation with Certbot SSL deployment.',
      tech: ['React 18', 'FastAPI', 'Claude AI', 'Node.js', 'AWS EC2'],
      github: 'https://github.com/itsashish1',
      live: 'https://github.com/itsashish1'
    },
    {
      id: '03',
      title: 'Temflo Enterprise Analytics System',
      subtitle: 'SQL & Excel Data Visualization Suite',
      problem: 'Enterprise designation-based access required strict role-based control and real-time SQL/Excel parsing.',
      process: 'Engineered an Express & React platform featuring an MS SQL Query Studio and automated Excel parser.',
      decisions: 'Implemented granular RBAC middleware and optimized SQL query execution for instant visual dashboards.',
      impact: 'Streamlined designation-based feature permissions across enterprise analytics.',
      tech: ['React', 'Node.js', 'Express', 'MS SQL Server', 'Excel Parser'],
      github: 'https://github.com/itsashish1',
      live: 'https://github.com/itsashish1'
    }
  ]

  return (
    <section id="projects" className="projects section-animate">
      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header">
          <span className="section-index">// 02. NARRATIVE CASE STUDIES</span>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">Deep dive into problem statements, architecture decisions, and real-world results.</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map(study => (
            <Tilt3DCard key={study.id} maxTilt={6}>
              <div className="case-study-card">
                <div className="case-study-header">
                  <span className="case-study-index">{study.id}</span>
                  <div>
                    <h3 className="case-study-title">{study.title}</h3>
                    <p className="case-study-subtitle">{study.subtitle}</p>
                  </div>
                </div>

                <div className="case-study-steps">
                  <div className="step-item">
                    <span className="step-lbl"><i className="fas fa-exclamation-circle"></i> Problem:</span>
                    <p className="step-desc">{study.problem}</p>
                  </div>
                  <div className="step-item">
                    <span className="step-lbl"><i className="fas fa-cogs"></i> Process:</span>
                    <p className="step-desc">{study.process}</p>
                  </div>
                  <div className="step-item">
                    <span className="step-lbl"><i className="fas fa-microchip"></i> Decision:</span>
                    <p className="step-desc">{study.decisions}</p>
                  </div>
                  <div className="step-item">
                    <span className="step-lbl"><i className="fas fa-chart-line"></i> Result:</span>
                    <p className="step-desc">{study.impact}</p>
                  </div>
                </div>

                <div className="case-study-footer">
                  <div className="case-tech-pills">
                    {study.tech.map((t, idx) => (
                      <span key={idx} className="case-tech-pill">{t}</span>
                    ))}
                  </div>

                  <div className="case-links">
                    <a href={study.github} target="_blank" rel="noopener noreferrer" className="case-link-btn" title="View Source Code">
                      <i className="fab fa-github"></i> Source
                    </a>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

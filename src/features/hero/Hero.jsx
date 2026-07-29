import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Hero3DCanvas from '../../components/3d/Hero3DCanvas'
import Tilt3DCard from '../../components/3d/Tilt3DCard'
import './Hero.css'

export default function Hero() {
  const GITHUB_USERNAME = 'itsashish1'
  const LINKEDIN_URL = 'https://www.linkedin.com/in/gtc-ashish'
  
  const [activeTab, setActiveTab] = useState('automation')

  const codeSnippets = {
    automation: `// PACSystems C-Toolkit Industrial Logic
#include <pacsystems/kernel.hpp>

namespace Automation {
    class ControllerEngine {
    public:
        void InitializeScanCycle() {
            PME::MapMemoryBlocks();
            DeterministicLoop::Run();
        }
    };
}`,
    web: `// Next.js & Three.js Cyber Matrix Engine
import { Canvas, CyberMesh } from '@three/react'

export const CyberArchitect = () => (
    <Canvas fps={60} engine="WebGL2">
        <CyberMesh scale={1.2} glow="#10b981" />
    </Canvas>
)`
  }

  return (
    <section id="hero" className="hero">
      {/* 3D WebGL Background Scene */}
      <Hero3DCanvas />

      {/* Cyber Watermark */}
      <div className="hero-watermark">&lt;ENGINEER /&gt;</div>

      <div className="hero-content container">
        {/* Left Cyber HUD Text */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="cyber-hud-badge">
            <span className="cyber-pulse"></span>
            <span>[SYS_ONLINE :: ARCHITECT_V2]</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="cyber-gradient-text">Precision</span> Code & Cyber Systems
          </h1>

          <p className="hero-description">
            B.Tech Computer Science Engineer specializing in deterministic PACSystems C++ logic, 
            industrial automation, and high-performance React/Next.js WebGL applications.
          </p>

          <div className="hero-buttons">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-cyber-primary">
              <i className="fab fa-github"></i> ACCESS GITHUB
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-cyber-secondary">
              <i className="fab fa-linkedin"></i> LINKEDIN HUD
            </a>
          </div>
        </motion.div>

        {/* Right Holographic 3D Terminal */}
        <motion.div 
          className="hero-terminal-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Tilt3DCard maxTilt={15}>
            <div className="cyber-terminal-3d">
              <div className="terminal-corner top-left">[+]</div>
              <div className="terminal-corner top-right">[+]</div>

              <div className="cyber-terminal-header">
                <div className="cyber-dots">
                  <span className="cyber-dot red"></span>
                  <span className="cyber-dot yellow"></span>
                  <span className="cyber-dot green"></span>
                </div>

                <div className="cyber-tabs">
                  <button 
                    className={`cyber-tab ${activeTab === 'automation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('automation')}
                  >
                    <i className="fas fa-microchip"></i> automation.cpp
                  </button>
                  <button 
                    className={`cyber-tab ${activeTab === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveTab('web')}
                  >
                    <i className="fab fa-react"></i> CyberMatrix.tsx
                  </button>
                </div>
              </div>

              <div className="cyber-terminal-body">
                <pre>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              <div className="cyber-terminal-footer">
                <span className="status-online"><i className="fas fa-check-circle"></i> SYSTEM_SCAN_SAFE</span>
                <span className="status-metric">C++ / REACT 18</span>
              </div>
            </div>
          </Tilt3DCard>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <a href="#about">
          <span className="cyber-mouse-wheel"></span>
        </a>
      </div>
    </section>
  )
}

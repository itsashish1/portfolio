import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Skills3DSphere.css'

export default function Skills3DSphere({ skills = [] }) {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  const defaultSkills = [
    'PACSystems C Toolkit', 'PME Block Mapping', 'Scan-Safe Logic',
    'Deterministic Code', 'Runtime Troubleshooting', 'Real-Time Systems',
    'Python', 'Java', 'C++', 'REST APIs', 'Database Design',
    'React', 'Next.js', 'JavaScript', 'HTML & CSS', 'Git & GitHub',
    'Linux', 'Docker', 'SQL', 'Automation'
  ]

  const skillList = skills.length > 0 ? skills : defaultSkills

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const tags = container.querySelectorAll('.skills-3d-tag')
    const count = tags.length
    const radius = Math.min(container.clientWidth, 320) / 2.2

    let angleX = 0.002
    let angleY = 0.002
    let mouseX = 0
    let mouseY = 0

    // Compute 3D positions using Fibonacci sphere algorithm
    const coords = []
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2 // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y) // Radius at y position
      const theta = phi * i

      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY

      coords.push({ x: x * radius, y: y * radius, z: z * radius })
    }

    // Animation function
    let animationFrameId
    const updatePositions = () => {
      // Smooth friction deceleration
      const cosX = Math.cos(angleX)
      const sinX = Math.sin(angleX)
      const cosY = Math.cos(angleY)
      const sinY = Math.sin(angleY)

      coords.forEach((coord, i) => {
        // Rotate around Y axis
        const x1 = coord.x * cosY - coord.z * sinY
        const z1 = coord.z * cosY + coord.x * sinY

        // Rotate around X axis
        const y1 = coord.y * cosX - z1 * sinX
        const z2 = z1 * cosX + coord.y * sinX

        coord.x = x1
        coord.y = y1
        coord.z = z2

        const scale = (z2 + radius * 2) / (radius * 3)
        const alpha = (z2 + radius) / (radius * 2)

        const tag = tags[i]
        if (tag) {
          tag.style.transform = `translate3d(${x1}px, ${y1}px, ${z2}px) scale(${Math.max(0.6, scale)})`
          tag.style.opacity = Math.max(0.25, alpha).toString()
          tag.style.zIndex = Math.round(z2 + radius).toString()
        }
      })

      animationFrameId = requestAnimationFrame(updatePositions)
    }

    updatePositions()

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = e.clientX - (rect.left + rect.width / 2)
      mouseY = e.clientY - (rect.top + rect.height / 2)

      angleY = mouseX * 0.0001
      angleX = -mouseY * 0.0001
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [skillList])

  return (
    <div className="skills-3d-sphere-wrapper">
      <div ref={containerRef} className="skills-3d-sphere-container">
        {skillList.map((skill, idx) => (
          <span
            key={idx}
            className="skills-3d-tag"
            onClick={() => navigate(`/skill/${skill.replace(/\s+/g, '-')}`)}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

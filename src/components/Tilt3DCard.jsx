import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Tilt3DCard.css'

export default function Tilt3DCard({ children, className = '', maxTilt = 12 }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const calcRotateX = ((y - centerY) / centerY) * -maxTilt
    const calcRotateY = ((x - centerX) / centerX) * maxTilt

    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    setRotateX(calcRotateX)
    setRotateY(calcRotateY)
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.25 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.div
      className={`tilt-3d-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="tilt-3d-card-inner">
        {children}
        <div
          className="tilt-3d-glare-overlay"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  )
}

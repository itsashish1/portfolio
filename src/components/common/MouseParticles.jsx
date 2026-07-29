import { useEffect, useRef } from 'react'
import './MouseParticles.css'

export default function MouseParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    // Mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 150
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouse.x = event.x
      mouse.y = event.y
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    // Particle class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
      }

      // Draw particle
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      // Update particle position
      update() {
        // Check particle boundaries
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        // Check mouse collision (repel effect)
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 3
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 3
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3
          }
        }

        // Move particle
        this.x += this.directionX
        this.y += this.directionY

        this.draw()
      }
    }

    // Create particles
    function initParticles() {
      particles = []
      // Get primary color from CSS variable
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color').trim() || '#64ffda'
      
      let numberOfParticles = (canvas.height * canvas.width) / 15000
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2)
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2)
        let directionX = (Math.random() * 2) - 1
        let directionY = (Math.random() * 2) - 1
        let color = primaryColor

        particles.push(new Particle(x, y, directionX, directionY, size, color))
      }
    }

    // Connect particles with lines
    function connect() {
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color').trim() || '#64ffda'
      
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y))
          let connectDistance = 120

          if (distance < (connectDistance * connectDistance)) {
            opacityValue = 1 - (distance / 20000)
            ctx.strokeStyle = primaryColor
            ctx.lineWidth = 1
            ctx.globalAlpha = opacityValue * 0.4
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    // Animation loop
    function animate() {
      animationId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
      }
      connect()
    }

    // Initialize
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)
    handleResize()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="mouse-particles-canvas" />
}


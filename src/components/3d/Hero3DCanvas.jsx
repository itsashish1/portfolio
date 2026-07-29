import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Hero3DCanvas.css'

export default function Hero3DCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // 1. Scene Setup
    const scene = new THREE.Scene()

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 25

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // 4. Geometry & Materials
    // Central Floating 3D Geometric Structure (Icosahedron + Wireframe)
    const primaryGeometry = new THREE.IcosahedronGeometry(7, 2)
    
    // Wireframe Mesh Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const wireframeMesh = new THREE.Mesh(primaryGeometry, wireframeMaterial)
    scene.add(wireframeMesh)

    // Inner Glowing Core
    const coreGeometry = new THREE.IcosahedronGeometry(4, 1)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.75,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(coreMesh)

    // Ambient 3D Particle Constellation Cloud
    const particleCount = 450
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60
      scales[i] = Math.random() * 2 + 1
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.35,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x6366f1, 3, 100)
    pointLight1.position.set(15, 15, 15)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x38bdf8, 2, 100)
    pointLight2.position.set(-15, -15, -15)
    scene.add(pointLight2)

    // 6. Interaction & Motion Logic
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0015
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0015
    }

    window.addEventListener('mousemove', handleMouseMove)

    // 7. Animation Loop
    let animationFrameId
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Smooth camera interpolation following mouse position
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      scene.rotation.y = targetX * 1.5 + elapsedTime * 0.12
      scene.rotation.x = -targetY * 1.5 + Math.sin(elapsedTime * 0.2) * 0.1

      // Rotate primary 3D elements
      wireframeMesh.rotation.x = elapsedTime * 0.15
      wireframeMesh.rotation.y = elapsedTime * 0.2
      coreMesh.rotation.x = -elapsedTime * 0.25
      coreMesh.rotation.y = -elapsedTime * 0.3

      // Gentle pulsating effect for core scale
      const scaleFactor = 1 + Math.sin(elapsedTime * 1.5) * 0.08
      coreMesh.scale.set(scaleFactor, scaleFactor, scaleFactor)

      particleSystem.rotation.y = elapsedTime * 0.04

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Clean up on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="hero-3d-canvas-container" />
}

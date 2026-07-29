import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomeView from './pages/HomeView'
import SkillDetailView from './pages/SkillDetailView'
import ScrollToTop from './components/common/ScrollToTop'
import FloatingWords from './components/common/FloatingWords'
import MouseParticles from './components/common/MouseParticles'
import WelcomeAnimation from './components/common/WelcomeAnimation'
import './App.css'

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') !== 'false'
  })

  // Set up Intersection Observer for section animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.section-animate')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  useEffect(() => {
    if (!isDarkMode) {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="App">
      <FloatingWords />
      <MouseParticles />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/skill/:skillName" element={<SkillDetailView />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <Router>
      <WelcomeAnimation />
      <AppContent />
    </Router>
  )
}

export default App

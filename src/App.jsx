import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import GitHub from './components/GitHub'
import LeetCode from './components/LeetCode'
import Learning from './components/Learning'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SkillDetail from './components/SkillDetail'
import FloatingWords from './components/FloatingWords'
import MouseParticles from './components/MouseParticles'
import WelcomeAnimation from './components/WelcomeAnimation'
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

    // Observe all animated sections
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
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <GitHub />
            <LeetCode />
            <Learning />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/skill/:skillName" element={<SkillDetail />} />
      </Routes>
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

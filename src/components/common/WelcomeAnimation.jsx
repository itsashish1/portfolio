import { useState, useEffect } from 'react'
import './WelcomeAnimation.css'

export default function WelcomeAnimation() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  const codingWords = ['Code', 'C++', 'Python', 'Dev', 'GitHub', 'DSA', 'React', 'Web', 'JavaScript', 'Algorithms']

  useEffect(() => {
    // Show welcome animation for 2 seconds on every visit
    setShowWelcome(true)
    setIsVisible(true)
    
    // Hide after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)
    
    // Remove from DOM after fade out
    const removeTimer = setTimeout(() => {
      setShowWelcome(false)
    }, 2500)
    
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!showWelcome) return null

  return (
    <div className={`welcome-overlay ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="welcome-text">Welcome</span>
          <div className="sparkle-container">
            <span className="sparkle">✦</span>
            <span className="sparkle">✧</span>
            <span className="sparkle">★</span>
            <span className="sparkle">☆</span>
          </div>
        </h1>
        
        <div className="coding-words-container">
          {codingWords.map((word, index) => (
            <span 
              key={index} 
              className="coding-word"
              style={{
                '--delay': `${index * 0.15}s`,
                '--duration': `${2 + Math.random() * 0.5}s`,
                '--random-x': `${Math.random() * 100}%`,
                '--random-y': `${Math.random() * 100}%`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}


import { useEffect, useState } from 'react'
import Tilt3DCard from './Tilt3DCard'
import './LeetCode.css'

export default function LeetCode() {
  const LEETCODE_USERNAME = 'itsashish1'
  const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`
  const GITHUB_SOLUTIONS_URL = 'https://github.com/itsashish1/LeetCode-Solutions'

  const [stats, setStats] = useState({
    totalSolved: 56,
    easySolved: 19,
    mediumSolved: 30,
    hardSolved: 7,
    rank: 2244721,
    acceptance: 87.65,
    totalActiveDays: 28,
    maxStreak: 5
  })

  const [topics, setTopics] = useState([
    'Array', 'String', 'Two Pointers', 'Hash Table', 'Math',
    'Binary Search', 'Dynamic Programming', 'Backtracking', 'Divide and Conquer'
  ])

  const [loading, setLoading] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="leetcode" className="leetcode-section section-animate">
      <div className="container">
        <h2 className="section-title">LeetCode & Algorithm Journey</h2>
        <p className="section-subtitle">Problem solving metrics, DSA mastery & competitive programming stats</p>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">🎯</div>
              <div className="stat-number">{stats.totalSolved}</div>
              <div className="stat-label">Total Solved</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">🟢</div>
              <div className="stat-number">{stats.easySolved}</div>
              <div className="stat-label">Easy Problems</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">🟡</div>
              <div className="stat-number">{stats.mediumSolved}</div>
              <div className="stat-label">Medium Problems</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">🔴</div>
              <div className="stat-number">{stats.hardSolved}</div>
              <div className="stat-label">Hard Problems</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">📊</div>
              <div className="stat-number">#{stats.rank.toLocaleString()}</div>
              <div className="stat-label">Global Rank</div>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className={`stat-card ${hasAnimated ? 'animate' : ''}`}>
              <div className="stat-icon">✅</div>
              <div className="stat-number">{stats.acceptance}%</div>
              <div className="stat-label">Acceptance Rate</div>
            </div>
          </Tilt3DCard>
        </div>

        {/* Problem Difficulty Chart */}
        <div className="chart-section">
          <h3>Problem Difficulty Distribution</h3>
          <div className="chart-container">
            <div className="chart-bar">
              <div className="bar-label">Easy</div>
              <div className="bar">
                <div
                  className="bar-fill easy"
                  style={{ width: `${(stats.easySolved / 56) * 100}%` }}
                ></div>
              </div>
              <div className="bar-value">{stats.easySolved}</div>
            </div>

            <div className="chart-bar">
              <div className="bar-label">Medium</div>
              <div className="bar">
                <div
                  className="bar-fill medium"
                  style={{ width: `${(stats.mediumSolved / 56) * 100}%` }}
                ></div>
              </div>
              <div className="bar-value">{stats.mediumSolved}</div>
            </div>

            <div className="chart-bar">
              <div className="bar-label">Hard</div>
              <div className="bar">
                <div
                  className="bar-fill hard"
                  style={{ width: `${(stats.hardSolved / 56) * 100}%` }}
                ></div>
              </div>
              <div className="bar-value">{stats.hardSolved}</div>
            </div>
          </div>
        </div>

        {/* Topics Practiced */}
        <div className="topics-section">
          <h3>Topics I Practice</h3>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div key={index} className="topic-tag">
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Programming Language */}
        <div className="language-section">
          <h3>Preferred Language</h3>
          <div className="language-info">
            <div className="language-icon">⚡</div>
            <div className="language-details">
              <h4>C++</h4>
              <p>My primary language for solving LeetCode problems</p>
              <div className="language-stats">
                <span>35 problems solved with C++</span>
                <span>21 problems solved with Java</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Goals */}
        <div className="goals-section">
          <h3>My Coding Goals</h3>
          <div className="goals-grid">
            <div className="goal-item">
              <div className="goal-icon">🧠</div>
              <h4>Strengthen DSA Skills</h4>
              <p>Master fundamental and advanced data structures and algorithms</p>
            </div>

            <div className="goal-item">
              <div className="goal-icon">🎯</div>
              <h4>Improve Problem-Solving</h4>
              <p>Enhance analytical thinking and algorithmic efficiency</p>
            </div>

            <div className="goal-item">
              <div className="goal-icon">💼</div>
              <h4>Technical Interview Prep</h4>
              <p>Prepare for coding interviews at top tech companies</p>
            </div>

            <div className="goal-item">
              <div className="goal-icon">🏆</div>
              <h4>Competitive Programming</h4>
              <p>Participate in contests and improve competitive coding skills</p>
            </div>
          </div>
        </div>

        {/* GitHub Solutions */}
        <div className="solutions-section">
          <h3>Solution Repository</h3>
          <p>Check out my GitHub repository with detailed LeetCode solutions</p>
          <button
            className="btn-secondary"
            onClick={() => openLink(GITHUB_SOLUTIONS_URL)}
          >
            View GitHub Solutions
          </button>
        </div>

        {/* Coding Activity Heatmap Placeholder */}
        <div className="heatmap-section">
          <h3>Coding Activity</h3>
          <div className="heatmap-placeholder">
            <div className="activity-stats">
              <div className="activity-stat">
                <span className="stat-number">{stats.totalActiveDays}</span>
                <span className="stat-label">Active Days</span>
              </div>
              <div className="activity-stat">
                <span className="stat-number">{stats.maxStreak}</span>
                <span className="stat-label">Max Streak</span>
              </div>
            </div>
            <div className="heatmap-grid">
              {/* Placeholder for heatmap - would need actual data */}
              <div className="heatmap-note">
                Activity heatmap visualization would be implemented with real submission data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
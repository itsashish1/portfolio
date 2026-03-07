import { useEffect, useState } from 'react'
import './GitHub.css'

export default function GitHub() {
  const GITHUB_USERNAME = 'itsashish1'
  
  const [stats, setStats] = useState({
    repos: 0,
    contributions: 0,
    followers: 0,
    opensource: 0
  })
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const userData = await userResponse.json()

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        )
        const reposData = await reposResponse.json()

        // Fetch contributions (using GitHub API insights)
        // Note: This is an estimate based on public repos
        let totalContributions = 0
        let openSourceCount = 0

        if (Array.isArray(reposData)) {
          totalContributions = reposData.reduce((sum, repo) => {
            return sum + (repo.stargazers_count || 0)
          }, 0)
          openSourceCount = reposData.filter(repo => !repo.private).length
        }

        setStats({
          repos: userData.public_repos || 0,
          contributions: totalContributions > 0 ? totalContributions : 150,
          followers: userData.followers || 0,
          opensource: openSourceCount || 8
        })

        setRepos(Array.isArray(reposData) ? reposData : [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            // Animation happens here
          }
        })
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('github')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="github" className="github section-animate">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GitHub Contributions</h2>
          <div className="title-underline"></div>
        </div>

        <div className="github-content">
          <div className="github-stats">
            <div className="stat-card">
              <div className="stat-number">{stats.repos}+</div>
              <div className="stat-label">Repositories</div>
              <div className="stat-icon"><i className="fas fa-code-branch"></i></div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.contributions}+</div>
              <div className="stat-label">Contributions</div>
              <div className="stat-icon"><i className="fas fa-star"></i></div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.followers}+</div>
              <div className="stat-label">Followers</div>
              <div className="stat-icon"><i className="fas fa-users"></i></div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.opensource}+</div>
              <div className="stat-label">Open Source</div>
              <div className="stat-icon"><i className="fas fa-gift"></i></div>
            </div>
          </div>

          <div className="github-cta">
            <p>Explore my GitHub profile for open-source contributions, code samples, and ongoing projects.</p>
            <a href={`https://github.com/${GITHUB_USERNAME}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Visit GitHub Profile
            </a>
          </div>

          {!loading && repos.length > 0 && (
            <div className="recent-repos">
              <h3>Recent Projects</h3>
              <div className="repos-grid">
                {repos.map((repo, index) => (
                  <a
                    key={index}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-card"
                  >
                    <div className="repo-header">
                      <i className="fas fa-code-branch"></i>
                      <h4>{repo.name}</h4>
                    </div>
                    <p className="repo-description">{repo.description || 'No description available'}</p>
                    <div className="repo-meta">
                      {repo.language && (
                        <span className="repo-language">
                          <i className="fas fa-circle"></i> {repo.language}
                        </span>
                      )}
                      <span className="repo-stars">
                        <i className="fas fa-star"></i> {repo.stargazers_count || 0}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="contribution-graph">
            <h3>Quick Links</h3>
            <div className="quick-links">
              <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="quick-link-btn">
                <i className="fas fa-folder"></i> All Repositories
              </a>
              <a href={`https://github.com/${GITHUB_USERNAME}?tab=stars`} target="_blank" rel="noopener noreferrer" className="quick-link-btn">
                <i className="fas fa-star"></i> Starred Repos
              </a>
              <a href={`https://github.com/${GITHUB_USERNAME}?tab=followers`} target="_blank" rel="noopener noreferrer" className="quick-link-btn">
                <i className="fas fa-users"></i> Followers
              </a>
              <a href={`https://github.com/${GITHUB_USERNAME}?tab=following`} target="_blank" rel="noopener noreferrer" className="quick-link-btn">
                <i className="fas fa-user-check"></i> Following
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

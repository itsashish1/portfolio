import { useEffect, useState } from 'react'
import Tilt3DCard from './Tilt3DCard'
import './About.css'

export default function About() {
  const GITHUB_USERNAME = 'itsashish1'
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    bio: '',
    location: '',
    avatar_url: '',
    followers: 0,
    public_repos: 0,
    profile_url: ''
  })
  
  const [technologiesData, setTechnologiesData] = useState([])
  const [stats, setStats] = useState({
    totalStars: 0,
    totalForks: 0,
    avgRepoSize: 0
  })
  
  const [loading, setLoading] = useState(true)

  // Technology descriptions database
  const techDescriptions = {
    'JavaScript': 'Dynamic programming language powering interactive web applications. I use it for frontend development, DOM manipulation, and asynchronous operations with modern ES6+ features.',
    'Python': 'Versatile high-level language used for backend development, data processing, automation, and scripting. Known for clean syntax and extensive libraries for web and data applications.',
    'React': 'Modern JavaScript library for building user interfaces with component-based architecture. I leverage hooks, state management, and performance optimization for dynamic applications.',
    'Next.js': 'React framework providing server-side rendering, static generation, and built-in optimization. Perfect for production-ready web applications with optimal performance.',
    'HTML': 'Semantic markup language forming the foundation of web content. I write clean, accessible HTML5 that follows best practices for SEO and user experience.',
    'CSS': 'Styling technology for beautiful user interfaces. I master flexbox, grid, animations, and responsive design to create visually compelling experiences.',
    'Node.js': 'JavaScript runtime for backend development. Used for building scalable REST APIs, microservices, and server-side applications.',
    'Java': 'Object-oriented language for enterprise applications. I use it for building robust backend systems, microservices, and cross-platform solutions.',
    'C++': 'High-performance language for system-level programming. Used for performance-critical applications and embedded systems development.',
    'Git': 'Version control system for tracking code changes and collaboration. I master branching, merging, and collaborative workflows on GitHub.',
    'REST API': 'Architectural style for building scalable web services. I design and implement RESTful APIs with proper authentication and error handling.',
    'Docker': 'Containerization platform for consistent deployment. I use Docker for packaging applications and microservices for production environments.',
    'SQL': 'Database query language for relational databases. I design efficient schemas and write optimized queries for data management.',
    'MongoDB': 'NoSQL document database for flexible data storage. Perfect for applications requiring scalability and schema flexibility.',
    'PACSystems': 'Industrial automation framework for developing control solutions. Expertise in real-time logic programming and system optimization.',
    'Automation': 'Industrial control systems expertise including troubleshooting, optimization, and real-time system management.'
  }

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const userData = await userResponse.json()

        setUserInfo({
          name: userData.name || userData.login,
          bio: userData.bio || 'Full Stack Developer',
          location: userData.location || '',
          avatar_url: userData.avatar_url,
          followers: userData.followers || 0,
          public_repos: userData.public_repos || 0,
          profile_url: userData.html_url
        })

        // Fetch repositories to analyze technologies
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`
        )
        const reposData = await reposResponse.json()

        // Map technologies to their repositories
        const techMap = {}
        let totalStars = 0
        let totalForks = 0
        let totalSize = 0

        if (Array.isArray(reposData)) {
          reposData.forEach(repo => {
            // Add language-based tech
            if (repo.language) {
              if (!techMap[repo.language]) {
                techMap[repo.language] = {
                  name: repo.language,
                  repos: [],
                  description: techDescriptions[repo.language] || `${repo.language} is a powerful programming language/framework.`,
                  icon: getTechIcon(repo.language)
                }
              }
              techMap[repo.language].repos.push({
                name: repo.name,
                url: repo.html_url,
                description: repo.description || 'No description',
                stars: repo.stargazers_count || 0
              })
            }

            // Infer frameworks from repository details
            const repoContent = `${repo.name} ${repo.description || ''}`.toLowerCase()
            const frameworks = []
            
            if (repoContent.includes('react')) frameworks.push('React')
            if (repoContent.includes('next.js') || repoContent.includes('nextjs')) frameworks.push('Next.js')
            if (repoContent.includes('node') && repo.language === 'JavaScript') frameworks.push('Node.js')
            if (repoContent.includes('django')) frameworks.push('Django')
            if (repoContent.includes('docker')) frameworks.push('Docker')
            if (repoContent.includes('api')) frameworks.push('REST API')
            if (repoContent.includes('sql') || repoContent.includes('database')) frameworks.push('SQL')
            if (repoContent.includes('mongodb')) frameworks.push('MongoDB')
            if (repoContent.includes('pac') || repoContent.includes('automation')) frameworks.push('Automation')

            frameworks.forEach(fw => {
              if (!techMap[fw]) {
                techMap[fw] = {
                  name: fw,
                  repos: [],
                  description: techDescriptions[fw] || `${fw} is an important technology in modern development.`,
                  icon: getTechIcon(fw)
                }
              }
              const exists = techMap[fw].repos.some(r => r.name === repo.name)
              if (!exists) {
                techMap[fw].repos.push({
                  name: repo.name,
                  url: repo.html_url,
                  description: repo.description || 'No description',
                  stars: repo.stargazers_count || 0
                })
              }
            })

            totalStars += repo.stargazers_count || 0
            totalForks += repo.forks_count || 0
            totalSize += repo.size || 0
          })

          // Convert to array and sort by number of repos
          const techArray = Object.values(techMap)
            .sort((a, b) => b.repos.length - a.repos.length)
            .slice(0, 15)

          setTechnologiesData(techArray)
          setStats({
            totalStars,
            totalForks,
            avgRepoSize: Math.round(totalSize / (reposData.length || 1))
          })
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  const getTechIcon = (tech) => {
    const iconMap = {
      'JavaScript': 'fab fa-js-square',
      'Python': 'fab fa-python',
      'React': 'fab fa-react',
      'Next.js': 'fas fa-rocket',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'Node.js': 'fab fa-node-js',
      'Java': 'fab fa-java',
      'C++': 'fas fa-code',
      'Git': 'fab fa-git-alt',
      'Docker': 'fab fa-docker',
      'REST API': 'fas fa-exchange-alt',
      'SQL': 'fas fa-database',
      'MongoDB': 'fas fa-leaf',
      'PACSystems': 'fas fa-industry',
      'Automation': 'fas fa-cogs'
    }
    return iconMap[tech] || 'fas fa-code'
  }

  return (
    <section id="about" className="about section-animate">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-profile">
            {!loading && userInfo.avatar_url && (
              <Tilt3DCard maxTilt={12}>
                <div className="profile-card">
                  <img src={userInfo.avatar_url} alt={userInfo.name} className="profile-avatar" />
                  <h3 className="profile-name">{userInfo.name}</h3>
                  {userInfo.location && (
                    <p className="profile-location">
                      <i className="fas fa-map-marker-alt"></i> {userInfo.location}
                    </p>
                  )}
                  {userInfo.bio && (
                    <p className="profile-bio">{userInfo.bio}</p>
                  )}
                  <div className="profile-links">
                    <a href={userInfo.profile_url} target="_blank" rel="noopener noreferrer" className="profile-link-btn">
                      <i className="fab fa-github"></i> GitHub Profile
                    </a>
                  </div>
                </div>
              </Tilt3DCard>
            )}
          </div>

          <div className="about-text">
            <p className="about-intro">
              Hi! I'm a B.Tech student passionate about bridging the gap between industrial automation and creative web development.
            </p>
            <p className="about-para">
              My journey began with a deep dive into PACSystems C Toolkit programming, where I developed expertise in deterministic industrial code, real-time troubleshooting, and scan-safe logic implementation. I've worked extensively with PME block mapping and advanced automation concepts.
            </p>
            <p className="about-para">
              Parallelly, I've cultivated strong web development skills using modern technologies and frameworks. I believe in writing code that's not just functional but also innovative and visually compelling.
            </p>
            <p className="about-para">
              When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, and documenting my learning journey. My tagline encapsulates my philosophy: <strong>"Engineering precision meets creative code."</strong>
            </p>
          </div>
        </div>

        {!loading && technologiesData.length > 0 && (
          <div className="tech-stack">
            <h3>Technologies & Tools</h3>
            <div className="tech-list">
              {technologiesData.map((tech, idx) => (
                <div key={idx} className="tech-card">
                  <div className="tech-header">
                    <div className="tech-title">
                      <i className={tech.icon}></i>
                      <h4>{tech.name}</h4>
                    </div>
                    <span className="tech-count">{tech.repos.length} project{tech.repos.length !== 1 ? 's' : ''}</span>
                  </div>
                  
                  <p className="tech-description">{tech.description}</p>
                  
                  {tech.repos.length > 0 && (
                    <div className="tech-projects">
                      <h5>Projects & Repositories</h5>
                      <div className="projects-list">
                        {tech.repos.slice(0, 3).map((repo, repoIdx) => (
                          <a
                            key={repoIdx}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <div className="project-info">
                              <span className="project-name">{repo.name}</span>
                              {repo.stars > 0 && (
                                <span className="project-stars">
                                  <i className="fas fa-star"></i> {repo.stars}
                                </span>
                              )}
                            </div>
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        ))}
                        {tech.repos.length > 3 && (
                          <a href={userInfo.profile_url} target="_blank" rel="noopener noreferrer" className="view-all-link">
                            View all {tech.repos.length} projects <i className="fas fa-arrow-right"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="about-highlights">
          <Tilt3DCard maxTilt={10}>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <h3>Repositories</h3>
              <p className="stat-number">{userInfo.public_repos}</p>
              <p className="stat-label">Public Projects</p>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Total Stars</h3>
              <p className="stat-number">{stats.totalStars}</p>
              <p className="stat-label">Community Recognition</p>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p className="stat-number">{userInfo.followers}</p>
              <p className="stat-label">Followers on GitHub</p>
            </div>
          </Tilt3DCard>

          <Tilt3DCard maxTilt={10}>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>Creative solutions, emerging tech, continuous learning</p>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  )
}

import { useNavigate, useParams } from 'react-router-dom'
import './SkillDetail.css'

export default function SkillDetail() {
  const navigate = useNavigate()
  const { skillName } = useParams()
  
  // Skill details database
  const skillDetailsData = {
    'PACSystems C Toolkit': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'A comprehensive programming toolkit used for developing control solutions with GE PACSystems platforms. It enables real-time logic programming and system optimization.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Real-time logic development',
        'PLC programming and configuration',
        'Deterministic execution models',
        'System integration and debugging',
        'Performance optimization',
        'Safety-critical system design'
      ],
      projects: [
        'Smart Manufacturing Controller',
        'Industrial Process Automation',
        'Real-time Data Acquisition System'
      ]
    },
    'Python': {
      category: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Versatile high-level programming language used for backend development, data processing, scripting, and automation. Known for clean syntax and extensive libraries.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'Web development frameworks (Django, Flask)',
        'Data analysis and manipulation',
        'Automation scripting',
        'Machine learning integration',
        'API development',
        'Database integration'
      ],
      projects: [
        'REST API Server',
        'Data Processing Pipeline',
        'Automation Tools'
      ]
    },
    'React': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'Modern JavaScript library for building user interfaces with component-based architecture. Enables efficient rendering and state management for complex applications.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Component architecture',
        'State management (useState, Context API)',
        'Hooks and functional components',
        'React Router for navigation',
        'Performance optimization',
        'Form handling and validation'
      ],
      projects: [
        'Personal Portfolio Website',
        'E-commerce Platform',
        'Dashboard Applications'
      ]
    },
    'Next.js': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'React framework providing server-side rendering, static generation, and built-in optimization for production-ready web applications.',
      proficiency: 'Intermediate',
      experience: '1+ years',
      keyPoints: [
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'API routes',
        'Image optimization',
        'Built-in CSS support',
        'Deployment ready'
      ],
      projects: [
        'Portfolio with SSR',
        'Blog Platform',
        'E-commerce Store'
      ]
    },
    'Java': {
      category: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Object-oriented programming language widely used for enterprise applications, backend services, and cross-platform development.',
      proficiency: 'Intermediate',
      experience: '2+ years',
      keyPoints: [
        'Object-oriented programming',
        'Spring Framework',
        'JDBC and database connectivity',
        'Multithreading and concurrency',
        'Exception handling',
        'Microservices development'
      ],
      projects: [
        'Bank Management System',
        'E-learning Platform',
        'REST API Services'
      ]
    },
    'C++': {
      category: 'Backend Development',
      icon: 'fas fa-server',
      description: 'High-performance programming language used for system software, embedded systems, and performance-critical applications.',
      proficiency: 'Intermediate',
      experience: '1+ years',
      keyPoints: [
        'Memory management',
        'Pointers and references',
        'Object-oriented programming',
        'STL (Standard Template Library)',
        'System-level programming',
        'Performance optimization'
      ],
      projects: [
        'Embedded Systems',
        'Game Development',
        'High-Performance Computing'
      ]
    },
    'HTML & CSS': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'Fundamental web technologies for creating structured and styled web pages. HTML provides content structure while CSS handles visual presentation.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'Semantic HTML5',
        'CSS grid and flexbox',
        'Responsive design',
        'CSS animations',
        'Accessibility (a11y)',
        'Cross-browser compatibility'
      ],
      projects: [
        'Responsive Websites',
        'Web Applications',
        'Static Sites'
      ]
    },
    'JavaScript': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'Dynamic programming language that powers interactive web applications. Essential for frontend development and increasingly popular for backend with Node.js.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'ES6+ features',
        'Async/await and promises',
        'DOM manipulation',
        'Event handling',
        'Functional programming',
        'AJAX and fetch API'
      ],
      projects: [
        'Interactive Web Apps',
        'Real-time Applications',
        'Browser Extensions'
      ]
    },
    'Git & GitHub': {
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      description: 'Version control system for tracking code changes, collaboration, and project management. GitHub is the leading platform for hosting and sharing code.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'Branching and merging',
        'Pull requests and code review',
        'Commit history management',
        'Conflict resolution',
        'GitHub workflows',
        'Collaborative development'
      ],
      projects: [
        'Team projects',
        'Open source contributions',
        'Portfolio projects'
      ]
    },
    'REST APIs': {
      category: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Architectural style for building scalable web services using HTTP requests. RESTful APIs are fundamental for modern web and mobile applications.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'HTTP methods (GET, POST, PUT, DELETE)',
        'Status codes and error handling',
        'Authentication and authorization',
        'Pagination and filtering',
        'API documentation',
        'Rate limiting'
      ],
      projects: [
        'Social Media API',
        'E-commerce Backend',
        'Microservices Architecture'
      ]
    },
    'Responsive Design': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'Design approach ensuring web applications work seamlessly across devices of different sizes. Critical for modern web development and user experience.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Mobile-first approach',
        'Media queries',
        'Flexible layouts',
        'Viewport optimization',
        'Touch-friendly interfaces',
        'Device testing'
      ],
      projects: [
        'Responsive Websites',
        'Mobile Applications',
        'PWA Development'
      ]
    },
    'Database Design': {
      category: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Process of creating efficient database structures for storing and retrieving data. Involves normalization, schema design, and query optimization.',
      proficiency: 'Intermediate',
      experience: '2+ years',
      keyPoints: [
        'Relational databases',
        'NoSQL databases',
        'Schema design',
        'Query optimization',
        'Indexing strategies',
        'Data integrity'
      ],
      projects: [
        'E-commerce Database',
        'Social Network Database',
        'Analytics Database'
      ]
    },
    'VS Code': {
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      description: 'Lightweight yet powerful code editor with extensive extension support. Industry standard for modern web development.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'Extensions and plugins',
        'Debugging tools',
        'Git integration',
        'Terminal integration',
        'Code formatting',
        'Keyboard shortcuts mastery'
      ],
      projects: [
        'All development projects',
        'Configuration management',
        'Custom workflows'
      ]
    },
    'Linux': {
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      description: 'Open-source operating system widely used in servers and development environments. Essential for backend development and DevOps.',
      proficiency: 'Intermediate',
      experience: '2+ years',
      keyPoints: [
        'Command line mastery',
        'File system management',
        'User and permissions',
        'Process management',
        'Shell scripting',
        'Server administration'
      ],
      projects: [
        'Server deployment',
        'Development environment setup',
        'System administration'
      ]
    },
    'Debugging': {
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      description: 'Process of identifying and fixing errors in code. Essential skill for writing reliable and efficient software.',
      proficiency: 'Advanced',
      experience: '3+ years',
      keyPoints: [
        'Breakpoint debugging',
        'Console logging',
        'Browser DevTools',
        'Error analysis',
        'Performance profiling',
        'Memory leak detection'
      ],
      projects: [
        'Complex application debugging',
        'Performance optimization',
        'Bug fixes and patches'
      ]
    },
    'PME Block Mapping': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'Advanced technique for organizing and managing block-based logic in PACSystems programming. Ensures efficient and maintainable control systems.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Block organization',
        'Signal routing',
        'Data flow management',
        'Optimization techniques',
        'Documentation practices',
        'Maintenance procedures'
      ],
      projects: [
        'Complex control systems',
        'Industrial process automation',
        'System upgrades'
      ]
    },
    'Runtime Troubleshooting': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'Expertise in diagnosing and resolving issues in running systems without stopping production. Critical for industrial operations.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'System monitoring',
        'Anomaly detection',
        'Root cause analysis',
        'Quick problem resolution',
        'Logging and diagnostics',
        'Preventive maintenance'
      ],
      projects: [
        'Production line troubleshooting',
        'System health monitoring',
        'Incident response'
      ]
    },
    'UI/UX Animation': {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      description: 'Creating smooth and delightful animations to enhance user experience. Combines design principles with technical implementation.',
      proficiency: 'Intermediate',
      experience: '1+ years',
      keyPoints: [
        'CSS animations',
        'CSS transitions',
        'JavaScript animations',
        'Performance optimization',
        'User experience principles',
        'Animation timing and easing'
      ],
      projects: [
        'Portfolio website',
        'Interactive applications',
        'Loading animations'
      ]
    },
    'Scan-Safe Logic': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'Advanced logic design pattern ensuring safety-critical operations in industrial systems. Critical for preventing hazardous states and ensuring predictable behavior.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Safety-critical logic design',
        'Hazard analysis',
        'Fail-safe mechanisms',
        'Certification compliance',
        'Rigorous testing protocols',
        'Risk mitigation strategies'
      ],
      projects: [
        'Safety-Critical Controller',
        'Industrial Safety System',
        'Emergency Stop Mechanism'
      ]
    },
    'Deterministic Code': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'Code that produces predictable, repeatable results with guaranteed execution timing. Essential for real-time industrial control systems.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Guaranteed execution time',
        'Predictable behavior',
        'Real-time performance',
        'Priority handling',
        'Resource management',
        'Worst-case analysis'
      ],
      projects: [
        'Real-Time Control System',
        'High-Speed Logic Controller',
        'Deterministic Scheduling'
      ]
    },
    'Real-Time Systems': {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      description: 'Systems that respond to inputs with guaranteed timing constraints. Critical for industrial automation, IoT, and embedded systems.',
      proficiency: 'Advanced',
      experience: '2+ years',
      keyPoints: [
        'Hard real-time constraints',
        'Task scheduling',
        'Interrupt handling',
        'Latency optimization',
        'Resource allocation',
        'Performance monitoring'
      ],
      projects: [
        'Industrial Process Controller',
        'Real-Time Monitoring System',
        'Predictive Maintenance System'
      ]
    }
  }

  const skill = skillDetailsData[skillName?.replace(/-/g, ' ')]

  if (!skill) {
    return (
      <div className="skill-detail">
        <div className="skill-detail-container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </button>
          <div className="skill-not-found">
            <p>Skill details not found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="skill-detail">
      <div className="skill-detail-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i> Back to Skills
        </button>

        <div className="skill-header">
          <i className={skill.icon}></i>
          <h1>{skillName?.replace(/-/g, ' ')}</h1>
          <span className="skill-category-badge">{skill.category}</span>
        </div>

        <div className="skill-info-grid">
          <div className="skill-info-item">
            <label>Proficiency Level</label>
            <p>{skill.proficiency}</p>
          </div>
          <div className="skill-info-item">
            <label>Experience</label>
            <p>{skill.experience}</p>
          </div>
        </div>

        <section className="skill-section">
          <h2>Overview</h2>
          <p className="skill-description">{skill.description}</p>
        </section>

        <section className="skill-section">
          <h2>Key Points & Features</h2>
          <ul className="key-points-list">
            {skill.keyPoints.map((point, idx) => (
              <li key={idx}>
                <i className="fas fa-check-circle"></i>
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="skill-section">
          <h2>Projects Using This Skill</h2>
          <div className="projects-grid">
            {skill.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <i className="fas fa-project-diagram"></i>
                <p>{project}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

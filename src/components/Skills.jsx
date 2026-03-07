import { useNavigate } from 'react-router-dom'
import './Skills.css'

export default function Skills() {
  const navigate = useNavigate()
  
  const skillsData = [
    {
      category: 'Industrial Automation',
      icon: 'fas fa-industry',
      skills: [
        'PACSystems C Toolkit',
        'PME Block Mapping',
        'Scan-Safe Logic',
        'Deterministic Code',
        'Runtime Troubleshooting',
        'Real-Time Systems'
      ]
    },
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        'Python',
        'Java',
        'C++',
        'REST APIs',
        'Database Design'
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'fas fa-paint-brush',
      skills: [
        'Next.js',
        'React',
        'HTML & CSS',
        'JavaScript',
        'Responsive Design',
        'UI/UX Animation'
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        'Git & GitHub',
        'VS Code',
        'Linux',
        'Debugging'
      ]
    }
  ]

  return (
    <section id="skills" className="skills section-animate">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <i className={skill.icon}></i>
                <h3>{skill.category}</h3>
              </div>
              <div className="skill-items">
                {skill.skills.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="skill-tag" 
                    onClick={() => navigate(`/skill/${item.replace(/\s+/g, '-')}`)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

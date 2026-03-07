import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email')
      return
    }

    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact section-animate">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Ready to collaborate on industrial automation projects or discuss creative web solutions? Let's connect!
            </p>

            <div className="contact-methods">
              <a href="mailto:gtc.ashish1@gmail.com" className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>gtc.ashish1@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="method-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="method-content">
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </a>

              <a href="https://github.com/itsashish1" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="method-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="method-content">
                  <h4>GitHub</h4>
                  <p>View my projects</p>
                </div>
              </a>

              <a href="https://twitter.com" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="method-icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="method-content">
                  <h4>Twitter</h4>
                  <p>Follow updates</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                placeholder="Your Message" 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitted}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

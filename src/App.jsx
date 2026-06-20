import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  FileText, 
  ExternalLink, 
  Code, 
  Database, 
  Layout, 
  Award, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Send, 
  Terminal, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './App.css';
import avatarImg from './assets/gabrielprofile.JPG';

// Inline SVGs for Brand Icons
const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Theme management
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light-theme');
    } else {
      setTheme('dark');
      document.body.classList.remove('light-theme');
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submission handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Background Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      {/* Header */}
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" id="logo-link">
            Gabriel Kimbio
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-links d-none-mobile">
            {navItems.map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" id="theme-toggle-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile menu and toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="d-block-mobile">
            {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" id="mobile-theme-toggle-btn">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <button 
              className="menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} style={{ display: mobileMenuOpen ? 'flex' : '' }} id="mobile-nav">
          {navItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              id={`mobile-nav-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="section hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="hero-tag" id="status-tag">
                <Sparkles size={14} /> Responsive Web Application
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="shimmer-text">Gabriel Kimbio</span>
              </h1>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontWeight: '600' }}>
                Software Engineer & UI Developer
              </h2>
              <p className="hero-description">
                I study Software Engineering at Middle East Technical University. I love building high-performance web applications using React, Next.js, and Python, crafting sleek user interfaces and robust APIs.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary" id="cta-work-btn">
                  View My Work <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary" id="cta-contact-btn">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <div className="avatar-wrapper">
                <img 
                  src={avatarImg} 
                  alt="Gabriel Kimbio Avatar" 
                  className="avatar-img" 
                  id="avatar-image-id"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section className="section" id="about">
          <div className="container">
            <h2 className="section-title" id="about-title">About Me</h2>
            <div className="grid grid-2">
              <div className="glass-card" style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={22} className="shimmer-text" /> My Story
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  I am a passionate and disciplined Software Engineering student currently pursuing my Bachelor of Science degree at Middle East Technical University (expected graduation 2027).
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  My focus lies in modern front-end and full-stack web development. I thrive in collaborative Agile team environments where I can combine technical problem-solving with dynamic design.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  I'm constantly looking to explore new technologies, build robust applications, and contribute to open-source or high-impact software systems.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <a 
                    href="https://github.com/gabrielkimbio2-lgtm" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary"
                    style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                    id="resume-btn"
                  >
                    <FileText size={16} /> GitHub Profile
                  </a>
                </div>
              </div>

              <div className="glass-card" style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code size={22} className="shimmer-text" /> Tech Stack
                </h3>
                
                <div className="skills-container">
                  <div className="skill-category">
                    <h4 className="skill-category-title">
                      <Layout size={16} /> Frontend & Styling
                    </h4>
                    <div className="skills-list">
                      <span className="skill-badge">React</span>
                      <span className="skill-badge">Next.js</span>
                      <span className="skill-badge">JavaScript (ES6+)</span>
                      <span className="skill-badge">HTML5 / CSS3</span>
                      <span className="skill-badge">Vite</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4 className="skill-category-title">
                      <Database size={16} /> Languages & Databases
                    </h4>
                    <div className="skills-list">
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">C Language</span>
                      <span className="skill-badge">SQL (Oracle)</span>
                      <span className="skill-badge">GraphQL</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4 className="skill-category-title">
                      <Award size={16} /> Tools & Methodologies
                    </h4>
                    <div className="skills-list">
                      <span className="skill-badge">Git & GitHub</span>
                      <span className="skill-badge">Agile / Scrum</span>
                      <span className="skill-badge">Docker</span>
                      <span className="skill-badge">Requirements Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="section-title" id="projects-title">Featured Projects</h2>
            <div className="grid grid-3">
              {/* Project 1 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div className="project-image-wrapper">
                  <div className="project-gradient-placeholder">
                    <Layout size={48} style={{ color: 'white', opacity: 0.8 }} />
                  </div>
                </div>
                <h3 className="project-title">Finance Dashboard</h3>
                <p className="project-description">
                  Developed a modern, interactive finance dashboard prototype displaying financial stats, analytics breakdowns, and visual metrics cleanly.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">CSS3</span>
                </div>
                <div className="project-links" style={{ marginTop: 'auto' }}>
                  <a href="https://finance-dashboard-five-silk.vercel.app/" className="project-link" id="project1-demo-btn">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="project-link" id="project1-github-btn">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div className="project-image-wrapper">
                  <div className="project-gradient-placeholder" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)' }}>
                    <Database size={48} style={{ color: 'white', opacity: 0.8 }} />
                  </div>
                </div>
                <h3 className="project-title">METUSHARE Booking</h3>
                <p className="project-description">
                  Collaborative campus service booking platform. Led the backend development, API integration, and database schemas using an Agile model.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">SQL</span>
                  <span className="project-tag">Agile/Scrum</span>
                </div>
                <div className="project-links" style={{ marginTop: 'auto' }}>
                  <a href="#projects" className="project-link" id="project2-demo-btn">
                    <ExternalLink size={16} /> Prototype
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="project-link" id="project2-github-btn">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div className="project-image-wrapper">
                  <div className="project-gradient-placeholder" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4) 0%, rgba(239, 68, 68, 0.4) 100%)' }}>
                    <Terminal size={48} style={{ color: 'white', opacity: 0.8 }} />
                  </div>
                </div>
                <h3 className="project-title">Interactive Portfolio</h3>
                <p className="project-description">
                  A premium, custom-designed dark-mode-first developer portfolio utilizing modern React states, smooth scroll, and theme management.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Vite</span>
                  <span className="project-tag">Lucide Icons</span>
                </div>
                <div className="project-links" style={{ marginTop: 'auto' }}>
                  <a href="#home" className="project-link" id="project3-demo-btn">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="project-link" id="project3-github-btn">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="section" id="experience">
          <div className="container">
            <h2 className="section-title" id="experience-title">Experience & Education</h2>
            
            <div className="timeline">
              {/* Education */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">2023 - 2027 (Expected)</div>
                  <h3 className="timeline-role">B.S. in Software Engineering</h3>
                  <div className="timeline-company">
                    <GraduationCap size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
                    Middle East Technical University
                  </div>
                  <p className="timeline-description">
                    Focusing on computer systems, web application architectures, database design, software engineering methodologies, algorithms, and agile paradigms.
                  </p>
                </div>
              </div>

              {/* Work Experience 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">Sep 2022 - Jul 2023</div>
                  <h3 className="timeline-role">Sales and Marketing Executive</h3>
                  <div className="timeline-company">
                    <Briefcase size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
                    Vision Sales and Marketing | Nairobi, Kenya
                  </div>
                  <p className="timeline-description">
                    Drove corporate outreach, organized weekly strategy alignment sessions, and collaborated with cross-functional teams to pitch business solutions.
                  </p>
                </div>
              </div>

              {/* Work Experience 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">Dec 2019 - Sep 2021</div>
                  <h3 className="timeline-role">Networking & Sales Representative</h3>
                  <div className="timeline-company">
                    <Briefcase size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
                    Global Internet Fortunes | Nairobi, Kenya
                  </div>
                  <p className="timeline-description">
                    Built, optimized, and managed professional client networks. Conducted technical strategy sessions and onboarding courses for incoming representatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container">
            <h2 className="section-title" id="contact-title">Get In Touch</h2>
            <div className="contact-container">
              <div className="glass-card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>
                  Let's discuss opportunities or collaborate!
                </h3>
                
                {formSubmitted && (
                  <div className="form-alert form-alert-success" id="success-alert">
                    <Sparkles size={18} />
                    <span>Thank you! Your message was sent successfully. I'll get back to you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} id="contact-form-id">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">Your Name</label>
                    <input 
                      type="text" 
                      id="form-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">Your Email</label>
                    <input 
                      type="email" 
                      id="form-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-message">Message</label>
                    <textarea 
                      id="form-message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="form-input" 
                      placeholder="Tell me about your project..." 
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="submit-form-btn">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="social-links">
            <a href="https://github.com/gabrielkimbio2-lgtm" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub" id="footer-github-link">
              <Github size={20} />
            </a>
            <a href="www.linkedin.com/in/kimbio-gabriel-boli-52a7a41a0" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn" id="footer-linkedin-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gabrielkimbio2@gmail.com" className="social-link" aria-label="Email" id="footer-email-link">
              <Mail size={20} />
            </a>
          </div>
          <p className="copyright" id="footer-copyright-text">
            © {new Date().getFullYear()} Gabriel Kimbio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

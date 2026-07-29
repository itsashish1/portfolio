# Product Requirement Document (PRD)

## Project Name: Ashish Yadav Portfolio Website
**Version:** 1.0.0  
**Status:** Active / Production-Ready  
**Tech Stack:** React 18, Vite 5, React Router v7, Custom CSS3, GitHub API Integration  
**Repository:** `itsashish1/portfolio`  

---

## 1. Executive Summary & Vision

### 1.1 Vision
To build a high-performance, visually compelling, and interactive personal developer portfolio website for **Ashish Yadav**. The website serves as a bridge between his dual expertise in **Industrial Automation** (PACSystems C Toolkit, scan-safe logic, deterministic code) and modern **Full-Stack Web Development** (React, C++, Python, Java, REST APIs).

### 1.2 Core Tagline
> *"Engineering precision meets creative code."*

---

## 2. Target Audience & Stakeholders

1. **Tech Recruiters & Talent Acquisition Teams:** Evaluating technical skills, project showcase, and problem-solving readiness (LeetCode, GitHub).
2. **Engineering Managers & Tech Leads:** Reviewing code quality, architecture understanding, industrial automation expertise, and DSA proficiency.
3. **Clients & Collaborators:** Looking for freelance web development, automation projects, or open-source collaboration.
4. **General Visitors & Peers:** Learning from blog/journal entries and exploring interactive UI/UX features.

---

## 3. Product Features & Modules Analysis

### 3.1 Onboarding & First-Time Visitor Experience
- **Welcome Animation (`WelcomeAnimation.jsx`):**
  - Displays a sparkling splash animation with key tech terms (`Code`, `C++`, `Python`, `Dev`, `GitHub`, `DSA`) on initial load.
  - Visible for exactly 2 seconds.
  - Persisted in `localStorage` (`hasVisited`) to ensure it only runs on the user's first visit per device/browser session.

### 3.2 Global UI & Micro-Interactions
- **Floating Background Words (`FloatingWords.jsx`):**
  - Ambient floating technical keywords across the canvas for immersive design.
- **Interactive Mouse Particles (`MouseParticles.jsx`):**
  - Dynamic canvas particle effect tracking cursor movements.
- **Theme Switcher (`Navbar.jsx` / `App.jsx`):**
  - Seamless Dark/Light mode toggle with persistence via `localStorage` (`darkMode`).
- **Responsive Navigation Bar (`Navbar.jsx`):**
  - Sticky navigation bar with active section highlighting on scroll.
  - Hamburger menu for mobile viewports.
- **Scroll To Top Utility (`ScrollToTop.jsx`):**
  - Floating action button appearing dynamically when scrolling down, enabling smooth one-click scroll to top.

### 3.3 Hero Section (`Hero.jsx`)
- **Interactive Typewriter Effect:** Displays rotating professional roles (e.g., Full Stack Developer, Industrial Automation Engineer).
- **Parallax & Motion Effects:** Parallax background response on mouse scroll and floating code blocks.
- **Call-to-Action (CTA):** Quick navigation buttons to "Explore Projects" and "Get in Touch" / Resume download.

### 3.4 About Me & Live GitHub Integration (`About.jsx`)
- **Personal Background:** Highlights dual capability in PACSystems C Toolkit and Full-Stack web apps.
- **Live GitHub Profile Sync:**
  - Integrates with GitHub REST API (`https://api.github.com/users/itsashish1`).
  - Fetches avatar, bio, location, public repositories count, total stars, total forks, and followers in real time.
- **Automated Technology Analysis:**
  - Scans user repositories to map top languages (JavaScript, Python, C++, React, Next.js, Docker, SQL, PACSystems).
  - Groups repositories under tech stack cards with deep-link references to GitHub.

### 3.5 Skills Showcase & Deep-Dive Routing (`Skills.jsx` & `SkillDetail.jsx`)
- **Categorized Skill Matrix:**
  1. *Industrial Automation:* PACSystems C Toolkit, PME Block Mapping, Scan-Safe Logic, Deterministic Code, Real-Time Troubleshooting.
  2. *Backend Development:* Python, Java, C++, REST APIs, Database Design.
  3. *Frontend Development:* React, Next.js, HTML5/CSS3, JavaScript (ES6+), Responsive UI.
  4. *Tools & Technologies:* Git & GitHub, VS Code, Linux, Debugging.
- **Dynamic Skill Routing:**
  - Clicking any skill tag navigates to `/skill/:skillName` route (`SkillDetail.jsx`), providing in-depth code samples, use-cases, and project linkages.

### 3.6 GitHub Showcase & Stats (`GitHub.jsx`)
- **GitHub Stats Display:** Interactive overview of active repositories, total contributions, star count, and primary languages.
- **Recent Activity Feed:** Timeline of recent repository updates and commits.

### 3.7 LeetCode Journey & DSA Dashboard (`LeetCode.jsx`)
- **Problem Solving Analytics:**
  - Solved count tracking: 56 Total Solved (19 Easy, 30 Medium, 7 Hard).
  - Rank & Acceptance: Global Rank (~#2.24M), 87.65% Acceptance Rate.
- **Difficulty Visual Chart:** Custom CSS percentage bar chart illustrating problem breakdown.
- **Language Preference:** Showcase of C++ (35 solved) and Java (21 solved) as primary languages for DSA.
- **Target Goals & Solution Repo:** Direct CTA to LeetCode profile and GitHub LeetCode Solutions repository.

### 3.8 Learning Journal (`Learning.jsx`)
- **Blog-Style Micro-Journal:** Documenting engineering growth, technical challenges solved, and emerging technology studies over time.

### 3.9 Contact & Communication Hub (`Contact.jsx` & `Footer.jsx`)
- **Interactive Contact Form:** Includes client-side input validation for name, email, subject, and message.
- **Social Profiles Integration:** Instant access to GitHub, LinkedIn, and Email (`gtc.ashish1@gmail.com`).
- **Footer:** Quick section jump links and copyright details.

---

## 4. Technical Architecture & System Specifications

```
portfolio/
├── public/
├── src/
│   ├── assets/              # Static media & images
│   ├── components/          # Modular React components
│   │   ├── About.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── FloatingWords.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── GitHub.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Learning.jsx / .css
│   │   ├── LeetCode.jsx / .css
│   │   ├── MouseParticles.jsx / .css
│   │   ├── Navbar.jsx / .css
│   │   ├── ScrollToTop.jsx / .css
│   │   ├── SkillDetail.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   └── WelcomeAnimation.jsx / .css
│   ├── App.jsx              # Main App Component & Router Setup
│   ├── App.css              # App-level styles
│   ├── index.css            # Global design tokens, themes & CSS variables
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
├── README.md
└── PRD.md
```

### 4.1 Key Dependencies
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `react` | `^18.2.0` | Declarative UI framework |
| `react-dom` | `^18.2.0` | DOM rendering engine |
| `react-router-dom` | `^7.13.1` | Client-side page & dynamic skill routing |
| `vite` | `^5.0.8` | Next-generation frontend build tool and dev server |

---

## 5. Non-Functional Requirements (NFRs)

1. **Performance:** Fast initial load (<1.5s First Contentful Paint) leveraging Vite ESM bundle splitting.
2. **Responsiveness:** Fluid grid and flexbox layouts supporting mobile (<576px), tablet (768px-1024px), and desktop (>1200px) screens.
3. **Accessibility (a11y):** WCAG compliant contrast ratios, semantic HTML5 elements (`<section>`, `<nav>`, `<header>`, `<footer>`), keyboard nav support.
4. **Theme Persistence:** Theme preferences (`darkMode`) and initial welcome state stored in `localStorage`.
5. **SEO & Metadata:** Page title, description tags, and structured heading hierarchy (`h1`, `h2`, `h3`).

---

## 6. Future Enhancements & Product Roadmap

- [ ] **LeetCode GraphQL API Integration:** Replace hardcoded LeetCode stats with live fetching from `leetcode-stats-api`.
- [ ] **Blog Engine / Markdown CMS:** Dynamic rendering of blog posts from markdown files.
- [ ] **Project Search & Filter Tagging:** Real-time search filter for projects by tech stack tags.
- [ ] **Web Analytics Integration:** Vercel Analytics or Google Analytics 4 integration for visitor tracking.
- [ ] **Contact Form Backend / EmailJS:** Direct email dispatch system without page redirect.

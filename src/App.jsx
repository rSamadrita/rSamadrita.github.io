import { useMemo, useState } from 'react';

const skillGroups = [
  { title: 'Frontend core', items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS'] },
  { title: 'Mobile development', items: ['React Native', 'iOS & Android', 'Expo', 'React Navigation', 'AsyncStorage'] },
  { title: 'State & data', items: ['Redux', 'GraphQL', 'REST APIs', 'Strapi CMS', 'Redux Toolkit'] },
  { title: 'Tools & workflow', items: ['GitHub', 'Git', 'Jira', 'Confluence', 'CI/CD', 'Webpack', 'Storybook'], teal: true },
  { title: 'Performance & quality', items: ['Jest', 'React Testing Library', 'Lazy Loading', 'Render Optimization', 'WCAG 2.0/2.1'] },
  { title: 'Emerging tech', items: ['Generative AI', 'Prompt Engineering', 'LLM Integration', 'AI-assisted development tools'], teal: true },
];

const projects = [
  {
    category: 'Government',
    period: 'Nov 2024 – Present',
    title: 'DSP Ireland – Government Pension Platform',
    description:
      'Delivered enrollment and opt-in / opt-out flows for a pension platform serving 750K+ users, building multilingual API-driven UI with 60–70+ GraphQL endpoints and WCAG 2.1 AA compliance.',
    badges: ['React', 'TypeScript', 'GraphQL', 'React Native', 'Strapi CMS'],
    stats: [
      { value: '750K+', label: 'Active users' },
      { value: '~90%', label: 'Accessibility score' },
      { value: '2x', label: 'Star of the Month' },
    ],
  },
  {
    category: 'Education tech',
    period: 'Jan 2024 – Sep 2024',
    title: 'Dibber Education Platform (Norway)',
    description:
      'Led frontend development for a back-office platform across 600+ schools in 9 countries, maintaining a Storybook library of 40+ reusable components and improving performance by ~60%.',
    badges: ['React', 'Redux', 'Storybook', 'WCAG 2.0'],
    stats: [
      { value: '600+', label: 'Schools' },
      { value: '9', label: 'Countries' },
      { value: '~60%', label: 'Performance gain' },
    ],
    teal: true,
  },
  {
    category: 'Fintech / Aviation',
    period: 'Feb 2022 – Nov 2024',
    title: 'OMSA, Air India Express & Standard Bank',
    description:
      'Delivered frontend solutions across insurance, airline booking, and banking platforms, creating 30+ reusable React components and API-driven responsive UI modules.',
    badges: ['React', 'TypeScript', 'REST APIs'],
    stats: [],
  },
];

const resumeData = {
  react: {
    title: 'Frontend Engineer',
    contact: 'Pune, India | 8420567946 | r.samadrita3@gmail.com | linkedin.com/in/samadrita-roy-975638188 | github.com/rSamadrita',
    summary:
      'Frontend Engineer with 4+ years of experience designing, developing and maintaining scalable, responsive web applications using React.js, TypeScript and JavaScript (ES6+) across aviation, fintech, education and government domains. Strong hands-on expertise in React component-based architecture, GraphQL and REST API integration, GitHub-based version control, and CI/CD pipelines, combined with solid grounding in Agile/SAFe delivery, unit testing (Jest), code reviews, and SDLC best practices. Delivered measurable impact through ~70% faster development cycles via reusable component design, ~20% performance improvement, and ~90% WCAG 2.0/2.1 accessibility audit scores on production systems serving 750K+ users. Working knowledge of AI-assisted development tools and responsible AI usage in modern software engineering.',
    skills: [
      ['Languages & Frameworks:', 'JavaScript (ES6+), TypeScript, React.js, React Native, HTML5, CSS3/SCSS'],
      ['State Management & APIs:', 'Redux, GraphQL, REST APIs'],
      ['Version Control & Tools:', 'GitHub, Git, Visual Studio Code, Jira, Confluence, Webpack, Storybook, CI/CD'],
      ['Testing & Quality:', 'Jest, React Testing Library, Unit Testing, Peer Code Reviews'],
      ['Architecture:', 'Component-Based Architecture, Modular & Scalable UI Design, Non-Functional Requirements (NFR)'],
      ['Methodology:', 'Agile/Scrum, SAFe, Software Development Life Cycle (SDLC)'],
      ['Accessibility & Performance:', 'WCAG 2.0/2.1, Cross-Browser Compatibility, Lazy Loading, Render Optimization, Responsive Design'],
      ['Emerging Technologies:', 'Generative AI, Prompt Engineering, LLM Integration, AI-Assisted Development Tools'],
    ],
    experience: [
      {
        role: 'Frontend Developer (Custom Software Engineer track)',
        date: 'Feb 2022 – Present',
        company: 'Tata Consultancy Services — Pune, India',
        bullets: [
          'Designed, developed and maintained 5+ enterprise-scale React.js and TypeScript applications supporting 750K+ users across aviation, fintech, education and government platforms, contributing independently as a subject matter expert (SME) across the SDLC.',
          'Built reusable, component-based React architecture managed through GitHub version control and CI/CD workflows, accelerating delivery speed by ~70% and improving code maintainability.',
          'Integrated GraphQL and REST APIs across 20+ production modules, ensuring efficient data flow and predictable state management with Redux.',
          'Improved application performance by ~20% through lazy loading, render optimization and efficient API consumption; achieved ~90% WCAG 2.0/2.1 accessibility audit scores.',
          'Collaborated with cross-functional teams of 30+ backend engineers, QA, designers and product stakeholders in Agile/Scrum (SAFe) ceremonies, sprint planning, unit testing and code reviews to deliver high-quality releases.',
          'Utilized AI-assisted development tools to improve productivity and code quality, following enterprise coding standards and responsible AI usage guidelines.',
        ],
      },
    ],
    projects: [
      {
        title: 'DSP Ireland – Government Pension Platform',
        stack: 'React, TypeScript, GraphQL, React Native, Strapi CMS · Nov 2024 – Present',
        bullets: [
          'Delivered enrollment and opt-in/opt-out workflows for a government pension platform serving 750K+ users, working with 60–70+ GraphQL API endpoints for structured, efficient data fetching.',
          'Built a custom BlocksRenderer component enabling dynamic, multilingual, API-driven UI content across 5+ languages; ensured WCAG 2.1 AA compliance and enterprise-grade NFRs.',
          'Recognized by TCS BANCS and TCS Interactive leadership for platform contributions.',
        ],
      },
      {
        title: 'Dibber Education Platform (Norway)',
        stack: 'React, Redux, Storybook · Jan 2024 – Sep 2024',
        bullets: [
          'Led frontend development for a back-office platform used across 600+ schools in 9 countries; built and maintained a Storybook-based component library of 40+ reusable components.',
          'Improved application performance by ~60% through lazy loading and render optimization; applied WCAG 2.0 accessibility standards.',
          'Received direct client appreciation and recognition from Global Head, TCS Interactive.',
        ],
      },
      {
        title: 'OMSA, Air India Express & Standard Bank – Enterprise Platforms',
        stack: 'React, TypeScript, REST APIs · Feb 2022 – Nov 2024',
        bullets: ['Delivered frontend solutions across insurance, airline booking and banking platforms; built 30+ reusable React components and API-driven, pixel-perfect responsive UI modules.'],
      },
    ],
    awards: [
      'Recognized by Global Head, TCS Interactive, for contributions to the Dibber platform (600+ schools, 9 countries).',
      'Awarded “Star of the Month” (2x) on the DSP project; appreciated by TCS BANCS and TCS Interactive leadership for enterprise-scale delivery across 5+ production applications serving 750K+ users.',
    ],
    education: 'M.Sc. in Electronic Science — Calcutta University, India | Aug 2018 – Oct 2020',
  },
  rn: {
    title: 'Full Stack Developer (MERN) • React Native • React.js',
    contact: 'Pune, India | 8420567946 | r.samadrita3@gmail.com | linkedin.com/in/samadrita-roy-975638188 | github.com/rSamadrita',
    summary:
      'Full Stack Developer with 4+ years of experience at Tata Consultancy Services, primarily specializing in React.js and React Native, with growing hands-on experience across the MERN stack (MongoDB, Express.js, React, Node.js). Delivered enterprise-scale web and cross-platform mobile applications (iOS/Android) across aviation, fintech, education and government domains, supporting 750K+ production users. Core strengths in React component-based architecture, GraphQL/REST API integration, state management (Redux), and mobile app architecture, complemented by hands-on backend experience building REST API endpoints (CRUD operations) using Node.js and Express.js, with working knowledge of MongoDB. Strong grounding in Agile/Scrum delivery, GitHub-based version control, CI/CD, unit testing (Jest), and SDLC best practices, with working knowledge of AI-assisted development tools.',
    skills: [
      ['Frontend:', 'React.js, React Native (iOS & Android), TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS, Redux, Redux Toolkit'],
      ['Backend (Growing):', 'Node.js, Express.js, REST API Development (CRUD), MongoDB (working knowledge)'],
      ['Mobile:', 'Expo, React Navigation, AsyncStorage, Offline-First Patterns, Push Notifications, Deep Linking'],
      ['Data & APIs:', 'GraphQL, REST APIs'],
      ['Version Control & Tools:', 'GitHub, Git, Visual Studio Code, Xcode, Android Studio, Jira, Confluence, Webpack, Storybook, CI/CD, Strapi CMS'],
      ['Testing & Quality:', 'Jest, Detox (E2E), React Testing Library, Unit Testing, Peer Code Reviews'],
      ['Architecture:', 'Component-Based Architecture, Cross-Platform Architecture, Modular & Scalable UI Design, Non-Functional Requirements (NFR)'],
      ['Methodology:', 'Agile/Scrum, SAFe, Software Development Life Cycle (SDLC)'],
      ['Accessibility & Performance:', 'WCAG 2.0/2.1, Cross-Browser/Cross-Device Compatibility, Lazy Loading, Render Optimization, Responsive Design'],
      ['Emerging Technologies:', 'Generative AI, Prompt Engineering, LLM Integration, AI-Assisted Development Tools'],
    ],
    experience: [
      {
        role: 'React.js / React Native Developer (Full Stack exposure)',
        date: 'Feb 2022 – Present',
        company: 'Tata Consultancy Services — Pune, India',
        bullets: [
          'Designed, developed and maintained 5+ enterprise-scale React.js and React Native applications supporting 750K+ users across aviation, fintech, education and government platforms, contributing independently as a subject matter expert (SME) across the SDLC.',
          'Contributed to backend REST API development using Node.js and Express.js, building and consuming CRUD endpoints to support frontend and mobile features, and gaining working exposure to MongoDB as part of full-stack enablement.',
          'Built reusable, component-based React and React Native architecture managed through GitHub version control and CI/CD workflows, accelerating delivery speed by ~70% and improving code maintainability.',
          'Integrated GraphQL and REST APIs across 20+ production modules, ensuring efficient data flow and predictable state management with Redux.',
          'Improved application performance by ~20% through lazy loading, render optimization, FlatList optimization, and efficient API consumption; achieved ~90% WCAG 2.0/2.1 accessibility audit scores.',
          'Collaborated with cross-functional teams of 30+ backend engineers, QA, designers and product stakeholders in Agile/Scrum ceremonies, sprint planning, unit testing and code reviews to deliver high-quality releases.',
        ],
      },
    ],
    projects: [
      {
        title: 'DSP Ireland – Government Pension Platform (Mobile + Web)',
        stack: 'React, React Native, TypeScript, GraphQL, Node.js, Express.js, Strapi CMS · Nov 2024 – Present',
        bullets: [
          'Sole developer architecting and building the React Native mobile application (iOS & Android) for a government pension platform serving 750K+ users, covering enrollment and opt-in/opt-out workflows; built REST API endpoints using Node.js and Express.js and worked with 60–70+ GraphQL endpoints for data fetching.',
          'Built a custom BlocksRenderer component for dynamic, multilingual, API-driven UI content across 5+ languages via Strapi CMS; ensured WCAG 2.1 AA compliance; recognized by TCS BANCS and TCS Interactive leadership for contributions.',
        ],
      },
      {
        title: 'Dibber Education Platform (Norway)',
        stack: 'React, Redux, Storybook · Jan 2024 – Sep 2024',
        bullets: [
          'Led frontend development for a back-office platform used across 600+ schools in 9 countries; built and maintained a Storybook-based component library of 40+ reusable components.',
          'Implemented Redux-based state management patterns directly transferable to React Native/full-stack state architecture; applied WCAG 2.0 accessibility standards.',
          'Received direct client appreciation and recognition from Global Head, TCS Interactive.',
        ],
      },
      {
        title: 'OMSA, Air India Express & Standard Bank – Enterprise Platforms',
        stack: 'React, TypeScript, REST APIs · Feb 2022 – Nov 2024',
        bullets: ['Delivered frontend solutions across insurance, airline booking and banking platforms; built 30+ reusable React components and API-driven, pixel-perfect responsive UI modules.'],
      },
    ],
    awards: [
      'Sole React Native developer on a 750K+ user government platform (architecture to production); recognized by Global Head, TCS Interactive, for Dibber platform contributions (600+ schools, 9 countries); awarded “Star of the Month” (2x) on the DSP project.',
    ],
    education: 'M.Sc. in Electronic Science — Calcutta University, India | Aug 2018 – Oct 2020',
  },
};

function App() {
  const [activeResume, setActiveResume] = useState('react');
  const data = useMemo(() => resumeData[activeResume], [activeResume]);

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="nav-inner">
          <span className="brand">Samadrita Roy</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header id="hero" className="section hero-section">
        <div className="inner">
          <div className="hero-tag">Open to opportunities</div>
          <h1>{activeResume === 'react' ? 'Frontend Engineer' : 'Full Stack Developer'}</h1>
          <p className="tagline">
            {activeResume === 'react'
              ? 'Frontend Engineer with 4+ years building scalable, responsive React.js and TypeScript applications across aviation, fintech, education and government domains.'
              : 'Full Stack Developer with 4+ years specialising in React.js, React Native and MERN stack delivery across enterprise web and mobile products.'}
          </p>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="num">750K+</div>
              <div className="label">Production users</div>
            </div>
            <div className="stat-box">
              <div className="num">5+</div>
              <div className="label">Enterprise apps shipped</div>
            </div>
            <div className="stat-box">
              <div className="num">~20%</div>
              <div className="label">Performance uplift</div>
            </div>
            <div className="stat-box">
              <div className="num">~70%</div>
              <div className="label">Faster delivery</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="mailto:r.samadrita3@gmail.com" className="btn btn-primary">Get in touch</a>
            <a href="https://github.com/rSamadrita" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/samadrita-roy-975638188/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
          </div>
        </div>
      </header>

      <section id="skills" className="section skills-section">
        <div className="inner">
          <div className="section-label">Technical skills</div>
          <h2>What I work with</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className={`skill-card ${group.teal ? 'teal' : ''}`} key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className={`tag ${group.teal ? 'teal' : ''}`} key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="inner">
          <div className="section-label">Selected work</div>
          <h2>Key projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.teal ? 'teal' : ''}`} key={project.title}>
                <div className="project-meta">
                  <span className="badge">{project.category}</span>
                  <span className="badge">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-badges">
                  {project.badges.map((badge) => (
                    <span className="badge" key={badge}>{badge}</span>
                  ))}
                </div>
                {project.stats.length > 0 && (
                  <div className="impact-row">
                    {project.stats.map((stat) => (
                      <div className="impact-item" key={stat.label}>
                        <div className="impact-num">{stat.value}</div>
                        <div className="impact-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="section ai-section">
        <div className="inner">
          <div className="section-label">Personal projects</div>
          <h2>Exploring generative AI</h2>
          <div className="ai-card">
            <div className="ai-icon">🤖</div>
            <div>
              <h3>AI Agent — GenAI-powered task execution</h3>
              <p>
                Built a prompt-driven AI agent using LLaMA3 via Ollama, exploring real-time LLM-to-UI interaction patterns within a React frontend. Experimenting with AI-native interfaces, agentic workflows, and mobile AI integration via React Native.
              </p>
              <div className="project-badges" style={{ marginTop: '0.8rem' }}>
                <span className="badge">React</span>
                <span className="badge">React Native</span>
                <span className="badge">LLaMA3</span>
                <span className="badge">Ollama</span>
                <span className="badge">Prompt engineering</span>
              </div>
              <a href="https://github.com/rSamadrita" target="_blank" rel="noreferrer" className="github-link">View on GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="section resume-section">
        <div className="inner">
          <div className="section-label">Resume</div>
          <h2>Download or view my resume</h2>

          <div className="resume-tabs">
            <button className={`resume-tab ${activeResume === 'react' ? 'active' : ''}`} onClick={() => setActiveResume('react')}>Frontend Engineer</button>
            <button className={`resume-tab ${activeResume === 'rn' ? 'active' : ''}`} onClick={() => setActiveResume('rn')}>Full Stack Developer</button>
          </div>

          <div className="resume-panel active">
            <div className="resume-viewer">
              <div className="rv-name">SAMADRITA ROY</div>
              <div className="rv-subtitle">{data.title}</div>
              <div className="rv-contact">{data.contact}</div>

              <div className="rv-section">
                <div className="rv-section-title">Professional Summary</div>
                <div className="rv-summary">{data.summary}</div>
              </div>

              <div className="rv-section">
                <div className="rv-section-title">Technical Skills</div>
                {data.skills.map(([label, value], index) => (
                  <div className="rv-skill-row" key={`${label}-${index}`}>
                    <strong>{label}</strong> {value}
                  </div>
                ))}
              </div>

              <div className="rv-section">
                <div className="rv-section-title">Professional Experience</div>
                {data.experience.map((job) => (
                  <div key={job.role}>
                    <div className="rv-job-header">
                      <span className="rv-job-title">{job.role}</span>
                      <span className="rv-job-date">{job.date}</span>
                    </div>
                    <div className="rv-job-co">{job.company}</div>
                    <ul className="rv-bullets">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rv-section">
                <div className="rv-section-title">Key Projects</div>
                {data.projects.map((project) => (
                  <div key={project.title}>
                    <div className="rv-proj-title">{project.title}</div>
                    <div className="rv-proj-stack">{project.stack}</div>
                    <ul className="rv-bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rv-section">
                <div className="rv-section-title">Education</div>
                <div className="rv-job-header">
                  <span className="rv-job-title">{data.education}</span>
                </div>
              </div>

              <div className="rv-section">
                <div className="rv-section-title">Recognition & Awards</div>
                {data.awards.map((award, index) => (
                  <div className="rv-award" key={`${award}-${index}`}>· {award}</div>
                ))}
              </div>
            </div>

            <div className="resume-actions">
              <a
                href={activeResume === 'react' ? '/Samadrita_Roy_Resume.pdf' : '/Samadrita_Roy_FullStack_Resume.pdf'}
                className="btn btn-primary"
                download
              >
                ⬇ Download ({activeResume === 'react' ? 'Frontend Engineer' : 'Full Stack Developer'})
              </a>
            </div>
            <div className="download-note">Right-click → Save link as if the download doesn’t start automatically.</div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="inner">
          <div className="section-label">Background</div>
          <h2>Experience</h2>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-date">Feb 2022 – Present</div>
              <h3>Frontend Engineer / React.js & React Native Developer</h3>
              <div className="tl-company">Tata Consultancy Services · Pune, India</div>
              <ul className="tl-bullets">
                <li>Designed and maintained 5+ enterprise-scale React.js and TypeScript applications supporting 750K+ users across aviation, fintech, education, and government platforms.</li>
                <li>Built reusable component systems and GitHub-driven CI/CD workflows, improving delivery speed by ~70% and maintainability.</li>
                <li>Integrated GraphQL and REST APIs across 20+ production modules, while improving performance by ~20% through lazy loading and render optimization.</li>
                <li>Achieved ~90% WCAG 2.0/2.1 audit scores and delivered responsive cross-browser UI across production products.</li>
                <li>Worked on full-stack exposure using Node.js, Express.js, and MongoDB while building and consuming production APIs.</li>
              </ul>
            </div>
          </div>
          <div className="education-box">
            <div className="section-label">Education</div>
            <div className="education-row">
              <strong>M.Sc. in Electronic Science</strong>
              <div>Calcutta University, India · Aug 2018 – Oct 2020</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="inner">
          <h2>Let’s work together</h2>
          <p className="tagline white">I’m actively looking for frontend, full-stack, and cross-platform engineering opportunities where I can deliver accessible, high-impact digital products at scale.</p>
          <div className="contact-links">
            <a href="mailto:r.samadrita3@gmail.com" className="contact-link">✉ r.samadrita3@gmail.com</a>
            <a href="tel:+918420567946" className="contact-link">📞 +91-8420567946</a>
            <a href="https://www.linkedin.com/in/samadrita-roy-975638188/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn ↗</a>
            <a href="https://github.com/rSamadrita" target="_blank" rel="noreferrer" className="contact-link">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer>© 2026 Samadrita Roy · Built with React + CSS · Hosted on GitHub Pages</footer>
    </div>
  );
}

export default App;

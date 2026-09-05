import { useMemo, useState } from 'react';

const skillGroups = [
  { title: 'Mobile development', items: ['React Native', 'iOS & Android', 'Expo', 'React Navigation', 'Deep Linking'] },
  { title: 'Web / core stack', items: ['React.js', 'TypeScript', 'JavaScript ES6+'] },
  { title: 'State & data', items: ['Redux', 'GraphQL', 'REST APIs', 'Strapi CMS', 'AsyncStorage'] },
  { title: 'UI & design systems', items: ['Storybook', 'Component architecture', 'Responsive design', 'WCAG 2.0/2.1'] },
  { title: 'AI & emerging tech', items: ['Generative AI', 'LLM integration', 'Prompt engineering', 'LLaMA3 / Ollama'], teal: true },
  { title: 'Tools & process', items: ['Git', 'Xcode', 'Android Studio', 'Agile / Scrum', 'i18n'] },
];

const projects = [
  {
    category: 'Government',
    period: 'Nov 2024 – Present',
    title: 'Department of Social Protection (DSP), Ireland — Pension Platform',
    description:
      'Government pension platform enabling enrollment, opt-in/out workflows, and employer/member portals for 750K+ users. Sole developer on the complete React Native mobile app (iOS + Android), plus built multilingual CMS-driven web UI with i18n from scratch.',
    badges: ['React', 'React Native', 'TypeScript', 'GraphQL', 'Strapi CMS', 'i18n'],
    stats: [
      { value: '750K+', label: 'Active users' },
      { value: '~90%', label: 'WCAG audit score' },
      { value: '⭐ ×2', label: 'Star of the Month' },
    ],
  },
  {
    category: 'Education tech',
    period: 'Jan 2024 – Sep 2024',
    title: 'Dibber — Back-office Education Platform',
    description:
      'Led frontend development for a platform used across 600+ schools in 9 countries. Built a Storybook-based component library, Redux state architecture, and pixel-perfect responsive UI — recognized by the Global Head of TCS Interactive.',
    badges: ['React', 'Redux', 'Storybook', 'WCAG 2.0'],
    stats: [
      { value: '600+', label: 'Schools' },
      { value: '9', label: 'Countries' },
      { value: '~70%', label: 'Faster delivery' },
    ],
    teal: true,
  },
  {
    category: 'Fintech / Aviation',
    period: 'Feb 2022 – Nov 2024',
    title: 'OMSA / Air India Express / Standard Bank — Enterprise Platforms',
    description:
      'Delivered frontend solutions across insurance (OMSA), airline booking (Air India Express), and banking (Standard Bank) — building API-driven UI systems, booking workflows, and reusable components across cross-domain enterprise systems.',
    badges: ['React', 'TypeScript', 'REST APIs'],
    stats: [],
  },
];

const resumeData = {
  react: {
    title: 'Frontend Developer & UX Engineer',
    contact: '+91-8420567946 · r.samadrita3@gmail.com · LinkedIn · GitHub · rsamadrita.github.io',
    summary:
      'Frontend Developer and UX Engineer with 4+ years building enterprise-scale web and mobile applications at Tata Consultancy Services across government, aviation, and fintech domains. Proven record shipping high-fidelity, accessible UI systems (WCAG ~90%) for 750K+ users — with measurable impact on performance (~20% gains), developer velocity (~70% faster delivery), and cross-platform responsiveness. Actively expanding into Generative AI and LLM-powered frontend experiences, with hands-on prototyping using LLaMA3 and React.',
    skills: [
      ['Languages & Frameworks:', 'JavaScript (ES6+), TypeScript, React.js, React Native'],
      ['UI / Prototyping:', 'Responsive Design, Pixel-Perfect UI, Component Architecture, Storybook, Motion-aware UI Patterns'],
      ['State & Data:', 'Redux, GraphQL, REST APIs, Strapi CMS'],
      ['AI & Emerging Tech:', 'Generative AI, LLM Integration, Prompt Engineering, LLaMA3, Ollama'],
      ['Performance & A11y:', 'Lazy Loading, Render Optimization, WCAG 2.0/2.1, Cross-Browser Compatibility'],
      ['Tools & Process:', 'Git, VS Code, Storybook, Agile/Scrum, Internationalization (i18n)'],
    ],
    experience: [
      {
        role: 'Frontend Developer / UX Engineer',
        date: 'Feb 2022 – Present',
        company: 'Tata Consultancy Services · Pune, India',
        bullets: [
          'Engineered 5+ enterprise web and mobile applications across government, aviation, and fintech sectors, collectively serving 750K+ users in production.',
          'Accelerated team delivery by ~70% through a reusable React component architecture and Storybook-driven design system.',
          'Boosted application performance by ~20% via lazy loading, render optimization, and efficient GraphQL/REST API consumption patterns.',
          'Achieved ~90% WCAG 2.0/2.1 audit scores across all products by designing and enforcing accessible UI systems.',
          'Implemented Internationalization (i18n) and multilingual CMS-driven UI, enabling scalable localization across multiple regions.',
          'Defined and implemented NFRs (performance, scalability, security, maintainability, accessibility) across all production applications.',
          'Partnered closely with design, product, and backend engineering in Agile/Scrum teams to ship high-quality features on schedule.',
        ],
      },
    ],
    projects: [
      {
        title: 'DSP Ireland – Government Pension Platform (750K+ Users)',
        stack: 'React, TypeScript, GraphQL, React Native, Strapi CMS, i18n · Nov 2024 – Present',
        bullets: [
          'Architected dynamic multilingual UI using Strapi CMS with a custom BlocksRenderer rendering fully API-driven content.',
          'Introduced i18n from the ground up for a 750K+ user base across regional locales.',
          'Currently building the complete React Native mobile application solo, targeting production release.',
          'Awarded Star of the Month (×2); recognized by TCS BANCS and TCS Interactive leadership.',
        ],
      },
      {
        title: 'Dibber – Education Platform (600+ Schools, 9 Countries)',
        stack: 'React, Redux, Storybook · Jan 2024 – Sep 2024',
        bullets: [
          'Led frontend for a platform serving 600+ schools across 9 countries; built Storybook component library, Redux state management, and WCAG 2.0-compliant UI.',
          'Received direct client appreciation and recognition from the Global Head of TCS Interactive.',
        ],
      },
      {
        title: 'OMSA / Air India Express / Standard Bank',
        stack: 'React, TypeScript, REST APIs · Feb 2022 – Nov 2024',
        bullets: ['Shipped API-driven UI systems, booking workflows, and reusable components across insurance, airline, and banking platforms.'],
      },
    ],
    awards: [
      'Star of the Month (×2) — TCS, for high-impact delivery on DSP Ireland government platform',
      'Recognized by Global Head of TCS Interactive for outstanding contributions on Dibber (9-country education platform)',
      'Appreciated by TCS BANCS and TCS Interactive leadership for enterprise-scale frontend delivery',
    ],
    education: 'M.Sc. in Electronic Science — Calcutta University · Aug 2018 – Oct 2020',
  },
  rn: {
    title: 'React Native Developer | Mobile & Frontend Engineer',
    contact: '+91-8420567946 · r.samadrita3@gmail.com · LinkedIn · GitHub',
    summary:
      'React Native Developer with 4+ years of experience at Tata Consultancy Services, delivering enterprise-scale mobile and web applications across aviation, fintech, and government domains. Specialized in React Native, React.js, TypeScript, and cross-platform mobile development with hands-on expertise in iOS/Android app architecture, offline-first patterns, native module integration, and performance optimization. Proven impact delivering production mobile apps supporting 750K+ users, with strong focus on WCAG accessibility, scalable component architecture, and NFRs. Actively expanding into Generative AI and LLM-powered mobile applications.',
    skills: [
      ['Mobile Development:', 'React Native (iOS & Android), Expo, React Navigation, Deep Linking, Push Notifications'],
      ['Languages & Frameworks:', 'JavaScript (ES6+), TypeScript, React.js'],
      ['State Management & Data:', 'Redux, Redux Toolkit, GraphQL, REST APIs, AsyncStorage, Offline-First Patterns'],
      ['Mobile Architecture:', 'Cross-Platform Component Architecture, Native Module Integration, Performance Optimization'],
      ['UI/UX & Accessibility:', 'Responsive Mobile UI, Pixel-Perfect Design, WCAG 2.0/2.1, Cross-Device Compatibility'],
      ['Testing & Tooling:', 'Unit Testing, Detox (E2E), Storybook, Git, Strapi CMS, Xcode, Android Studio'],
      ['Emerging:', 'Generative AI, Prompt Engineering, LLM Integration'],
    ],
    experience: [
      {
        role: 'React Native Developer / Frontend Developer',
        date: 'Feb 2022 – Present',
        company: 'Tata Consultancy Services · Pune, India',
        bullets: [
          'Engineered and delivered 5+ enterprise-grade mobile and web applications across aviation, fintech, and government sectors, supporting 750K+ users in production.',
          'Currently building a complete React Native mobile application single-handedly for DSP Ireland, covering iOS and Android from architecture to deployment.',
          'Improved application performance by ~20% through lazy loading, FlatList optimization, optimized rendering strategies, and efficient API consumption patterns.',
          'Designed and implemented reusable React Native and React component architecture, accelerating development speed by ~70%.',
          'Built scalable mobile and frontend systems using TypeScript, Redux, and GraphQL, ensuring predictable state management and efficient data flow.',
          'Developed WCAG-compliant accessible UI systems for mobile and web, achieving ~90% audit scores including screen reader support.',
          'Implemented cross-platform responsive UIs ensuring consistent UX across iOS, Android, and web browsers for global users.',
        ],
      },
    ],
    projects: [
      {
        title: 'DSP Ireland – Pension Platform (Mobile + Web)',
        stack: 'React Native, React, TypeScript, GraphQL, Strapi CMS, i18n · Nov 2024 – Present',
        bullets: [
          'Sole developer architecting and building the complete React Native mobile app for a 750K+ user government pension platform — covering enrollment, opt-in/out, and employer/member portal flows.',
          'Designed mobile-first component architecture with React Navigation, deep linking support, and mobile-specific i18n locale handling.',
          'Built dynamic multilingual UI using Strapi CMS with a custom BlocksRenderer for API-driven content on both mobile and web.',
          'Recognized by TCS BANCS and TCS Interactive leadership; awarded Star of the Month (×2).',
        ],
      },
      {
        title: 'Dibber – Education Platform (Norway)',
        stack: 'React, Redux, Storybook · Jan 2024 – Sep 2024',
        bullets: [
          'Led frontend for 600+ schools across 9 countries; built Storybook component library and Redux state architecture — patterns directly transferable to React Native development.',
          'Recognized by Global Head of TCS Interactive for outstanding contributions.',
        ],
      },
      {
        title: 'OMSA / Air India Express / Standard Bank',
        stack: 'React, TypeScript, REST APIs · Feb 2022 – Nov 2024',
        bullets: ['Delivered API-driven UI systems, booking workflows, and responsive interfaces across insurance, aviation, and banking enterprise platforms.'],
      },
    ],
    awards: [
      'Recognized by Global Head of TCS Interactive for outstanding contributions on Dibber platform (Norway)',
      'Awarded "Star of the Month" (×2) for high-impact delivery on DSP Ireland government project',
      'Sole React Native developer on a 750K+ user government platform — from architecture to production release',
    ],
    education: 'M.Sc. in Electronic Science — Calcutta University · Aug 2018 – Oct 2020',
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
          <h1>Frontend Developer<br />& UX Engineer</h1>
          <p className="tagline">
            4+ years building enterprise-scale React and React Native applications at Tata Consultancy Services — shipping accessible, performant UI for 750K+ users across government, aviation, and fintech domains.
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
              <div className="label">Performance improvement</div>
            </div>
            <div className="stat-box">
              <div className="num">~70%</div>
              <div className="label">Faster delivery via component libraries</div>
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
            <button className={`resume-tab ${activeResume === 'react' ? 'active' : ''}`} onClick={() => setActiveResume('react')}>React / UX Engineer</button>
            <button className={`resume-tab ${activeResume === 'rn' ? 'active' : ''}`} onClick={() => setActiveResume('rn')}>React Native</button>
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
                ⬇ Download ({activeResume === 'react' ? 'React / UX Engineer' : 'React Native'})
              </a>
            </div>
            <div className="download-note">Right-click → Save link as if the download doesn't start automatically.</div>
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
              <h3>React Native Developer / Frontend Developer / UX Engineer</h3>
              <div className="tl-company">Tata Consultancy Services · Pune, India</div>
              <ul className="tl-bullets">
                <li>Engineered 5+ enterprise web and mobile apps across government, aviation, and fintech — serving 750K+ users</li>
                <li>Reduced development time by ~70% through reusable React component architecture and Storybook design systems</li>
                <li>Improved application performance by ~20% via lazy loading, FlatList optimization, and render optimization</li>
                <li>Achieved ~90% WCAG 2.0/2.1 audit scores across all production products</li>
                <li>Currently building a complete React Native mobile app solo for DSP Ireland (iOS + Android)</li>
              </ul>
            </div>
          </div>
          <div className="education-box">
            <div className="section-label">Education</div>
            <div className="education-row">
              <strong>M.Sc. in Electronic Science</strong>
              <div>Calcutta University · 2018 – 2020</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="inner">
          <h2>Let's work together</h2>
          <p className="tagline white">I'm actively looking for frontend, mobile, and UX engineering roles where I can build impactful, accessible products at scale.</p>
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

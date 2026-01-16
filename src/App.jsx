import { Icon } from '@iconify/react'
import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import FloatingBackground from './components/FloatingBackground'
import { projects, skills, cyberSkills, certificates } from './data/projectsData'

function App() {
  const { cyberMode, isTransitioning } = useTheme()

  const currentProjects = projects
  const currentSkills = cyberMode ? cyberSkills : skills
  const profileDesc = cyberMode
    ? "A cybersecurity specialist focused on penetration testing, vulnerability assessment, and network security with expertise in ethical hacking."
    : "A full stack developer, specializing in building scalable web applications with a focus on seamless user experiences and efficient backend architecture."

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors ${isTransitioning ? 'cyber-transition' : ''}`}>
      {isTransitioning && (
        <svg className="fixed inset-0 w-0 h-0 pointer-events-none">
          <defs>
            <filter id="filter-1" x="-20%" y="-20%" width="140%" height="140%">
              <feOffset in="SourceGraphic" dx="-2" dy="0" result="red" />
              <feColorMatrix in="red" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="redChannel" />
              <feOffset in="SourceGraphic" dx="2" dy="0" result="blue" />
              <feColorMatrix in="blue" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blueChannel" />
              <feBlend in="redChannel" in2="blueChannel" mode="screen" result="glitch" />
              <feBlend in="glitch" in2="SourceGraphic" mode="normal" />
            </filter>
            <filter id="filter-2" x="-20%" y="-20%" width="140%" height="140%">
              <feOffset in="SourceGraphic" dx="-3" dy="0" result="red" />
              <feColorMatrix in="red" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="redChannel" />
              <feOffset in="SourceGraphic" dx="3" dy="0" result="blue" />
              <feColorMatrix in="blue" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blueChannel" />
              <feMorphology operator="dilate" radius="1 0" in="blueChannel" result="dilatedBlue" />
              <feBlend in="redChannel" in2="dilatedBlue" mode="screen" result="glitch" />
              <feBlend in="glitch" in2="SourceGraphic" mode="normal" />
            </filter>
            <filter id="filter-3" x="-20%" y="-20%" width="140%" height="140%">
              <feOffset in="SourceGraphic" dx="-4" dy="0" result="red" />
              <feColorMatrix in="red" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="redChannel" />
              <feOffset in="SourceGraphic" dx="4" dy="0" result="blue" />
              <feColorMatrix in="blue" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blueChannel" />
              <feMorphology operator="dilate" radius="2 0" in="redChannel" result="dilatedRed" />
              <feBlend in="dilatedRed" in2="blueChannel" mode="screen" result="glitch" />
              <feBlend in="glitch" in2="SourceGraphic" mode="normal" />
            </filter>
          </defs>
        </svg>
      )}
      <FloatingBackground />

      <div className="max-w-3xl mx-auto p-4 sm:p-8 relative z-10">
        <Header />

        <section className="flex gap-6 mb-12 p-8 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl backdrop-blur">
          <img src={cyberMode ? "/img/logo/image.png" : "/img/logo/image.jpg"} alt="Profile" title="I design it by myself." className="w-24 h-24 rounded-full border-2 border-[var(--border-color)]" />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">Hi, I am <span className="text-[var(--accent-color)]">JOSHI VEDANT</span></h1>
            <p className="text-sm text-[var(--text-secondary)] mb-4">{profileDesc}</p>
            <div className="flex gap-2 mb-3">
              <a href="https://linkedin.com/in/vedant-joshi-og" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition"><Icon icon="mdi:linkedin" width="24" /></a>
              <a href="https://github.com/vemacitrind" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition"><Icon icon="mdi:github" width="24" /></a>
              <a href="https://www.hackerrank.com/profile/vemacitrind" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition"><Icon icon="cib:hackerrank" width="24" /></a>
              <a href="https://x.com/vemacitrind" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition"><Icon icon="ri:twitter-x-fill" width="24" /></a>
              <a href="https://app.hackthebox.com/profile/2226776" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition"><Icon icon="simple-icons:hackthebox" width="24" /></a>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-3">
              <Icon icon="mdi:map-marker" width="16" />
              <span>Ahmedabad, Gujarat</span>
            </div>
            <button className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-xs font-medium hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition">Resume</button>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid gap-4">
            <a href="/blogs" className="block p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition backdrop-blur">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Blogs</h3>
                </div>
                <Icon icon="mdi:arrow-right" width="20" className="text-[var(--text-secondary)]" />
              </div>
            </a>
          </div>
        </section>

        <section className="mb-12 p-8 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl backdrop-blur">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
            Education
          </h2>

          {cyberMode ? (
            <div className="flex justify-between items-start gap-6">
              {/* Left content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Cyber Security</h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  Self-Paced • Ongoing
                </p>

                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Focused on cybersecurity fundamentals, ethical hacking, network security,
                  vulnerability assessment, and defensive security practices through
                  hands-on labs and real-world scenarios.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Network Security', 'Ethical Hacking', 'Pentesting', 'Linux'].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className="w-36 text-right flex flex-col items-end">
                <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center text-[var(--bg-primary)] font-bold mb-2">
                  ≇
                </div>
                <p className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
                  Online Learning
                </p>
                <p className="text-xs text-[var(--text-muted)]">Self Study</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start gap-6">
              {/* Left content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">Computer Engineering</h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">2023 - 2027</p>

                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Specialized in Software Engineering and Web Technologies with focus on
                  modern development practices, algorithms, and system design.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures',
                    'Algorithms',
                    'Machine Learning',
                    'Web Development',
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right content */}
              <div className="w-36 text-right flex flex-col items-end">
                <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center text-[var(--bg-primary)] font-bold mb-2">
                  LJ
                </div>
                <p className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
                  LJ University
                </p>
                <p className="text-xs text-[var(--text-muted)]">On Campus</p>
              </div>
            </div>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">Technologies</h2>
          <div className="grid grid-cols-4 gap-4">
            {currentSkills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-xl hover:-translate-y-1 transition">
                <Icon icon={skill.icon} width="40" className="mb-2 text-[var(--text-primary)]" />
                <span className="text-xs text-[var(--text-secondary)]">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {currentProjects.slice(0, 4).map(project => (
              <div key={project.id} className="bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl overflow-hidden hover:-translate-y-1 transition backdrop-blur">
                <div className="h-48 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[var(--text-primary)]">{project.title}</h3>
                    <a href={project.githubLink} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><Icon icon="mdi:github" width="20" /></a>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="/projects" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition">
              <span>View All Projects</span>
              <Icon icon="mdi:arrow-right" width="16" />
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">Certificates</h2>
          <div className="grid gap-4">
            {certificates.slice(0, 4).map(cert => (
              <div key={cert.id} className="flex items-center justify-between p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon icon={cert.icon} width="24" style={{ color: 'var(--bg-primary)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">{cert.title}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{cert.provider}</p>
                  </div>
                </div>
                <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition">
                  <Icon icon="mdi:open-in-new" width="20" />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="/certificates" className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-sm hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition backdrop-blur">
              <span>View All Certificates</span>
              <Icon icon="mdi:arrow-right" width="16" />
            </a>
          </div>
        </section>



        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">Contact Me</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[{ icon: 'mdi:email', title: 'Email', value: 'jvedant.711@gmail.com' }, { icon: 'mdi:phone', title: 'Phone', value: '+91 7043792153' }, { icon: 'mdi:linkedin', title: 'LinkedIn', value: 'vedant-joshi-og' }].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-xl">
                <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                  <Icon icon={item.icon} width="24" style={{ color: 'var(--bg-primary)' }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
          <p>&copy; 2025 Joshi Vedant. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

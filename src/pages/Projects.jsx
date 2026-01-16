import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../context/ThemeContext'
import Header from '../components/Header'
import FloatingBackground from '../components/FloatingBackground'
import { projects } from '../data/projectsData'

export default function Projects() {
  const { cyberMode } = useTheme()
  const [search, setSearch] = useState('')
  const [techFilter, setTechFilter] = useState('All')
  const [yearFilter, setYearFilter] = useState('All')

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())
    const matchTech = techFilter === 'All' || p.tech.some(t => t.includes(techFilter))
    const matchYear = yearFilter === 'All' || p.year.toString() === yearFilter
    return matchSearch && matchTech && matchYear
  })

  const highlighted = cyberMode ? filtered.filter(p => p.isCyber) : filtered.filter(p => p.isHighlighted)
  const random = cyberMode ? filtered.filter(p => !p.isCyber) : filtered.filter(p => !p.isHighlighted)

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <FloatingBackground />

      <div className="max-w-3xl mx-auto p-4 sm:p-8 relative z-10">
        <Header showBack />

        {/* <div className="mb-8">
          <input type="text" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full p-3 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)]" />
        </div> */}

        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">highlight</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {highlighted.map(project => (
            <div key={project.id} className="bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl overflow-hidden hover:-translate-y-1 transition backdrop-blur">
              <div className="h-48 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[var(--text-primary)]">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <Icon icon="mdi:arrow-top-right" width="20" />
                      </a>
                    )}
                    <a href={project.githubLink} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                      <Icon icon="mdi:github" width="20" />
                    </a>
                  </div>
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

        {highlighted.length > 0 && random.length > 0 && <hr className="my-8 border-[var(--border-color)]" />}
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] my-6">random</h2>  
        <div className="grid sm:grid-cols-2 gap-6">
          {random.map(project => (
            <div key={project.id} className="bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl overflow-hidden hover:-translate-y-1 transition backdrop-blur">
              <div className="h-48 bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[var(--text-primary)]">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <Icon icon="mdi:arrow-top-right" width="20" />
                      </a>
                    )}
                    <a href={project.githubLink} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                      <Icon icon="mdi:github" width="20" />
                    </a>
                  </div>
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

        <footer className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
          <p>&copy; 2025 Joshi Vedant. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

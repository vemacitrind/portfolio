import { useState } from 'react'
import { Icon } from '@iconify/react'
import Header from '../components/Header'
import FloatingBackground from '../components/FloatingBackground'
import { certificates } from '../data/projectsData'

export default function Certificates() {

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <FloatingBackground />

      <div className="max-w-3xl mx-auto p-4 sm:p-8 relative z-10">
        <Header showBack />

        <div className="grid gap-4">
          {certificates.map(cert => (
            <div key={cert.id} className="flex items-center justify-between p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon icon={cert.icon} width="24" style={{color: 'var(--bg-primary)'}} />
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

        <footer className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
          <p>&copy; 2025 Joshi Vedant. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

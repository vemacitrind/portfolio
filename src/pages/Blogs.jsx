import { useState } from 'react'
import { Icon } from '@iconify/react'
import Header from '../components/Header'
import FloatingBackground from '../components/FloatingBackground'
import blogs from '../data/blogs.json'

export default function Blogs() {

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <FloatingBackground />

      <div className="max-w-3xl mx-auto p-4 sm:p-8 relative z-10">
        <Header showBack />

        <div className="grid gap-6">
          {blogs.sort((a,b)=> b.id -a.id).map((blog, index) => (
            <a key={blog.id} href={`/blog?id=${blog.id}`} className="flex items-start gap-6 p-6 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition backdrop-blur">
              <div className="text-6xl font-bold text-[var(--accent-color)] opacity-20 leading-none">
                {String(blog.id).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{blog.title}</h3>
              </div>
              <Icon icon="mdi:arrow-right" width="20" className="text-[var(--text-secondary)] flex-shrink-0" />
            </a>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
          <p>&copy; 2025 Joshi Vedant. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

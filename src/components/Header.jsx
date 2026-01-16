import { Icon } from '@iconify/react'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Header({ showBack = false }) {
  const { cyberMode, toggleCyber } = useTheme()
  const [binaryDot, setBinaryDot] = useState('1')

  useEffect(() => {
    if (cyberMode) {
      const interval = setInterval(() => setBinaryDot(prev => prev === '1' ? '0' : '1'), 1000)
      return () => clearInterval(interval)
    }
  }, [cyberMode])

  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center mb-8 p-4 bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] rounded-xl backdrop-blur">
      <div>
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 hover:bg-[var(--bg-secondary)] rounded-lg transition flex items-center gap-2"
          >
            <Icon icon="mdi:arrow-left" width="20" />
            <span>Back</span>
          </button>
        ) : (
          <button className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition">
            <img src="/img/logo/logo.png" alt="logo" className={`w-6 h-6 ${cyberMode ? '' : 'invert'}`} />
          </button>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggleCyber} className={`p-2 rounded-lg transition ${cyberMode ? 'bg-[var(--bg-secondary)] text-[var(--accent-color)]' : 'hover:bg-[var(--bg-secondary)]'}`}>
          <Icon icon="mdi:shield-lock" width="20" />
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/10 dark:bg-white/10 rounded-full text-xs font-semibold">
          <span className={cyberMode ? 'text-[var(--accent-color)] font-mono' : 'w-2 h-2 bg-red-600 rounded-full animate-[pulse_1.25s_infinite]'}>{cyberMode ? binaryDot : ''}</span>
          <span>LIVE</span>
        </div>
      </div>
    </header>
  )
}

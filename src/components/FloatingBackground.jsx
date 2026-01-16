import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function FloatingBackground() {
  const { theme, cyberMode } = useTheme()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    containerRef.current.innerHTML = ''
    
    for (let i = 0; i < 100; i++) {
      const dot = document.createElement('div')
      
      if (cyberMode) {
        dot.textContent = Math.random() > 0.5 ? '1' : '0'
        dot.className = 'absolute font-mono font-bold text-[var(--accent-color)] opacity-0'
        dot.style.fontSize = '14px'
      } else {
        dot.className = 'absolute rounded-full opacity-0'
        const size = Math.random() * 6 + 2
        dot.style.width = size + 'px'
        dot.style.height = size + 'px'
        dot.style.background = theme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
      }
      
      dot.style.left = Math.random() * 100 + '%'
      dot.style.animation = `float-dots ${Math.random() * 10 + 5}s linear infinite`
      dot.style.animationDelay = Math.random() * 10 + 's'
      
      containerRef.current.appendChild(dot)
    }
  }, [theme, cyberMode])

  return (
    <div className="fixed inset-0 z-0 bg-[var(--bg-primary)] pointer-events-none">
      <div ref={containerRef} className="absolute w-full h-full overflow-hidden" />
    </div>
  )
}

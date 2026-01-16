import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [cyberMode, setCyberMode] = useState(localStorage.getItem('cyberMode') === 'true')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', cyberMode ? 'cyber' : theme)
    localStorage.setItem('theme', theme)
    localStorage.setItem('cyberMode', cyberMode)
  }, [theme, cyberMode])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  const toggleCyber = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCyberMode(prev => !prev)
      if (!cyberMode) {
        setTheme('light')
      }
      setTimeout(() => setIsTransitioning(false), 600)
    }, 100)
  }

  return (
    <ThemeContext.Provider value={{ theme, cyberMode, isTransitioning, toggleTheme, toggleCyber }}>
      {children}
    </ThemeContext.Provider>
  )
}

'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-bold text-lg hover:text-accent transition-colors">
          Нестерюк
        </a>
        <button 
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Переключить тему"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  useEffect(() => {
    const setTheme = document.querySelector('html').classList;
    setTheme.remove('light', 'dark')
    setTheme.add(themeMode);
  }, [themeMode])

     const lightTheme = () => {
      setThemeMode('light');
     }
     const darkTheme = () => {
      setThemeMode('dark');
     }
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

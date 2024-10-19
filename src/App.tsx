import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from './pages'
import { useTheme } from './context'
import { GlobalStyle } from './styles/global'
import { Default, DarkTheme } from './styles/theme'

import './libs/i18n'

function App() {
  const currentTheme = useTheme(state => state.currentTheme)
  const [queryClient] = useState(() => new QueryClient())

  const systemTheme = globalThis.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const checkTheme = () => {
    if (currentTheme === 'light') {
      return Default
    }

    if (currentTheme === 'dark') {
      return DarkTheme
    }

    return systemTheme ? Default : DarkTheme
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={checkTheme()}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

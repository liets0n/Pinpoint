import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from './pages'
import { useTheme } from './stores'
import { GlobalStyle } from './styles/global'
import { Default, DarkTheme } from './styles/theme'

import './libs/i18n'

function App() {
  const { state: theme } = useTheme()
  const [queryClient] = useState(() => new QueryClient())

  const systemTheme = globalThis.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const checkTheme = () => {
    if (theme === 'light') {
      return Default
    }

    if (theme === 'dark') {
      return DarkTheme
    }

    return systemTheme ? Default : DarkTheme
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={checkTheme()}>
        <Home />
        <GlobalStyle />
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

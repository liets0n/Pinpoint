import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { useTheme } from '@contexts'
import { Home } from '@pages'
import { GlobalStyle } from '@styles/global'
import { DarkTheme, LightTheme } from '@styles/theme'

import './libs/i18n'

function App() {
  const currentTheme = useTheme(state => state.currentTheme) as 'light' | 'dark'
  const [queryClient] = useState(() => new QueryClient())

  const systemTheme = globalThis.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches

  const checkTheme = (current: 'light' | 'dark', system: boolean) => {
    const themes = { light: LightTheme, dark: DarkTheme }
    return themes[current] ?? (system ? LightTheme : DarkTheme)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={checkTheme(currentTheme, systemTheme)}>
        <Home />
        <GlobalStyle />
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

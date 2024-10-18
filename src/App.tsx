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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme === 'light' ? Default : DarkTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

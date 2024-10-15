import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from './pages'
import { Default } from './styles/theme'
import { GlobalStyle } from './styles/global'

import './libs/i18n'

function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Default}>
        <Home />
        <GlobalStyle />
        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

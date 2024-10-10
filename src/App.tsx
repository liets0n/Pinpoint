import { ThemeProvider } from 'styled-components'

import { Home } from './pages'
import { Default } from './styles/theme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={Default}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

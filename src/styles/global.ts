import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  body, ul, ol, li,
  textarea, input, select, button {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export { GlobalStyle }

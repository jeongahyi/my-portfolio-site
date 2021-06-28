import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.blackColor};
    color: ${theme.whiteColor};
  }
`

export default GlobalStyle
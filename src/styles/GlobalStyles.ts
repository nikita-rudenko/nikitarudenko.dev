import { css, createGlobalStyle } from 'styled-components'

import minireset from './minireset'

const GlobalStyles = css`
  ${minireset}
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.7;
  }
`

export default createGlobalStyle`${GlobalStyles}`

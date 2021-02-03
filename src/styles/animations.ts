import { css, keyframes } from 'styled-components'

const _ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`

export const ping = () => css`
  animation: ${_ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
`

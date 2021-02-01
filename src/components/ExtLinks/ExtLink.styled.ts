import styled, { css } from 'styled-components'

export const Link = styled.a<{ color?: string }>(
  ({ color = '#2b6cb0', theme: { mixins, colors, font } }) => css`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    column-gap: 0.4rem;
    color: ${colors.bgPrimary};
    padding: 0.25rem 0.5rem;
    background-color: ${color};
    font-weight: ${font.weight.bold};
    line-height: 1.5rem;
    font-size: ${font.size.sm};
    ${mixins.rounded}
  `
)

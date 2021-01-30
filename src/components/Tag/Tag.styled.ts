import styled, { css } from 'styled-components'

export const Tag = styled.div(
  ({ theme: { borderRadius, colors, font } }) => css`
    display: inline;
    padding: 0 0.25rem;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    background-color: inherit;
    color: ${colors.fontPrimary};
    border: 2px solid ${colors.fontSecondary};
    border-radius: ${borderRadius.md};
  `
)

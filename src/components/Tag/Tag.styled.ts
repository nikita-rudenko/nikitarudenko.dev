import styled, { css } from 'styled-components'

export const Tag = styled.div(
  ({ theme: { colors, font, mixins } }) => css`
    display: inline-flex;
    justify-content: center;
    padding: 0 0.25rem;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    background-color: inherit;
    color: ${colors.fontPrimary};
    border: 2px solid ${colors.border};
    white-space: nowrap;
    ${mixins.rounded}
  `
)

import styled, { css } from 'styled-components'

export const InlineCode = styled.code(
  ({ theme: { colors, font, mixins } }) => css`
    font-weight: ${font.weight.bold};
    background-color: ${colors.border};
    color: ${colors.fontPrimary};
    padding: 0.1rem 0.4rem;
    font-family: ${font.family.code};
    font-size: 0.8em;
    ${mixins.rounded};
  `
)

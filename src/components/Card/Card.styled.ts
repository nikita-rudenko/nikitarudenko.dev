import styled, { css } from 'styled-components'

export const Card = styled.div(
  ({ theme: { colors, boxShadow, breakpoints, font, mixins } }) => css`
    background-color: ${colors.bgPrimary};
    box-shadow: ${boxShadow.md};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    ${mixins.rounded}

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.xl};
    }
  `
)

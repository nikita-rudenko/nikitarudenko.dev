import styled, { css } from 'styled-components'

export const Card = styled.div(
  ({ theme: { borderRadius, colors, boxShadow, breakpoints, font } }) => css`
    background-color: ${colors.bgPrimary};
    border-radius: ${borderRadius.md};
    box-shadow: ${boxShadow.md};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.xl};
    }
  `
)

import styled, { css } from 'styled-components'

export const Sticker = styled.h1(
  ({ theme: { breakpoints, font, boxShadow, colors } }) => css`
    display: inline;
    padding: 1rem;
    font-weight: ${font.weight.bold};
    box-shadow: ${boxShadow.md};
    background-color: ${colors.accent};
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    font-size: ${font.size['3xl']};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size['4xl']};
    }
  `
)

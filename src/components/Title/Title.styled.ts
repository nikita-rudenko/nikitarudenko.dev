import styled, { css } from 'styled-components'

const Title = styled.h1(
  ({ theme: { font, boxShadow, breakpoints, colors } }) => css`
    display: inline;
    padding: 0.5rem 0;
    font-size: ${font.size['4xl']};
    font-weight: ${font.weight.bold};
    box-shadow: ${boxShadow.md};
    padding: 0.5rem;
    background-color: ${colors.accent};
    box-decoration-break: clone;

    @media (min-width: ${breakpoints.md}) {
      padding: 1rem;
    }
  `
)

export default Title

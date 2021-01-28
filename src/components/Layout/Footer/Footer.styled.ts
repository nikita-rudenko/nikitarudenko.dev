import styled, { css } from 'styled-components'

export const Footer = styled.footer(
  ({ theme: { constants, breakpoints, font } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: ${constants.containerWidth};
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    font-size: ${font.size.sm};

    a,
    span {
      font-weight: ${font.weight.bold};
    }

    @media (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 2rem 4rem;
      font-size: ${font.size.sm};
    }
  `
)

import styled, { css } from 'styled-components'

export const Footer = styled.footer(
  ({ theme: { breakpoints, colors, font } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    font-size: ${font.size.sm};
    border-top: 1px solid ${colors.border};

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

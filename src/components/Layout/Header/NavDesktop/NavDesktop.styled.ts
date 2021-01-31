import styled, { css } from 'styled-components'

export const Nav = styled.nav(
  ({ theme: { breakpoints, constants } }) => css`
    display: none;
    grid-auto-flow: column;
    max-width: ${constants.containerWidth};
    gap: 1.5rem;
    padding: 1rem 0;
    margin: 0 auto;
    justify-content: center;

    @media (min-width: ${breakpoints.md}) {
      display: grid;
    }
  `
)

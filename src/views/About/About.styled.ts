import styled, { css } from 'styled-components'

export const Grid = styled.div(
  ({ theme: { breakpoints } }) => css`
    padding: 4rem 1rem;
    max-width: ${breakpoints.md};
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 0 auto;
    gap: 1.25rem;

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `
)

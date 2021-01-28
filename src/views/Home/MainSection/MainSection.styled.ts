import styled, { css } from 'styled-components'

export const MainSectionContainer = styled.section(
  ({ theme: { breakpoints, gradients } }) => css`
    padding: 2rem 1rem;
    background: ${gradients.orangePeach};

    @media (min-width: ${breakpoints.md}) {
      padding: 4rem 1rem;
    }
  `
)

export const ContentGrid = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    max-width: ${breakpoints.md};
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin: 0 auto;

    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }
  `
)

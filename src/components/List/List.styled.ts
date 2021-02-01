import styled, { css } from 'styled-components'

export const List = styled.div<{
  layoutType: 'grid' | 'column'
}>(
  ({ layoutType, theme: { breakpoints, constants } }) => css`
    max-width: ${constants.containerWidth};
    margin: 0 auto;
    padding: 1rem;
    row-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: 1fr;

    @media (min-width: ${breakpoints.md}) {
      padding: 1rem 0;
      grid-template-columns: ${layoutType === 'grid'
        ? 'repeat(2, 1fr)'
        : '1fr'};
    }
  `
)

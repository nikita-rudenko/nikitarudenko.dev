import styled, { css } from 'styled-components'

export const ContentHeader = styled.div(
  ({ theme: { breakpoints } }) => css`
    padding: 6rem 0.5rem;
    text-align: center;

    @media (min-width: ${breakpoints.lg}) {
      padding: 6rem 1.5rem;
    }
  `
)

export const ContentBody = styled.section(
  ({ theme: { breakpoints } }) => css`
    padding-bottom: 2rem;

    @media (min-width: ${breakpoints.md}) {
      padding-bottom: 4rem;
    }
  `
)

export const List = styled.div<{
  layoutType: 'grid' | 'column'
}>(
  ({ layoutType, theme: { breakpoints } }) => css`
    max-width: ${breakpoints.md};
    margin: 0 auto;
    padding: 0 1rem;
    row-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: '1fr';

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: ${layoutType === 'grid'
        ? 'repeat(2, 1fr)'
        : '1fr'};
    }
  `
)

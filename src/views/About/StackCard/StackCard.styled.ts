import styled, { css } from 'styled-components'

import CardComponent from '@components/ContentCard'

export const Card = styled(CardComponent)(
  ({ theme: { breakpoints } }) => css`
    padding: 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
)

export const Grid = styled.div(
  () => css`
    padding: 1rem 0.8rem;
    grid-area: tags;
    justify-self: end;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  `
)

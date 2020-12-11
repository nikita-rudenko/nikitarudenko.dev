import styled, { css } from 'styled-components'

import CardComponent from '@components/Card'

export const Card = styled(CardComponent)(
  ({ theme: { breakpoints } }) => css`
    padding: 1rem;

    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
)

export const Grid = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    padding: 0.75rem;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: 1fr 8rem;
    }
  `
)

export const Avatar = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: none;
    width: 8rem;
    height: 8rem;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: ${breakpoints.sm}) {
      display: block;
    }
  `
)

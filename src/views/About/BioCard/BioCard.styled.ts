import styled, { css } from 'styled-components'

import ContentCard from '@components/ContentCard'

export const Card = styled(ContentCard)(
  ({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }
  `
)

export const Cta = styled.div(
  ({ theme: { breakpoints } }) => css`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    @media (min-width: ${breakpoints.md}) {
      top: 2rem;
      right: 2.25rem;
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
  ({ theme: { breakpoints, mixins } }) => css`
    display: none;
    width: 8rem;
    height: 8rem;
    overflow: hidden;
    ${mixins.rounded}

    @media (min-width: ${breakpoints.sm}) {
      display: block;
    }
  `
)

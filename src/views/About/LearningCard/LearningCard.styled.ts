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

export const Text = styled.div(
  () => css`
    padding: 1rem 0.8rem;
  `
)

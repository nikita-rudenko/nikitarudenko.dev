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

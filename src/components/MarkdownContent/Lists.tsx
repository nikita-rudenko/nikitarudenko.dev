import styled, { css } from 'styled-components'

export const OrderedList = styled.ol(
  ({ theme: { breakpoints } }) => css`
    list-style: decimal;
    padding-left: 1rem;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding-left: 2rem;
    }
  `
)

export const UnorderedList = styled.ul(
  ({ theme: { breakpoints } }) => css`
    list-style: disc;
    padding-left: 1rem;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding-left: 2rem;
    }
  `
)

export const ListItem = styled.li(
  () => css`
    margin-bottom: 0.5rem;
  `
)

import styled, { css } from 'styled-components'

import CardComponent from '@components/ContentCard'

export const NavigationContainer = styled.nav(
  ({ theme: { breakpoints } }) => css`
    grid-column: span 1 / span 1;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;

    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }
    @media (min-width: ${breakpoints.md}) {
      gap: 1.25rem;
    }
  `
)

export const Card = styled(CardComponent)(
  ({ theme: { breakpoints, font } }) => css`
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.xl};
    }
  `
)

export const NavLink = styled.a(
  ({ theme: { breakpoints, colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;

    &:hover,
    &:focus {
      background-color: ${colors.tertiary};
    }

    @media (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      padding: 1rem;
    }
  `
)

export const EmojiWrapper = styled.span(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: ${breakpoints.sm}) {
      margin-right: 0.5rem;
    }
  `
)

import styled, { css } from 'styled-components'

export const NavRow = styled.nav<{
  listLength: number
}>(
  ({ theme: { breakpoints } }) => css`
    grid-column: 1 / 2;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 0.5rem;

    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }

    @media (min-width: ${breakpoints.md}) {
      gap: 1.25rem;
    }
  `
)

export const NavLink = styled.a(
  ({ theme: { borderRadius, breakpoints, colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;
    border-radius: ${borderRadius.md};

    &:hover,
    &:focus {
      background-color: ${colors.bgSecondary};
    }

    @media (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      padding: 1rem;
    }
  `
)

export const NavIconWrapper = styled.span(
  ({ theme: { breakpoints } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.sm}) {
      margin-right: 0.5rem;
    }
  `
)

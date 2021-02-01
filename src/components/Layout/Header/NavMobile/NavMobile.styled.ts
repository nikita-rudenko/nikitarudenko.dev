import styled, { css } from 'styled-components'

export const Overlay = styled.div<{ isOpen: boolean }>(
  ({ isOpen, theme: { breakpoints, constants } }) => css`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${constants.zIndex.nav};
    ${isOpen ? `opacity: 1` : `pointer-events: none`};

    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  `
)

export const Navigation = styled.nav<{ isOpen: boolean }>(
  ({ isOpen, theme: { colors, constants, breakpoints } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${constants.zIndex.nav};
    height: 100%;
    transition: opacity 0.2s linear;
    background-color: ${colors.bgPrimary};
    opacity: ${isOpen ? `1` : `0`};

    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  `
)

export const NavigationList = styled.div<{}>(
  ({ theme: { font } }) => css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1rem;
    font-weight: ${font.weight.bold};
    font-size: ${font.size.lg};
  `
)

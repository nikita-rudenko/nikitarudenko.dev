import styled, { css } from 'styled-components'

export const Toggle = styled.div<{}>(
  ({ theme: { colors, boxShadow, breakpoints, mixins, constants } }) => css`
    display: block;
    position: fixed;
    right: 1.4rem;
    bottom: 1.4rem;
    z-index: ${constants.zIndex.nav};
    box-shadow: ${boxShadow.md};
    padding: 0.6rem 0.8rem;
    border: 2px solid ${colors.border};
    background-color: ${colors.bgSecondary};
    ${mixins.rounded}

    @media (min-width: ${breakpoints.md}) {
      display: none;
    }
  `
)

export const ToggleIcon = styled.div<{ isOpen: boolean }>(
  ({ isOpen, theme: { colors, mixins } }) => css`
    width: 26px;
    height: 20px;
    position: relative;
    margin: 0 auto;
    transform: rotate(0deg);
    transition: 0.1s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.3s ease-in-out;
      background-color: ${colors.fontPrimary};
      ${mixins.rounded}
    }

    span:nth-child(1) {
      top: 0px;
      ${isOpen && `top: 8px; width: 0%; left: 50%;`}
    }

    span:nth-child(2) {
      top: 8px;
      ${isOpen && `transform: rotate(45deg);`}
    }

    span:nth-child(3) {
      top: 8px;
      ${isOpen && `transform: rotate(-45deg);`}
    }

    span:nth-child(4) {
      top: 16px;
      ${isOpen && `top: 8px; width: 0%; left: 50%;`}
    }
  `
)

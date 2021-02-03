import styled, { css } from 'styled-components'

export const Clickable = styled.button(
  ({ theme: { boxShadow, mixins, colors, font } }) => css`
    position: relative;
    display: grid;
    font-family: ${font.family.display};
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    column-gap: 0.4rem;
    color: ${colors.fontPrimary};
    padding: 0.25rem 0.5rem;
    font-weight: ${font.weight.bold};
    line-height: 1.5rem;
    font-size: ${font.size.sm};
    cursor: pointer;
    box-shadow: ${boxShadow.md};
    transition: all 0.2s linear;
    border: 1px solid ${colors.border};
    background-color: ${colors.bgSecondary};
    ${mixins.rounded}

    &:hover {
      opacity: 0.8;
    }
  `
)

export const NotificationDot = styled.span(
  ({ theme: { animations, palette } }) => css`
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -0.25rem;
    margin-right: -0.25rem;
    display: flex;

    span:first-child {
      ${animations.ping}
      width: 100%;
      position: absolute;
      opacity: 0.75;
      height: 100%;
      display: inline-flex;
      border-radius: 100%;
      background: ${palette.amber[400]};
    }

    span:last-child {
      position: relative;
      display: inline-flex;
      border-radius: 100%;
      width: 0.75rem;
      height: 0.75rem;
      background-color: ${palette.amber[500]};
    }
  `
)

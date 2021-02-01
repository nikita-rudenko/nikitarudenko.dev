import styled, { css } from 'styled-components'

export const Link = styled.a<{ isActive: boolean }>(
  ({ theme: { colors, font, mixins }, isActive }) => css`
    display: grid;
    grid-template-columns: 0.6rem auto;
    justify-content: center;
    align-items: center;
    column-gap: 0.8rem;
    line-height: 1.5;
    font-weight: ${font.weight.bold};
    padding: 0.5rem 0.75rem;
    border: 2px solid ${colors.border};
    ${mixins.rounded}

    ${isActive && `background-color: ${colors.border};`}

    > span {
      display: block;
    }
  `
)

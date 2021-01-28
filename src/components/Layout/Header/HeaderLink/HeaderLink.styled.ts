import styled, { css } from 'styled-components'

export const Link = styled.a<{ isActive: boolean }>(
  ({ theme: { font }, isActive }) => css`
    display: grid;
    grid-template-columns: 0.6rem auto;
    justify-content: center;
    align-items: center;
    column-gap: 0.8rem;
    line-height: 1.5;
    font-weight: ${font.weight.bold};
    padding: 0.5rem 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.375rem;

    ${isActive && `background-color: #edf2f7;`}

    > span {
      display: block;
    }
  `
)

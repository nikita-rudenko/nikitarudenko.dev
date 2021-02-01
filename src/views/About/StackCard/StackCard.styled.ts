import styled, { css } from 'styled-components'

export const Grid = styled.div(
  () => css`
    padding: 1rem 0.8rem;
    justify-self: end;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 0.4rem;
  `
)

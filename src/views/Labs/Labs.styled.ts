import styled, { css } from 'styled-components'

export const ProjectLink = styled.a(
  ({ theme: { borderRadius, colors, font } }) => css`
    display: grid;
    padding: 1rem;
    border-radius: ${borderRadius.md};
    transition: background-color 0.2s ease-in;
    font-weight: ${font.weight.bold};
    grid-template-columns: 2rem 1fr;
    row-gap: 0.2rem;
    grid-template-areas:
      'icon title'
      'excerpt excerpt'
      'tags tags';

    &:hover,
    &:focus {
      background-color: ${colors.bgSecondary};
    }
  `
)

export const Icon = styled.div(
  ({ theme: { font } }) => css`
    grid-area: icon;
    font-size: ${font.size.xl};
    display: flex;
    align-items: center;
  `
)

export const Title = styled.div(
  ({ theme: { font, breakpoints } }) => css`
    grid-area: title;
    font-size: ${font.size.base};
    line-height: 2em;

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.lg};
    }
  `
)
export const Excerpt = styled.div(
  ({ theme: { breakpoints, colors, font } }) => css`
    grid-area: excerpt;
    color: ${colors.fontSecondary};
    font-size: ${font.size.sm};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.base};
    }
  `
)

export const Tags = styled.div(
  () => css`
    padding-top: 1rem;
    grid-area: tags;
    justify-self: end;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    column-gap: 0.4rem;
  `
)

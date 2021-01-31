import styled, { css } from 'styled-components'

export const SnippetLink = styled.a(
  ({ theme: { colors, font } }) => css`
    display: grid;
    padding: 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s ease-in;
    font-weight: ${font.weight.bold};
    row-gap: 0.2rem;
    grid-template-areas:
      'title'
      'excerpt'
      'tags';

    &:hover,
    &:focus {
      background-color: ${colors.tertiary};
    }
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
    margin-top: 1rem;
    grid-area: tags;
    justify-self: end;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    column-gap: 0.4rem;
  `
)

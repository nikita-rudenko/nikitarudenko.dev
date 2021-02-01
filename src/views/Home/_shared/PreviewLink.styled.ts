import styled, { css } from 'styled-components'

export const PreviewLink = styled.a(
  ({ theme: { colors, font, mixins } }) => css`
    padding: 0.4rem 0.75rem;
    font-weight: ${font.weight.bold};
    transition: background-color 0.2s ease-in;
    ${mixins.rounded}

    &:hover,
    &:focus {
      background-color: ${colors.bgSecondary};
    }
  `
)

export const Title = styled.h2(
  ({ theme: { font, breakpoints } }) => css`
    font-size: ${font.size.base};
    line-height: 1.4em;

    @media (min-width: ${breakpoints.md}) {
      line-height: 2em;
      font-size: ${font.size.lg};
    }
  `
)

export const Excerpt = styled.div(
  ({ theme: { breakpoints, colors, font } }) => css`
    color: ${colors.fontSecondary};
    font-size: ${font.size.sm};
    line-height: 1.2em;

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.base};
    }
  `
)

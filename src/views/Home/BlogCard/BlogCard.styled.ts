import styled, { css } from 'styled-components'

import CardComponent from '@components/ContentCard'

export const Card = styled(CardComponent)(
  ({ theme: { breakpoints } }) => css`
    padding: 1rem;

    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
)

export const ArticleLink = styled.a(
  ({ theme: { colors, font, breakpoints } }) => css`
    display: grid;
    padding: 1rem;
    grid-template-columns: 1fr;
    border-radius: 0.375rem;
    transition: background-color 0.2s ease-in;
    font-weight: ${font.weight.bold};
    grid-template-areas:
      'title'
      'excerpt';

    &:hover,
    &:focus {
      background-color: ${colors.tertiary};
    }

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: 1fr 6rem;
      grid-template-areas:
        'title date'
        'excerpt excerpt';
    }
  `
)

export const Title = styled.div(
  ({ theme: { font, breakpoints } }) => css`
    grid-area: title;
    font-size: ${font.size.base};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size.lg};
    }
  `
)

export const PublishDate = styled.div(
  ({ theme: { breakpoints, colors, font } }) => css`
    grid-area: date;
    justify-self: flex-end;
    align-self: center;
    color: ${colors.fontSecondary};
    display: none;
    font-size: ${font.size.sm};

    @media (min-width: ${breakpoints.md}) {
      display: block;
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

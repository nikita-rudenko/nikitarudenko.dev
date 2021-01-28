import styled, { css } from 'styled-components'

import BaseCard from '@components/ContentCard'

export const Card = styled(BaseCard)(
  ({ theme: { breakpoints } }) => css`
    padding: 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
)

export const ProjectLink = styled.a(
  ({ theme: { colors, font } }) => css`
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 1.2rem 1fr;
    column-gap: 0.5rem;
    grid-template-areas:
      'icon title'
      'excerpt excerpt';
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s ease-in;
    font-weight: ${font.weight.bold};

    &:hover,
    &:focus {
      background-color: ${colors.tertiary};
    }
  `
)

export const Icon = styled.div(
  ({ theme: { font } }) => css`
    grid-area: icon;
    font-size: ${font.size.xl};
    display: flex;
    justify-content: center;
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

import styled, { css } from 'styled-components'

import CardComponent from '@components/ContentCard'

import {
  PreviewLink,
  Title as BaseTitle,
  Excerpt as BaseExcerpt,
} from '../_shared/PreviewLink.styled'

export const Card = styled(CardComponent)(
  ({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.sm}) {
      grid-column: span 2 / span 2;
    }
  `
)

export const ArticleLink = styled(PreviewLink)(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.4rem;
    grid-template-areas:
      'title'
      'excerpt';

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: 1fr 6rem;
      grid-template-areas:
        'title date'
        'excerpt excerpt';
    }
  `
)

export const Title = styled(BaseTitle)(
  () => css`
    grid-area: title;
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

export const Excerpt = BaseExcerpt

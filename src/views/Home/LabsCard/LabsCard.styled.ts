import styled, { css } from 'styled-components'

import {
  PreviewLink,
  Title as BaseTitle,
  Excerpt as BaseExcerpt,
} from '../_shared/PreviewLink.styled'

export const ProjectLink = styled(PreviewLink)(
  () => css`
    display: grid;
    grid-template-columns: 1.2rem 1fr;
    column-gap: 0.5rem;
    row-gap: 0.4rem;
    grid-template-areas:
      'icon title'
      'excerpt excerpt';
    align-content: center;
    justify-content: center;
  `
)

export const Icon = styled.div(
  () => css`
    grid-area: icon;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  `
)

export const Title = styled(BaseTitle)(
  () => css`
    grid-area: title;
  `
)

export const Excerpt = styled(BaseExcerpt)(
  () => css`
    grid-area: excerpt;
  `
)

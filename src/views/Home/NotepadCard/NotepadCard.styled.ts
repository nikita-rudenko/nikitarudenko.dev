import styled, { css } from 'styled-components'

import {
  PreviewLink,
  Title as BaseTitle,
  Excerpt as BaseExcerpt,
} from '../_shared/PreviewLink.styled'

export const SnippetLink = styled(PreviewLink)(
  () => css`
    display: grid;
    row-gap: 0.4rem;
  `
)

export const Title = BaseTitle
export const Excerpt = BaseExcerpt

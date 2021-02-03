import styled, { css } from 'styled-components'

import Tag from '@components/Tag'

export const StackList = styled.div(
  () => css`
    padding: 1rem 0.8rem;
    justify-self: end;
    display: flex;
    flex-wrap: wrap;

    // NOTE: Safari doesn't support flex gap 😒
    ${Tag} {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      margin-bottom: 0.4rem;
    }
  `
)

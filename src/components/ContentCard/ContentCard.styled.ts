import styled, { css } from 'styled-components'

import List from '@components/List'

export const Wrapper = styled.div(
  ({ theme: { breakpoints, borderRadius, boxShadow, colors } }) => css`
    background-color: ${colors.bgPrimary};
    border-radius: ${borderRadius.md};
    box-shadow: ${boxShadow.md};
    overflow: hidden;
    padding: 1rem;

    ${List} {
      padding: 1rem 0;
    }

    @media (min-width: ${breakpoints.md}) {
      padding: 1.5rem;
    }
  `
)

export const Title = styled.h1(
  ({ theme: { font, breakpoints } }) => css`
    padding: 0.5rem;
    font-size: ${font.size.xl};
    font-weight: ${font.weight.bold};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size['2xl']};
      padding: 0.5rem 0.75rem;
    }
  `
)
export const TitleContent = styled.span(
  ({ theme: { colors } }) => css`
    padding: 0 0.25rem;
    transition: background-color 0.3s linear;
    border-bottom: 4px solid ${colors.accent};

    &:link {
      &:hover,
      &:focus {
        background-color: ${colors.accent};
      }
    }
  `
)

import styled, { css } from 'styled-components'

export const Card = styled.div(
  ({ theme: { colors, boxShadow } }) => css`
    background-color: ${colors.bgPrimary};
    border-radius: 0.375rem;
    overflow: hidden;
    box-shadow: ${boxShadow.md};
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

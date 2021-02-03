import styled, { css } from 'styled-components'

export const ContentHeader = styled.div(
  ({ theme: { breakpoints, font, gradients } }) => css`
    font-family: ${font.family.display};
    background: ${gradients.orangePeach};
    padding: 4rem 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding: 6rem 2rem;
    }
  `
)

export const TitleWrapper = styled.div(
  ({ theme: { constants } }) => css`
    max-width: ${constants.containerWidth};
    text-align: center;
    margin: 0 auto;
  `
)

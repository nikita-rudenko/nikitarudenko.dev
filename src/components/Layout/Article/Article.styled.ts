import styled, { css } from 'styled-components'

export const ArticleHeader = styled.div(
  ({ theme: { breakpoints, gradients } }) => css`
    padding: 6rem 1rem;
    text-align: center;
    background: ${gradients.orangePeach};

    @media (min-width: ${breakpoints.lg}) {
      padding: 6rem 1.5rem;
    }
  `
)

export const TitleWrapper = styled.div(
  ({ theme: { constants } }) => css`
    max-width: ${constants.containerWidth};
    margin: 0 auto;
  `
)

export const ArticleBody = styled.section(
  () => css`
    padding: 1rem;
  `
)

export const ArticleContent = styled.article(
  ({ theme: { breakpoints, constants } }) => css`
    max-width: ${constants.containerWidth};
    padding-top: 0.5rem;
    margin: 0 auto;

    @media (min-width: ${breakpoints.md}) {
      padding-top: 1rem;
    }
  `
)

export const ArticleMeta = styled.aside(
  ({ theme: { breakpoints, colors } }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: ${colors.bgSecondary};
    padding: 0.8rem;
    gap: 0.4rem;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.md}) {
      padding: 1.4rem;
      flex-direction: row;
    }
  `
)

export const Tags = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: min-content;
    gap: 0.4rem;
    align-items: center;

    @media (min-width: ${breakpoints.sm}) {
      grid-auto-flow: column;
    }
  `
)

export const Links = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: min-content;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;

    @media (min-width: ${breakpoints.sm}) {
      grid-auto-flow: column;
    }
  `
)

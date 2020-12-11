import styled, { css } from 'styled-components'

export const HeroContainer = styled.section(
  ({ theme: { breakpoints, font } }) => css`
    padding: 8rem 0.5rem;
    font-family: ${font.family.display};

    @media (min-width: ${breakpoints.lg}) {
      padding: 8rem 1.5rem;
    }
  `
)

export const Title = styled.h1(
  ({ theme: { font, breakpoints } }) => css`
    text-align: center;
    font-size: ${font.size['4xl']};
    font-weight: ${font.weight.bold};

    @media (min-width: ${breakpoints.md}) {
      font-size: ${font.size['5xl']};
    }
  `
)

export const NameLink = styled.a(
  ({ theme: { colors } }) => css`
    display: inline-block;
    padding: 0 1rem;
    background-color: ${colors.accent};
    color: ${colors.fontPrimary};
    cursor: pointer;
  `
)

export const Subtitle = styled.h2(
  ({ theme: { breakpoints, font } }) => css`
    margin: 0 auto;
    padding-top: 1rem;
    text-align: center;
    font-family: ${font.family.body};
    max-width: 20rem;
    font-size: ${font.size.base};

    svg {
      width: 1rem;
      height: 1rem;

      @media (min-width: ${breakpoints.md}) {
        width: 1.3rem;
        height: 1.3rem;
      }
    }

    @media (min-width: ${breakpoints.md}) {
      max-width: none;
      font-size: ${font.size.xl};
    }
  `
)

export const TechLink = styled.a(
  ({ theme: { font }, color }) => css`
    display: inline-flex;
    padding: 0 0.1rem;
    align-items: center;
    font-weight: ${font.weight.bold};
    color: ${color};

    > svg {
      margin-left: 0.2rem;
    }
  `
)

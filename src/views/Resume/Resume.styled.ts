import styled, { css, createGlobalStyle } from 'styled-components'

import { Clickable } from '@components/Clickable/Clickable.styled'
import { Title } from '@components/ContentCard/ContentCard.styled'

export const Wrapper = styled.div(
  ({ theme: { constants } }) => css`
    margin: 4rem auto;
    width: ${constants.containerWidth};
    display: grid;
    grid-auto-flow: row;
    row-gap: 2rem;
  `
)

export const ButtonsRow = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  `
)

export const Paper = styled.div(
  ({ theme: { colors, boxShadow, mixins, font } }) => css`
    display: grid;
    grid-template-columns: 3fr 6fr;
    align-items: flex-start;
    background-color: ${colors.bgPrimary};
    box-shadow: ${boxShadow.md};
    padding: 1.4rem;
    ${mixins.rounded};

    ${Title} {
      padding: 0;
      font-size: ${font.size.lg};
      margin-bottom: 1rem;
    }
  `
)

export const Side = styled.div(
  () => css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1rem;
    padding: 1rem;
  `
)

export const List = styled.ul(
  ({ theme: { font } }) => css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 0.4rem;

    > span {
      font-weight: ${font.weight.bold};
      font-size: ${font.size.sm};
    }
  `
)

export const Description = styled.p(
  ({ theme: { font, colors } }) => css`
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
    line-height: ${font.lineHeight.tight};
    color: ${colors.fontSecondary};
    margin: 0;
  `
)

export const Section = styled.section(
  () => css`
    display: grid;
    grid-auto-flow: row;
    padding: 0.4rem;
  `
)

export const SectionContent = styled.div(
  () => css`
    padding: 0 0.4rem;
  `
)

export const JobsGrid = styled.div(
  () => css`
    display: grid;
    grid-auto-flow: row;
    row-gap: 1rem;
  `
)

export const print = createGlobalStyle`
  @media print {
    body * {
      visibility: hidden;
    }

    body,
    main {
      margin: 0 !important;
      padding: 0 !important;
    }

    ${Wrapper} {
      padding: 0;
      margin: 0 auto;

      ${Clickable} {
        display: none;
      }
    }

    ${Paper} {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
    }

    ${Paper} * {
      visibility: visible;
    }
  }
`

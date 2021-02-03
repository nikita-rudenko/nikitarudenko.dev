import styled, { css } from 'styled-components'

export const JobCard = styled.div(
  ({ theme: { colors, mixins } }) => css`
    position: relative;
    border: 2px solid ${colors.border};
    background-color: ${colors.bgSecondary};
    padding: 1rem;
    ${mixins.rounded}
  `
)

export const JobTitle = styled.h4(
  ({ theme: { colors, font } }) => css`
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
    line-height: ${font.lineHeight.tight};
    margin: 0;
    font-family: ${font.family.display};
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span:last-child {
      color: ${colors.fontSecondary};
      font-size: ${font.size.sm};
    }
  `
)

export const List = styled.ul(
  ({ theme: { colors, font } }) => css`
    display: grid;
    grid-auto-flow: row;

    > span {
      font-weight: ${font.weight.bold};
      font-size: ${font.size.sm};
    }

    > li {
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-size: ${font.size.sm};
      line-height: 1.2em;
      font-weight: ${font.weight.bold};
      line-height: ${font.lineHeight.snug};
      color: ${colors.fontSecondary};

      span:first-child {
        color: ${colors.fontPrimary};
      }
    }
  `
)

import styled, { css } from 'styled-components'

export const Profile = styled.div(
  ({ theme: { mixins, colors } }) => css`
    display: grid;
    row-gap: 1rem;
    justify-content: center;
    justify-items: center;
    padding: 1rem;
    ${mixins.rounded};
    position: relative;
    border: 2px solid ${colors.border};
    background-color: ${colors.bgSecondary};
    padding: 1rem;
  `
)

export const Name = styled.div(
  ({ theme: { colors, font } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: ${font.size['2xl']};
      font-weight: ${font.weight.bold};
      line-height: ${font.lineHeight.tight};
      margin: 0;
    }

    h2 {
      font-size: ${font.size.base};
      font-weight: ${font.weight.bold};
      line-height: ${font.lineHeight.tight};
      color: ${colors.fontSecondary};
      margin: 0;
    }
  `
)

export const Avatar = styled.div(
  ({ theme: { mixins } }) => css`
    width: 8.5rem;
    height: 8.5rem;
    overflow: hidden;
    ${mixins.rounded}
    filter: grayscale(25%);
  `
)

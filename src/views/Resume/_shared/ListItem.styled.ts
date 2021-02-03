import styled, { css } from 'styled-components'

export const ListItem = styled.li(
  ({ theme: { colors, font } }) => css`
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
  `
)

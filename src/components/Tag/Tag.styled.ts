import styled, { css } from 'styled-components'

export const Tag = styled.div<{}>(
  ({ theme: { colors, font } }) => css`
    display: inline;
    padding: 0 0.25rem;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    background-color: ${colors.bgPrimary};
    color: ${colors.fontPrimary}; // #4d4d4d
    border: 2px solid ${colors.fontPrimary};
  `
)

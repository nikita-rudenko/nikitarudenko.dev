import styled, { css } from 'styled-components'

export const Separator = styled.hr(
  ({ theme: { colors } }) => css`
    margin: 4rem auto;
    height: 3px;
    width: 10rem;
    border-top: 3px dashed ${colors.fontPrimary};
  `
)

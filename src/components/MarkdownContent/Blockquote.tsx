import styled, { css } from 'styled-components'

const Blockquote = styled.blockquote(
  ({ theme: { breakpoints, colors, font } }) => css`
    padding-left: 0.5rem;
    font-weight: ${font.weight.thin};
    border-left-width: 0.2rem;
    border-color: ${colors.border};
    background-color: ${colors.bgSecondary};
    padding: 1rem;

    > p {
      margin: 0;
    }

    @media (min-width: ${breakpoints.md}) {
      padding-left: 1rem;
    }
  `
)

export default Blockquote

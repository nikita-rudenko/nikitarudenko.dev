import styled, { css } from 'styled-components'

export const Details = styled.details(
  ({ theme: { font, mixins, colors } }) => css`
    ${mixins.rounded};

    > summary {
      padding: 0.2rem 1rem;
      cursor: pointer;
      background-color: ${colors.border};
      font-weight: ${font.weight.bold};
    }

    > div {
      padding: 1rem;
      border: 2px solid ${colors.border};
      background-color: ${colors.bgSecondary};
    }
  `
)

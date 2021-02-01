import styled, { css } from 'styled-components'

const Image = styled.img(
  ({ theme: { breakpoints, mixins } }) => css`
    margin: 1rem auto;
    ${mixins.rounded}

    @media (min-width: ${breakpoints.md}) {
      margin: 2rem auto;
    }
  `
)

export default Image

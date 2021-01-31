import styled, { css } from 'styled-components'

const Image = styled.img(
  ({ theme: { borderRadius, breakpoints } }) => css`
    margin: 1rem auto;
    border-radius: ${borderRadius.md};
    @media (min-width: ${breakpoints.md}) {
      margin: 2rem auto;
    }
  `
)

export default Image

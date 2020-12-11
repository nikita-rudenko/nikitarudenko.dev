import styled, { css } from 'styled-components'

type Props = {
  backgroundType?: 'primary' | 'gradient'
}

const Body = styled.main<Props>(
  ({ backgroundType, theme: { colors, gradients } }) => css`
    flex: 1;

    background: ${backgroundType === 'gradient'
      ? gradients.orangePeach
      : colors.bgPrimary};
  `
)

export default Body

import styled, { css } from 'styled-components'

type Props = {
  backgroundType?: 'primary' | 'secondary' | 'gradient'
}

const Body = styled.main<Props>(
  ({ backgroundType, theme: { colors, gradients } }) => css`
    flex: 1;

    ${backgroundType === 'gradient' && `background: ${gradients.orangePeach};`}
    ${backgroundType === 'primary' && `background: ${colors.bgPrimary};`}
    ${backgroundType === 'secondary' && `background: ${colors.bgSecondary};`}
  `
)

export default Body

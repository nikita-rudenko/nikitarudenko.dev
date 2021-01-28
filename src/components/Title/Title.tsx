import { TRenderProps } from '@typings/commonPropTypes'

import * as Styled from './Title.styled'

const Title = ({ children }: TRenderProps) => {
  return (
    <Styled.Sticker>
      <span>{children}</span>
    </Styled.Sticker>
  )
}

export default Title

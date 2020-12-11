import Title from '@components/Title'
import { TRenderProps } from '@typings/commonPropTypes'

import * as Styled from './ContentList.styled'

type Props = {
  title: string
  layoutType: 'grid' | 'column'
} & TRenderProps

const ContentList = ({ title, children, layoutType }: Props) => {
  return (
    <>
      <Styled.ContentHeader>
        <Title>{title}</Title>
      </Styled.ContentHeader>
      <Styled.ContentBody>
        <Styled.List layoutType={layoutType}>{children}</Styled.List>
      </Styled.ContentBody>
    </>
  )
}

export default ContentList

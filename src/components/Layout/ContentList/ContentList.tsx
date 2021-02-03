import List from '@components/List'
import StickerHeading from '@components/StickerHeading'
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
        <StickerHeading>{title}</StickerHeading>
      </Styled.ContentHeader>
      <Styled.ContentBody>
        <List layoutType={layoutType}>{children}</List>
      </Styled.ContentBody>
    </>
  )
}

export default ContentList

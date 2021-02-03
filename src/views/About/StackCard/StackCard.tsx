import ContentCard from '@components/ContentCard'
import Tag from '@components/Tag'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './StackCard.styled'

type Props = Pick<TAboutPageData, 'stack'>

function StackCard({ stack }: Props) {
  return (
    <ContentCard title="Core stack">
      <Styled.StackList>
        {stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Styled.StackList>
    </ContentCard>
  )
}

export default StackCard

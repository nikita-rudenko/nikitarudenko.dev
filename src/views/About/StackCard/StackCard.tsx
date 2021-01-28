import Tag from '@components/Tag'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './StackCard.styled'

type Props = Pick<TAboutPageData, 'stack'>

function StackCard({ stack }: Props) {
  return (
    <Styled.Card className="p-4 md:p-6" title="Core stack">
      <Styled.Grid>
        {stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Styled.Grid>
    </Styled.Card>
  )
}

export default StackCard

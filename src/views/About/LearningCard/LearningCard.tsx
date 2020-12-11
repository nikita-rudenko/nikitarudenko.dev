import MarkdownContent from '@components/MarkdownContent'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './LearningCard.styled'

type Props = Pick<TAboutPageData, 'learning'>

function LearningCard({ learning }: Props) {
  return (
    <Styled.Card title="Learning">
      <Styled.Text>
        <MarkdownContent content={learning} />
      </Styled.Text>
    </Styled.Card>
  )
}

export default LearningCard

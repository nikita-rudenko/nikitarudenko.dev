import MarkdownContent from '@components/MarkdownContent'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './BioCard.styled'

type Props = Pick<TAboutPageData, 'avatar' | 'bio'>

function BioCard({ bio, avatar }: Props) {
  return (
    <Styled.Card title="Bio">
      <Styled.Grid>
        <MarkdownContent content={bio} />
        <Styled.Avatar>
          <img src={avatar} alt="Avatar." />
        </Styled.Avatar>
      </Styled.Grid>
    </Styled.Card>
  )
}

export default BioCard

import Clickable from '@components/Clickable'
import MarkdownContent from '@components/MarkdownContent'
import { DocIcon } from '@components/SVG'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './BioCard.styled'

type Props = Pick<TAboutPageData, 'avatar' | 'bio'>

function BioCard({ bio, avatar }: Props) {
  return (
    <Styled.Card title="Bio">
      <Styled.Cta>
        <Clickable as="a" href="/resume" withNotificationDot>
          <DocIcon />
          <span>Résumé</span>
        </Clickable>
      </Styled.Cta>

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

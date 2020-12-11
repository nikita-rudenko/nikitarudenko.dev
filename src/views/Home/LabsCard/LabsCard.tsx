import Link from 'next/link'

import EmojiSVG from '@components/EmojiSVG'
import { TPRojectPreview } from '@typings/contentTypes'

import * as Styled from './LabsCard.styled'

type Props = {
  projects: TPRojectPreview[]
}

const LabsCard = ({ projects }: Props) => {
  return (
    <Styled.Card href="/labs" title="Labs">
      {projects.map(({ title, excerpt, href, id, emoji }) => {
        return (
          <Link key={id} href={href} passHref>
            <Styled.ProjectLink>
              <Styled.Icon>
                <EmojiSVG src={emoji} />
              </Styled.Icon>
              <Styled.Title>
                <span>{title}</span>
              </Styled.Title>
              <Styled.Excerpt>{excerpt}</Styled.Excerpt>
            </Styled.ProjectLink>
          </Link>
        )
      })}
    </Styled.Card>
  )
}

export default LabsCard

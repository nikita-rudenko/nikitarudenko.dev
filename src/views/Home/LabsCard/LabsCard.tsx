import Link from 'next/link'

import ContentCard from '@components/ContentCard'
import EmojiSVG from '@components/EmojiSVG'
import { List } from '@components/Layout/ContentList/ContentList.styled'
import { TPRojectPreview } from '@typings/contentTypes'

import * as Styled from './LabsCard.styled'

type Props = {
  projects: TPRojectPreview[]
}

const LabsCard = ({ projects }: Props) => {
  return (
    <ContentCard href="/labs" title="Labs">
      <List layoutType="column">
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
      </List>
    </ContentCard>
  )
}

export default LabsCard

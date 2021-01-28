import Link from 'next/link'

import ContentCard from '@components/ContentCard'
import { TSnippetPreview } from '@typings/contentTypes'

import * as Styled from './NotepadCard.styled'

type Props = {
  snippets: TSnippetPreview[]
}

const NotepadCard = ({ snippets }: Props) => {
  return (
    <ContentCard href="/notepad" title="Notepad">
      {snippets.map(({ id, title, excerpt, href }) => {
        return (
          <Link key={id} href={href} passHref>
            <Styled.ProjectLink>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Excerpt>{excerpt}</Styled.Excerpt>
            </Styled.ProjectLink>
          </Link>
        )
      })}
    </ContentCard>
  )
}

export default NotepadCard

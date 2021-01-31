import Link from 'next/link'

import ContentCard from '@components/ContentCard'
import { List } from '@components/Layout/ContentList/ContentList.styled'
import { TSnippetPreview } from '@typings/contentTypes'

import * as Styled from './NotepadCard.styled'

type Props = {
  snippets: TSnippetPreview[]
}

const NotepadCard = ({ snippets }: Props) => {
  return (
    <ContentCard href="/notepad" title="Notepad">
      <List layoutType="column">
        {snippets.map(({ id, title, excerpt, href }) => {
          return (
            <Link key={id} href={href} passHref>
              <Styled.SnippetLink>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Excerpt>{excerpt}</Styled.Excerpt>
              </Styled.SnippetLink>
            </Link>
          )
        })}
      </List>
    </ContentCard>
  )
}

export default NotepadCard

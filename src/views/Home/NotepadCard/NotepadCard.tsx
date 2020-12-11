import Link from 'next/link'

import { TSnippetPreview } from '@typings/contentTypes'

import * as Styled from './NotepadCard.styled'

type Props = {
  snippets: TSnippetPreview[]
}

const NotepadCard = ({ snippets }: Props) => {
  return (
    <Styled.Card href="/notepad" title="Notepad">
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
    </Styled.Card>
  )
}

export default NotepadCard

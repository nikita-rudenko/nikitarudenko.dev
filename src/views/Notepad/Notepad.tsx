import Link from 'next/link'

import Card from '@components/Card'
import Layout from '@components/Layout'
import ContentList from '@components/Layout/ContentList'
import Tag from '@components/Tag'
import { TSnippet } from '@typings/contentTypes'

import * as Styled from './Notepad.styled'

type Props = {
  snippets: TSnippet[]
}

const Notepad = ({ snippets }: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body backgroundType="gradient">
        <ContentList title="Notepad" layoutType="grid">
          {snippets.map(({ href, title, id, excerpt, tags }) => {
            return (
              <Card key={id}>
                <Link href={href} passHref>
                  <Styled.ArticleLink>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Excerpt>{excerpt}</Styled.Excerpt>
                    <Styled.Tags>
                      {tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </Styled.Tags>
                  </Styled.ArticleLink>
                </Link>
              </Card>
            )
          })}
        </ContentList>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Notepad

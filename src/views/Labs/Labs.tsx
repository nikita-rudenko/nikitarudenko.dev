import Link from 'next/link'

import Card from '@components/Card'
import EmojiSVG from '@components/EmojiSVG'
import Layout from '@components/Layout'
import ContentList from '@components/Layout/ContentList'
import Tag from '@components/Tag'
import { TProject } from '@typings/contentTypes'

import * as Styled from './Labs.styled'

type Props = {
  projects: TProject[]
}

const Labs = ({ projects }: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body backgroundType="gradient">
        <ContentList layoutType="grid" title="Labs">
          {projects.map(({ href, title, id, excerpt, tags, emoji }) => {
            return (
              <Card key={id}>
                <Link href={href} passHref>
                  <Styled.ArticleLink>
                    <Styled.Icon>
                      <EmojiSVG src={emoji} />
                    </Styled.Icon>
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

export default Labs

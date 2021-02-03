import Link from 'next/link'

import Card from '@components/Card'
import Layout from '@components/Layout'
import ContentList from '@components/Layout/ContentList'
import { TBlogPostPreview } from '@typings/contentTypes'

import * as Styled from './Blog.styled'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const Blog = ({ blogPosts }: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body backgroundType="gradient">
        <ContentList layoutType="column" title="Blog">
          {blogPosts.map(({ href, title, date, id, excerpt }) => {
            return (
              <Card key={id}>
                <Link href={href} passHref>
                  <Styled.BlogPostLink>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.PublishDate>{date}</Styled.PublishDate>
                    <Styled.Excerpt>{excerpt}</Styled.Excerpt>
                  </Styled.BlogPostLink>
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

export default Blog

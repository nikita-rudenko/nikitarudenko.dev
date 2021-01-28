import Link from 'next/link'

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
            const formattedDate = new Date(date).toLocaleDateString('en-US')

            return (
              <div key={id}>
                <Link href={href} passHref>
                  <Styled.ArticleLink>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.PublishDate>{formattedDate}</Styled.PublishDate>
                    <Styled.Excerpt>{excerpt}</Styled.Excerpt>
                  </Styled.ArticleLink>
                </Link>
              </div>
            )
          })}
        </ContentList>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Blog

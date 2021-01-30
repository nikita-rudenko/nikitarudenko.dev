import Link from 'next/link'

import { TBlogPostPreview } from '@typings/contentTypes'

import * as Styled from './BlogCard.styled'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const BlogCard = ({ blogPosts }: Props) => {
  return (
    <Styled.Card href="/blog" title="Blog">
      {blogPosts.map(({ href, title, date, id, excerpt }) => {
        return (
          <Link key={id} href={href} passHref>
            <Styled.ArticleLink>
              <Styled.Title>{title}</Styled.Title>
              <Styled.PublishDate>{date}</Styled.PublishDate>
              <Styled.Excerpt>{excerpt}</Styled.Excerpt>
            </Styled.ArticleLink>
          </Link>
        )
      })}
    </Styled.Card>
  )
}

export default BlogCard

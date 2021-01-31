import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import StickerHeading from '@components/StickerHeading'

import * as Styled from './BlogPost.styled'

const BlogPost = ({ blogPost: { content, title } }: any): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <Styled.ContentHeader>
          <Styled.TitleWrapper>
            <StickerHeading>{title}</StickerHeading>
          </Styled.TitleWrapper>
        </Styled.ContentHeader>

        <section className="p-4">
          <article className="max-w-screen-md pt-2 mx-auto text-base md:pt-12 font-body">
            <MarkdownContent content={content} />
          </article>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default BlogPost

import Layout from '@components/Layout'
import Article from '@components/Layout/Article'
import MarkdownContent from '@components/MarkdownContent'

const BlogPost = ({ blogPost: { content, title } }: any): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <Article title={title}>
          <MarkdownContent content={content} />
        </Article>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default BlogPost

import Layout from '@components/Layout'
import Article from '@components/Layout/Article'
import MarkdownContent from '@components/MarkdownContent'
import { TSnippet } from '@typings/contentTypes'

type Props = {
  snippet: TSnippet & { content: string }
}

const Snippet = ({ snippet: { content, title, tags } }: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <Article title={title} tags={tags}>
          <MarkdownContent content={content} />
        </Article>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Snippet

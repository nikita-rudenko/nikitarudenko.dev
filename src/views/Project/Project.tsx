import Layout from '@components/Layout'
import Article from '@components/Layout/Article'
import MarkdownContent from '@components/MarkdownContent'
import { TProject } from '@typings/contentTypes'

type Props = {
  project: TProject & { content: string }
}

const Project = ({
  project: { content, title, tags, links },
}: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <Article title={title} tags={tags} links={links}>
          <MarkdownContent content={content} />
        </Article>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Project

import Markdown from 'markdown-to-jsx'

import Layout from '@components/Layout'
import options from '@components/MarkdownContent'

const BlogPost = ({ blogPost: { content, title } }: any): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div
          style={{
            backgroundImage:
              'linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)',
          }}
          className="px-8 py-16 md:py-24 text-mononchrome-700 font-display"
        >
          <div className="max-w-screen-lg m-auto text-3xl font-bold text-center md:text-4xl">
            <h1 className="inline py-2 bg-white md:py-4">
              <span
                style={{
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                }}
                className="inline p-2 bg-yellow-400 bg-opacity-75 md:p-4"
              >
                {title}
              </span>
            </h1>
          </div>
        </div>

        <section className="p-4 bg-white">
          <article className="max-w-screen-md pt-2 mx-auto text-base md:pt-12 font-body text-mononchrome-700">
            <Markdown options={options}>{content}</Markdown>
          </article>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default BlogPost

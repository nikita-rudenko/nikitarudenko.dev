import clsx from 'clsx'
import { useContext } from 'react'

import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import Title from '@components/Title'
import { ThemeContext } from '@context/ThemeContext'
import getThemeGradient from '@utils/getThemeGradient'

const BlogPost = ({ blogPost: { content, title } }: any): JSX.Element => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div
          className={clsx(
            'px-8 py-16 md:py-24 text-monochrome-700 font-display',
            getThemeGradient(theme)
          )}
        >
          <div className="max-w-screen-lg m-auto text-center">
            <Title>{title}</Title>
          </div>
        </div>

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

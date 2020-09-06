import clsx from 'clsx'
import { useContext } from 'react'

import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import Tag from '@components/Tag'
import Title from '@components/Title'
import { ThemeContext } from '@context/ThemeContext'
import { TSnippet } from '@typings/contentTypes'
import getThemeGradient from '@utils/getThemeGradient'

type Props = {
  snippet: TSnippet & { content: string }
}

const Snippet = ({ snippet: { content, title, tags } }: Props): JSX.Element => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div
          className={clsx(
            'flex flex-col px-8 py-16 md:py-24 font-display',
            getThemeGradient(theme)
          )}
        >
          <div className="max-w-screen-lg m-auto text-3xl font-bold text-center md:text-4xl">
            <Title>{title}</Title>
          </div>
        </div>

        <section className="p-4">
          <article className="max-w-screen-md pt-2 mx-auto text-base md:pt-12 font-body">
            <MarkdownContent content={content} />

            <div className="flex flex-col items-center justify-between max-w-screen-md gap-2 px-4 py-2 mx-auto mt-16 mb-4 border-t-2 border-opacity-25 sm:flex-row">
              <div className="order-last p-1 sm:order-first">
                {tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </article>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Snippet

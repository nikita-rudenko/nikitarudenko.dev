import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'

import Card from '@components/Card'
import Layout from '@components/Layout'
import Title from '@components/Title'
import { ThemeContext } from '@context/ThemeContext'
import { TBlogPostPreview } from '@typings/contentTypes'
import getThemeGradient from '@utils/getThemeGradient'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const Blog = ({ blogPosts }: Props): JSX.Element => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body className={clsx('px-4', getThemeGradient(theme))}>
        <div className="px-2 py-24 text-center lg:px-6 text-monochrome-800">
          <Title>Blog</Title>
        </div>

        <section className="h-full pb-8 md:pb-16">
          <div className="max-w-screen-md mx-auto">
            <ul>
              {blogPosts.map(({ href, title, date, id, excerpt }) => {
                return (
                  <Card className="mb-4 shadow-md" key={id}>
                    <li>
                      <Link href={href}>
                        <a className="block p-5 transition-colors duration-200 rounded-md cursor-pointer font-body hover-bg-grayout">
                          <div className="flex items-baseline">
                            <div className="text-base font-bold md:text-lg">
                              {title}
                            </div>
                            <div className="hidden ml-auto text-sm font-bold md:block font-body text-monochrome-400">
                              {new Date(date).toLocaleDateString('en-US')}
                            </div>
                          </div>
                          <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-monochrome-400">
                            {excerpt}
                          </div>
                        </a>
                      </Link>
                    </li>
                  </Card>
                )
              })}
            </ul>
          </div>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Blog

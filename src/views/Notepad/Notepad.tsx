import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'

import Card from '@components/Card'
import Layout from '@components/Layout'
import Tag from '@components/Tag'
import Title from '@components/Title'
import { ThemeContext } from '@context/ThemeContext'
import { TSnippet } from '@typings/contentTypes'
import getThemeGradient from '@utils/getThemeGradient'

type Props = {
  snippets: TSnippet[]
}

const Notepad = ({ snippets }: Props): JSX.Element => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body className={clsx('px-4', getThemeGradient(theme))}>
        <div className="px-2 py-24 text-center lg:px-6">
          <Title>Notepad</Title>
        </div>

        <section className="pb-8 md:pb-16">
          <div className="max-w-screen-md mx-auto">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {snippets.map(({ href, title, id, excerpt, tags }) => {
                return (
                  <Card
                    className="block transition duration-200 transform rounded-md shadow-md cursor-pointer font-body hover-bg-grayout"
                    key={id}
                  >
                    <li>
                      <Link href={href}>
                        <a className="">
                          <div className="flex flex-col p-5">
                            <div className="text-base font-bold md:text-lg">
                              {title}
                            </div>
                            <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-monochrome-400">
                              {excerpt}
                            </div>
                            <div className="mt-4 ml-auto">
                              {tags.map((t) => (
                                <Tag key={t} label={t} />
                              ))}
                            </div>
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

export default Notepad

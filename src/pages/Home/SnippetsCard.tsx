import Link from 'next/link'

import Card from '@components/Card'
import { TSnippetPreview } from '@typings/contentTypes'

type Props = {
  snippets: TSnippetPreview[]
}

const SnippetsCard = ({ snippets }: Props) => {
  return (
    <Card title="Snippets">
      <ul className="mt-4">
        {snippets.map(({ id, title, excerpt, href }) => {
          return (
            <li
              className="rounded-md font-body hover:bg-yellow-400 hover:bg-opacity-50"
              key={id}
            >
              <Link href={href}>
                <a className="block p-3">
                  <div className="flex items-center">
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {title}
                    </div>
                  </div>
                  <div className="text-sm font-bold md:text-base text-mononchrome-400">
                    {excerpt}
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default SnippetsCard

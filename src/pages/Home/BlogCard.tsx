import Link from 'next/link'

import Card from '@components/Card'
import { TBlogPostPreview } from '@typings/contentTypes'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const BlogCard = (props: Props) => {
  const { blogPosts } = props

  return (
    <Card href="/blog" className="sm:col-span-2" title="Blog">
      <ul className="mt-4">
        {blogPosts.map(({ href, title, date, id, excerpt }) => {
          return (
            <li
              key={id}
              className="p-3 rounded-md font-body hover:bg-yellow-400 hover:bg-opacity-50"
            >
              <Link href={href}>
                <a>
                  <div className="flex items-baseline">
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {title}
                    </div>
                    <div className="hidden ml-auto text-sm font-bold md:block font-body text-mononchrome-400">
                      {new Date(date).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-mononchrome-400">
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

export default BlogCard

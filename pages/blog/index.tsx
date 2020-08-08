import Head from 'next/head'

import Blog from '@pages/Blog'
import { TBlogPostPreview } from '@typings/contentTypes'
import { getContentDataList } from '@utils/markdownParser'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const BlogPage = (props: Props) => {
  const { blogPosts } = props

  return (
    <>
      <Head>
        <title>Blog | Nikita Rudenko</title>
      </Head>
      <Blog blogPosts={blogPosts} />
    </>
  )
}

async function getBlogPostsPreview() {
  return await getContentDataList('blog').map(
    ({ id, data: { title, date, excerpt } }) => {
      return {
        id,
        href: `/blog/${id}`,
        date: date.toJSON(),
        title,
        excerpt,
      }
    }
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: await getBlogPostsPreview(),
    },
  }
}

export default BlogPage

import Head from 'next/head'

import seo from '@constants/seo'
import { TBlogPostPreview } from '@typings/contentTypes'
import formatDate from '@utils/dateFormatter'
import { getContentDataList } from '@utils/markdownParser'
import Blog from '@views/Blog'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const BlogPage = (props: Props) => {
  const { blogPosts } = props

  return (
    <>
      <Head>
        <title>{seo.blog.title}</title>
        <meta key="description" name="description" content={seo.blog.content} />
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
        date: formatDate(date),
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

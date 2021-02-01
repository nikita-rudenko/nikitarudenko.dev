import Head from 'next/head'

import { NAME } from '@constants/seo'
import { TBlogPost } from '@typings/contentTypes'
import formatDate from '@utils/dateFormatter'
import { getContentData, getPageSlugs } from '@utils/markdownParser'
import BlogPost from '@views/BlogPost'

type Props = {
  blogPost: TBlogPost
}

const BlogPostPage = (props: Props) => {
  const { blogPost } = props

  return (
    <>
      <Head>
        <title>
          {blogPost.title} | {NAME}
        </title>
        <meta key="description" name="description" content={blogPost.excerpt} />
      </Head>
      <BlogPost blogPost={blogPost} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const {
    content,
    id,
    data: { date, title, tags },
  } = await getContentData('blog', params.slug)

  return {
    props: {
      blogPost: {
        id,
        date: formatDate(date),
        title,
        tags,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = getPageSlugs('blog')

  return {
    paths,
    fallback: false,
  }
}

export default BlogPostPage

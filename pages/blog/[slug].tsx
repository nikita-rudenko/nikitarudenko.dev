import Head from 'next/head'

import BlogPost from '@pages/BlogPost'
import { TBlogPost } from '@typings/contentTypes'
import { getContentData, getPageSlugs } from '@utils/markdownParser'

type Props = {
  blogPost: TBlogPost
}

const BlogPostPage = (props: Props) => {
  const { blogPost } = props

  return (
    <>
      <Head>
        <title>{blogPost.title} | Nikita Rudenko</title>
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
        date: date.toJSON(),
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

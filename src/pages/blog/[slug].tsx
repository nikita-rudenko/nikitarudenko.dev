import { NextSeo } from 'next-seo'

import { SITE_ADDRESS, NAME } from '@constants/seo'
import { TBlogPost } from '@typings/contentTypes'
import formatDate from '@utils/dateFormatter'
import { getContentData, getPageSlugs } from '@utils/markdownParser'
import BlogPost from '@views/BlogPost'

type Props = {
  blogPost: TBlogPost
}

const BlogPostPage = ({ blogPost }: Props) => {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <NextSeo
          title={`${blogPost.title} | ${NAME}`}
          description={blogPost.excerpt}
          openGraph={{
            url: `${SITE_ADDRESS}/blog/${blogPost.slug}`,
            title: blogPost.title,
            description: blogPost.excerpt,
            images: [
              {
                url: blogPost.heroImage,
                width: 800,
                height: 600,
                alt: blogPost.title,
              },
            ],
          }}
          twitter={{
            handle: '@rdnkta',
            cardType: 'summary_large_image',
          }}
        />
      )}

      <BlogPost blogPost={blogPost} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const {
    content,
    id,
    data: { date, title, tags, heroImage },
  } = await getContentData('blog', params.slug)

  return {
    props: {
      blogPost: {
        id,
        date: formatDate(date),
        title,
        tags,
        content,
        heroImage,
        slug: params.slug,
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

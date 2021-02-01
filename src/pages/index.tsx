import Head from 'next/head'

import seo from '@constants/seo'
import {
  TBlogPostPreview,
  TPRojectPreview,
  TSnippetPreview,
} from '@typings/contentTypes'
import formatDate from '@utils/dateFormatter'
import { getContentDataList } from '@utils/markdownParser'
import Home from '@views/Home'

type Props = {
  blogPosts: TBlogPostPreview[]
  projects: TPRojectPreview[]
  snippets: TSnippetPreview[]
}

const HomePage = (props: Props) => {
  const { blogPosts, projects, snippets } = props

  return (
    <>
      <Head>
        <title>{seo.home.title}</title>
        <meta key="description" name="description" content={seo.home.content} />
      </Head>
      <Home blogPosts={blogPosts} projects={projects} snippets={snippets} />
    </>
  )
}

async function getBlogPostsPreview() {
  return await getContentDataList('blog')
    .slice(0, 3)
    .map(({ id, data: { title, date, excerpt } }) => {
      return {
        id,
        href: `/blog/${id}`,
        date: formatDate(date),
        title,
        excerpt,
      }
    })
}

async function getProjectsPreview() {
  return await getContentDataList('projects')
    .slice(0, 3)
    .map(({ id, data: { title, excerpt, emoji } }) => {
      return {
        id,
        href: `/labs/${id}`,
        title,
        excerpt,
        emoji,
      }
    })
}

async function getSnippetsPreview() {
  return await getContentDataList('snippets')
    .slice(0, 3)
    .map(({ id, data: { title, excerpt } }) => {
      return {
        id,
        href: `/notepad/${id}`,
        title,
        excerpt,
      }
    })
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: await getBlogPostsPreview(),
      snippets: await getSnippetsPreview(),
      projects: await getProjectsPreview(),
    },
  }
}

export default HomePage

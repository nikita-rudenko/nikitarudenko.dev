import Head from 'next/head'

import Home from '@pages/Home'
import {
  TBlogPostPreview,
  TPRojectPreview,
  TSnippetPreview,
} from '@typings/contentTypes'
import { getContentDataList } from '@utils/markdownParser'

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
        <title>Nikita Rudenko</title>
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
        date: date.toJSON(),
        title,
        excerpt,
      }
    })
}

async function getProjectsPreview() {
  return await getContentDataList('projects')
    .slice(0, 3)
    .map(({ id, data: { title, excerpt } }) => {
      return {
        id,
        href: `/projects/${id}`,
        title,
        excerpt,
      }
    })
}

async function getSnippetsPreview() {
  return await getContentDataList('snippets')
    .slice(0, 3)
    .map(({ id, data: { title, excerpt } }) => {
      return {
        id,
        href: `/snippets/${id}`,
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

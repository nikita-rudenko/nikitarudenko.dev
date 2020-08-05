import Layout from '@components/Layout'
import {
  TBlogPostPreview,
  TPRojectPreview,
  TSnippetPreview,
} from '@typings/contentTypes'

import BlogCard from './BlogCard'
import HeroSection from './HeroSection'
import MainSection from './MainSection'
import ProjectsCard from './ProjectsCard'
import SnippetsCard from './SnippetsCard'

type Props = {
  blogPosts: TBlogPostPreview[]
  projects: TPRojectPreview[]
  snippets: TSnippetPreview[]
}

const Home = ({ blogPosts, projects, snippets }: Props): JSX.Element => (
  <Layout>
    <Layout.Body>
      <HeroSection />
      <MainSection>
        <BlogCard blogPosts={blogPosts} />
        <ProjectsCard projects={projects} />
        <SnippetsCard snippets={snippets} />
      </MainSection>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
)

export default Home

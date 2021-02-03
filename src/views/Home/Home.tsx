import Layout from '@components/Layout'
import NavRow from '@components/NavRow'
import { INTERNAL_LINKS_LIST, SOCIAL_LINKS_LIST } from '@constants/links'
import {
  TBlogPostPreview,
  TPRojectPreview,
  TSnippetPreview,
} from '@typings/contentTypes'

import BlogCard from './BlogCard'
import HeroSection from './HeroSection'
import LabsCard from './LabsCard'
import MainSection from './MainSection'
import NotepadCard from './NotepadCard'

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
        <NavRow linksList={INTERNAL_LINKS_LIST.slice(1, Infinity)} />
        <BlogCard blogPosts={blogPosts} />
        <LabsCard projects={projects} />
        <NotepadCard snippets={snippets} />
        <NavRow linksList={SOCIAL_LINKS_LIST} />
      </MainSection>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
)

export default Home

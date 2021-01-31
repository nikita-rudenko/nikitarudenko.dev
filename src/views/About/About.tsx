import Layout from '@components/Layout'
import NavRow from '@components/NavRow'
import { SOCIAL_LINKS_LIST } from '@constants/links'
import { TAboutPageData } from '@typings/contentTypes'

import * as Styled from './About.styled'
import BioCard from './BioCard'
import LearningCard from './LearningCard'
import StackCard from './StackCard'

const About = ({
  avatar,
  bio,
  learning,
  stack,
}: TAboutPageData): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body backgroundType="gradient">
        <Styled.Grid>
          <BioCard avatar={avatar} bio={bio} />
          <StackCard stack={stack} />
          <LearningCard learning={learning} />
          <NavRow linksList={SOCIAL_LINKS_LIST} />
        </Styled.Grid>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default About

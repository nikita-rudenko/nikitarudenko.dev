import Layout from '@components/Layout'
import SocialBlock from '@components/SocialBlock'
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
          <SocialBlock />
        </Styled.Grid>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default About

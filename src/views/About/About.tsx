import clsx from 'clsx'
import { useContext } from 'react'

import Layout from '@components/Layout'
import SocialBlock from '@components/SocialBlock'
import { ThemeContext } from '@context/ThemeContext'
import { TAboutPageData } from '@typings/contentTypes'
import getThemeGradient from '@utils/getThemeGradient'

import BioCard from './BioCard'
import LearningCard from './LearningCard'
import StackCard from './StackCard'

type Props = {
  data: TAboutPageData
}

const About = ({ data }: Props): JSX.Element => {
  const { avatar, bio, learning, stack } = data
  const [theme] = useContext(ThemeContext)

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body
        className={clsx('px-4 py-8 md:py-16', getThemeGradient(theme))}
      >
        <div className="grid max-w-screen-md grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
          <BioCard avatar={avatar} bio={bio} />
          <StackCard stack={stack} />
          <LearningCard learning={learning} />
          <SocialBlock />
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default About

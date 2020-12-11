import Head from 'next/head'

import seo from '@constants/seo'
import { TAboutPageData } from '@typings/contentTypes'
import { getContentData } from '@utils/markdownParser'
import About from '@views/About'

type Props = {
  data: TAboutPageData
}

const AboutPage = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>{seo.about.title}</title>
        <meta
          key="description"
          name="description"
          content={seo.about.content}
        />
      </Head>
      <About
        avatar={data.avatar}
        bio={data.bio}
        learning={data.learning}
        stack={data.stack}
      />
    </>
  )
}

export async function getStaticProps() {
  const { data } = getContentData('pages', 'about')

  return {
    props: {
      data,
    },
  }
}

export default AboutPage

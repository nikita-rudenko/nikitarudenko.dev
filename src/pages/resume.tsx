import Head from 'next/head'

import seo from '@constants/seo'
import { TResumePageData } from '@typings/contentTypes'
import { getContentData } from '@utils/markdownParser'
import Resume from '@views/Resume'

type Props = {
  data: TResumePageData
}

const ResumePage = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>{seo.resume.title}</title>
        <meta key="description" name="description" content={seo.home.content} />
      </Head>
      <Resume data={data} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = getContentData('pages', 'resume')

  return {
    props: {
      data,
    },
  }
}

export default ResumePage

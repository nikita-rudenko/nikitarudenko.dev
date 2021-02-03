import Head from 'next/head'

import seo from '@constants/seo'
import Resume from '@views/Resume'

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>{seo.resume.title}</title>
        <meta key="description" name="description" content={seo.home.content} />
      </Head>
      <Resume />
    </>
  )
}

export default ResumePage

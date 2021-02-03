import { NextPageContext } from 'next'
import Head from 'next/head'

import seo from '@constants/seo'
import Resume from '@views/Resume'

type Props = {
  isServer: boolean
}

const ResumePage = ({ isServer }: Props) => {
  return (
    <>
      <Head>
        <title>{seo.resume.title}</title>
        <meta key="description" name="description" content={seo.home.content} />
      </Head>
      <Resume isServer={isServer} />
    </>
  )
}

ResumePage.getInitialProps = async ({
  req,
}: NextPageContext): Promise<Props> => {
  return { isServer: !!req }
}

export default ResumePage

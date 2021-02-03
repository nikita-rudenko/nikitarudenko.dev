import { GithubIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
}

const GithubLink = ({ href }: Props) => {
  return (
    <ExtLink color="#4d4d4d" href={href} icon={<GithubIcon />} label="GitHub" />
  )
}

export default GithubLink

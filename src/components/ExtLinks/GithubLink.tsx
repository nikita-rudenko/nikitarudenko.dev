import { GithubIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
}

const GithubLink = ({ href }: Props) => {
  return (
    <ExtLink
      className="bg-monochrome-700"
      href={href}
      icon={<GithubIcon />}
      label="GitHub"
    />
  )
}

export default GithubLink

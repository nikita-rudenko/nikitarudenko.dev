import { ReactNode } from 'react'

import * as Styled from './ExtLink.styled'

type Props = {
  href: string
  label: string
  icon: ReactNode
  color?: string
}

const ExtLink = ({ href, label, icon, color }: Props) => {
  return (
    <Styled.Link href={href} color={color}>
      <span>{label}</span>
      <span>{icon}</span>
    </Styled.Link>
  )
}

export default ExtLink

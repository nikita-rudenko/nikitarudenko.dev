import Link from 'next/link'
import { ReactNode } from 'react'

import Card from '@components/Card'

import * as Styled from './NavRow.styled'

type NavRowItemType = {
  label: string
  href: string
  icon: ReactNode
}

type Props = {
  linksList: NavRowItemType[]
}

const NavRow = ({ linksList }: Props) => {
  return (
    <Styled.NavRow listLength={linksList.length}>
      {linksList.map(({ href, icon, label }) => {
        return (
          <Card key={label}>
            <Link href={href} passHref>
              <Styled.NavLink>
                <Styled.NavIconWrapper>{icon}</Styled.NavIconWrapper>
                <span>{label}</span>
              </Styled.NavLink>
            </Link>
          </Card>
        )
      })}
    </Styled.NavRow>
  )
}

export default NavRow

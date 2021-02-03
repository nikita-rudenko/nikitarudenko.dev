import Link from 'next/link'
import { ReactNode } from 'react'

import * as Styled from './Clickable.styled'

interface ClickableProps {
  children: ReactNode
  withNotificationDot?: boolean
}

interface AsButtonProps extends ClickableProps {
  as: 'button'
  onClick: () => void
  href?: never
}

interface AsLinkProps extends ClickableProps {
  as: 'a'
  href: string
  onClick?: never
}

type Props = AsButtonProps | AsLinkProps

const NotificationDot = () => {
  return (
    <Styled.NotificationDot>
      <span />
      <span />
    </Styled.NotificationDot>
  )
}

export const Clickable = ({
  children,
  onClick,
  as,
  href,
  withNotificationDot = false,
}: Props) => {
  return (
    <>
      {as === 'a' && href ? (
        <Link href={href} passHref>
          <Styled.Clickable as={as} onClick={onClick}>
            {children}
            {withNotificationDot && <NotificationDot />}
          </Styled.Clickable>
        </Link>
      ) : (
        <Styled.Clickable as={as} onClick={onClick}>
          {children}
          {withNotificationDot && <NotificationDot />}
        </Styled.Clickable>
      )}
    </>
  )
}

export default Clickable

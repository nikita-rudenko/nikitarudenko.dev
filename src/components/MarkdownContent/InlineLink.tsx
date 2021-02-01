import NextLink from 'next/link'
import styled, { css } from 'styled-components'

import { TSpreadProps } from '@typings/commonPropTypes'

const InlineLink = styled.a(
  ({ theme: { colors, font } }) => css`
    font-weight: ${font.weight.bold};
    color: ${colors.link};

    &:hover {
      text-decoration: underline;
    }
  `
)

const Link = ({ children, ...props }: TSpreadProps) => {
  const { href } = props

  if (href) {
    if (href.startsWith('http')) {
      return <InlineLink {...props}>{children}</InlineLink>
    }

    if (href.startsWith('/')) {
      return (
        <NextLink href={href}>
          <InlineLink {...props}>{children}</InlineLink>
        </NextLink>
      )
    }
  }

  return <span>{children}</span>
}

export default Link

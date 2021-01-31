import styled, { css } from 'styled-components'

import slugify from '@utils/slugify'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const HeadingWrapper = styled.h1<{ variant: HeadingVariant }>(
  ({ variant, theme: { breakpoints, font } }) => css`
    font-weight: ${font.weight.bold};
    margin: 2rem 0 0.5rem;

    ${variant === 'h1' && `font-size: ${font.size['3xl']};`}
    ${variant === 'h2' && `font-size: ${font.size['2xl']};`}
      ${variant === 'h3' && `font-size: ${font.size.xl};`}
      ${variant === 'h4' && `font-size: ${font.size.lg};`}
      ${variant === 'h5' && `font-size: ${font.size.base};`}
      ${variant === 'h6' && `font-size: ${font.size.base};`}
  
      @media (min-width: ${breakpoints.md}) {
      ${variant === 'h1' && `font-size: ${font.size['4xl']};`}
      ${variant === 'h2' && `font-size: ${font.size['3xl']};`}
        ${variant === 'h3' && `font-size: ${font.size['2xl']};`}
        ${variant === 'h4' && `font-size: ${font.size.xl};`}
        ${variant === 'h5' && `font-size: ${font.size.lg};`}
        ${variant === 'h6' && `font-size: ${font.size.base};`}
    }
  `
)

export const HeadingLink = styled.a(
  () => css`
    &:hover {
      color: #434190;
      text-decoration: underline;
    }
  `
)

type Props = {
  variant: HeadingVariant
  children: string
}

const Heading = ({ variant, children }: Props) => {
  const id = slugify(children ? children[0].toString() : '')

  return (
    <HeadingWrapper as={variant} variant={variant}>
      <HeadingLink id={`#${id}`} href={`#${id}`}>
        {children}
      </HeadingLink>
    </HeadingWrapper>
  )
}

export default Heading

import { useRouter } from 'next/dist/client/router'
import { createElement, ReactNode } from 'react'

import { TRenderProps } from '@typings/commonPropTypes'
import slugify from '@utils/slugify'

const fontSizeMap: {
  [x: string]: string
} = {
  h1: 'text-3xl md:text-4xl',
  h2: 'text-2xl md:text-3xl',
  h3: 'text-xl md:text-2xl',
  h4: 'text-lg md:text-xl',
  h5: 'text-base md:text-lg',
  h6: 'text-base md:text-base',
}

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
  children: ReactNode
  variant: HeadingVariant
}

const Heading = ({ children, variant }: Props) => {
  return createElement(
    variant,
    {
      className: `${fontSizeMap[variant]} mt-8 mb-2 font-bold`,
    },
    children
  )
}

const createHeading = (variant: HeadingVariant) => ({
  children,
}: TRenderProps) => {
  const id = slugify(children ? children.toString() : '')
  const { asPath } = useRouter()

  return (
    <Heading variant={variant}>
      <a
        className="hover:text-indigo-800 hover:underline"
        href={`${asPath}#${id}`}
        id={id}
      >
        {children}
      </a>
    </Heading>
  )
}

export default createHeading

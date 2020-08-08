import Link from 'next/link'
import React, { ReactNode } from 'react'

import links from '@constants/links'

type Props = {
  children?: ReactNode
  [x: string]: any
}

const Layout = ({ children, ...props }: Props) => (
  <div {...props}>{children}</div>
)

Layout.Header = ({ ...props }: Props) => (
  <header {...props}>
    <ul className="flex px-2 py-4 text-sm font-bold bg-white md:py-6 md:px-16 font-body md:text-base text-mononchrome-800">
      {links.map(({ href, label }) => {
        return (
          <Link href={href} key={label}>
            <a className="p-2 mr-4 rounded-md hover:bg-mononchrome-100">
              <li>{label}</li>
            </a>
          </Link>
        )
      })}
    </ul>
  </header>
)

Layout.Body = ({ children, ...props }: Props) => (
  <main {...props}>{children}</main>
)

Layout.Footer = ({ ...props }: Props) => (
  <footer {...props}>
    <div className="flex flex-col justify-center px-4 py-4 bg-white sm:flex-row sm:items-center sm:justify-evenly md:py-8 md:px-16 font-body text-mononchrome-800">
      <div className="text-sm md:text-base">
        Made using{' '}
        <FooterLink className="hover:bg-black" href="https://nextjs.org/">
          Next.js
        </FooterLink>
        ,{' '}
        <FooterLink
          className="hover:bg-teal-500"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </FooterLink>
        , and{' '}
        <FooterLink className="hover:bg-green-400" href="https://forestry.io/">
          Forestry.io
        </FooterLink>
      </div>

      <div className="text-sm sm:ml-auto">
        <span className="font-bold">MIT License © 2020</span>
      </div>
    </div>
  </footer>
)

const FooterLink = ({
  children,
  className,
  href,
}: {
  children: ReactNode
  href: string
  className?: string
}) => {
  return (
    <a className={`font-bold hover:text-white ${className}`} href={href}>
      {children}
    </a>
  )
}

export default Layout

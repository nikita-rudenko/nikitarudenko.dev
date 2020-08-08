import { ReactNode } from 'react'

import { TSpreadProps } from '@typings/commonPropTypes'

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

const Footer = ({ ...props }: TSpreadProps) => (
  <footer {...props}>
    <div className="flex flex-col justify-center max-w-screen-xl px-4 py-4 mx-auto bg-white sm:flex-row sm:items-center sm:justify-evenly md:py-8 md:px-16 font-body text-mononchrome-800">
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

export default Footer

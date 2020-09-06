import clsx from 'clsx'

import { TSpreadProps } from '@typings/commonPropTypes'

import FooterLink from './FooterLink'

const Footer = ({ className = '', ...props }: TSpreadProps) => (
  <footer
    className={clsx(
      'border-t-2 border-monochrome-100 dark:border-monochrome-700',
      className
    )}
    {...props}
  >
    <div className="flex flex-col justify-center max-w-screen-xl px-4 py-4 mx-auto sm:flex-row sm:items-center sm:justify-evenly md:py-8 md:px-16 font-body">
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

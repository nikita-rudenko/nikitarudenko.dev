import Link from 'next/link'

import links from '@constants/links'
import { TSpreadProps } from '@typings/commonPropTypes'

const Header = ({ ...props }: TSpreadProps) => (
  <header {...props}>
    <ul className="flex max-w-screen-xl px-2 py-4 mx-auto text-sm font-bold bg-white md:py-6 md:px-16 font-body md:text-base text-mononchrome-800">
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

export default Header

import Link from 'next/link'

import { SOCIAL_LINKS_LIST } from '@constants/links'

function SocialBlock() {
  return (
    <div className="grid content-center justify-center grid-cols-4 col-span-1 gap-2 md:gap-5 sm:col-span-2">
      {SOCIAL_LINKS_LIST.map(({ label, href, emoji }) => (
        <div
          key={label}
          className="text-sm font-bold md:text-xl font-body hover-bg-grayout"
        >
          <Link href={href}>
            <a className="flex flex-col items-center justify-center p-2 sm:flex-row sm:p-4">
              <span className="flex items-center justify-center sm:mr-2">
                {emoji}
              </span>
              <span>{label}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SocialBlock

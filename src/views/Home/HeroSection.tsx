import Link from 'next/link'

import { HeartIcon, ReactIcon, TriangleIcon } from '@components/SVG'

const HeroSection = (): JSX.Element => {
  return (
    <section className="px-2 py-32 lg:px-6 font-display">
      <h1 className="text-4xl font-bold text-center md:text-5xl">
        <span>Hey! My name is </span>
        <Link href="/about">
          <a className="inline-block px-4 transition duration-200 ease-in bg-yellow-400 text-monochrome-800 hover:bg-yellow-400">
            Nikita Rudenko
          </a>
        </Link>
      </h1>

      <h2 className="max-w-xs pt-4 mx-auto text-center md:text-xl sm:text-base sm:max-w-none font-body">
        I am a <span className="font-bold">web developer</span> who{' '}
        <HeartIcon className="w-4 h-4 text-red-600 md:w-6 md:h-6" /> to build
        great things with{' '}
        <a
          href="https://reactjs.org/"
          className="inline-flex items-center font-bold text-blue-700"
        >
          React <ReactIcon className="w-4 h-4 ml-1 md:w-6 md:h-6" />
        </a>{' '}
        and{' '}
        <a
          href="https://nextjs.org/"
          className="inline-flex items-center px-1 font-bold text-black dark:bg-white"
        >
          Next.js <TriangleIcon className="w-3 h-3 ml-1 md:w-4 md:h-4" />
        </a>
      </h2>
    </section>
  )
}

export default HeroSection

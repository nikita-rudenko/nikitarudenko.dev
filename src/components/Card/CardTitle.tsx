import Link from 'next/link'

type Props = {
  title: string
  href?: string
}

const CardTitle = ({ title, href }: Props) => {
  return (
    <h3 className="px-2 py-2 text-xl font-bold md:px-3 md:text-2xl font-body">
      {href ? (
        <Link href={href}>
          <a className="px-1 mb-4 transition duration-300 border-b-4 border-yellow-400 border-opacity-75 hover:bg-yellow-400 hover:border-transparent hover:bg-opacity-75 focus:bg-yellow-400 focus:border-transparent focus:bg-opacity-75 dark:hover:text-monochrome-800">
            {title}
          </a>
        </Link>
      ) : (
        <span className="px-1 mb-4 transition duration-300 border-b-4 border-yellow-400 border-opacity-75">
          {title}
        </span>
      )}
    </h3>
  )
}

export default CardTitle

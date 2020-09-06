type Props = {
  label: string
}

const Tag = ({ label }: Props) => (
  <div className="inline px-1 m-1 text-sm font-bold bg-white border-2 border-opacity-50 rounded-md dark:text-white dark:bg-monochrome-700 font-body text-monochrome-700 border-monochrome-700">
    {label}
  </div>
)

export default Tag

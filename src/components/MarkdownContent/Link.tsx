import { TRenderProps } from '@typings/commonPropTypes'

const Link = ({ children }: TRenderProps) => {
  return (
    <a
      tabIndex={0}
      className="font-bold text-indigo-800 cursor-pointer hover:underline"
    >
      {children}
    </a>
  )
}

export default Link

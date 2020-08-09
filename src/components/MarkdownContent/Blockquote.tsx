import { TRenderProps } from '@typings/commonPropTypes'

const Blockquote = ({ children }: TRenderProps) => {
  return (
    <blockquote className="pl-4 mb-4 font-hairline border-l-2 border-gray-700">
      {children}
    </blockquote>
  )
}

export default Blockquote

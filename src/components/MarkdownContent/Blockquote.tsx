import { TRenderProps } from '@typings/commonPropTypes'

const Blockquote = ({ children }: TRenderProps) => {
  return (
    <blockquote className="pl-2 mb-4 font-hairline border-l-2 border-gray-700 md:pl-4">
      {children}
    </blockquote>
  )
}

export default Blockquote

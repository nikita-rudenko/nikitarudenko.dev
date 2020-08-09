import { TRenderProps } from '@typings/commonPropTypes'

const Paragraph = ({ children }: TRenderProps) => {
  return <p className="mb-4">{children}</p>
}

export default Paragraph

import { TRenderProps } from '@typings/commonPropTypes'

const Body = ({ children, ...props }: TRenderProps) => (
  <main {...props}>{children}</main>
)

export default Body

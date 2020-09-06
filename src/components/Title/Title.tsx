import { TRenderProps } from '@typings/commonPropTypes'

const Title = ({ children }: TRenderProps) => (
  <h1 className="inline py-2 text-4xl font-bold bg-white shadow-md text-monochrome-800 font-display md:text-4xl md:py-4">
    <span
      style={{
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
      }}
      className="inline p-2 bg-yellow-400 bg-opacity-75 md:p-4"
    >
      {children}
    </span>
  </h1>
)

export default Title

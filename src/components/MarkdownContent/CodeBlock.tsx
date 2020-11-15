import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import { TRenderProps } from '@typings/commonPropTypes'

import codeTheme from './codeTheme'

const CodeBlock = ({ children, className }: TRenderProps) => {
  return (
    <SyntaxHighlighter
      language={className?.replace(/lang-/, '') || 'text'}
      style={codeTheme}
      showLineNumbers
      lineNumberStyle={{ color: '#495162', paddingRight: '16px' }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

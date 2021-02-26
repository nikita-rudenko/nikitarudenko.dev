import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import codeTheme from './codeTheme'
import { InlineCode } from './InlineCode'

type Props = {
  children: string
  className: string
}

const CodeBlock = ({ children, className }: Props) => {
  return className ? (
    <SyntaxHighlighter
      language={className?.replace(/lang-/, '') || 'text'}
      style={codeTheme}
      showLineNumbers
      lineNumberStyle={{ color: '#495162', paddingRight: '16px' }}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <InlineCode>{children}</InlineCode>
  )
}

export default CodeBlock

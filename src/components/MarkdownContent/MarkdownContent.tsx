import Markdown from 'markdown-to-jsx'

import Blockquote from './Blockquote'
import CodeBlock from './CodeBlock'
import { Details } from './Details'
import Heading from './Heading'
import Image from './Image'
import InlineLink from './InlineLink'
import { OrderedList, UnorderedList, ListItem } from './Lists'
import Paragraph from './Paragraph'
import { Separator } from './Separator'

const options = {
  overrides: {
    img: { component: Image },
    p: { component: Paragraph },
    a: { component: InlineLink },
    ol: { component: OrderedList },
    ul: { component: UnorderedList },
    li: { component: ListItem },
    h1: { component: Heading, props: { variant: 'h1' } },
    h2: { component: Heading, props: { variant: 'h2' } },
    h3: { component: Heading, props: { variant: 'h3' } },
    h4: { component: Heading, props: { variant: 'h4' } },
    h5: { component: Heading, props: { variant: 'h5' } },
    h6: { component: Heading, props: { variant: 'h6' } },
    blockquote: { component: Blockquote },
    code: { component: CodeBlock },
    details: { component: Details },
    hr: { component: Separator },
  },
}

type Props = { content: string }

function MarkdownContent({ content }: Props) {
  return <Markdown options={options}>{content}</Markdown>
}

export default MarkdownContent

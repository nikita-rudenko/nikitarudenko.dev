import Blockquote from './Blockquote'
import createHeading from './Heading'
import Image from './Image'
import Link from './Link'
import { OrderedList, UnorderedList, ListItem } from './List'
import Paragraph from './Paragraph'

const options = {
  overrides: {
    img: { component: Image },
    p: { component: Paragraph },
    a: { component: Link },
    ol: { component: OrderedList },
    ul: { component: UnorderedList },
    li: { component: ListItem },
    h1: { component: createHeading('h1') },
    h2: { component: createHeading('h2') },
    h3: { component: createHeading('h3') },
    h4: { component: createHeading('h4') },
    h5: { component: createHeading('h5') },
    h6: { component: createHeading('h6') },
    blockquote: { component: Blockquote },
  },
}

export default options

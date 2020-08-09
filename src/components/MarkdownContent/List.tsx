import { TRenderProps } from '@typings/commonPropTypes'

const OrderedList = ({ children }: TRenderProps) => {
  return <ol className="pl-4 mb-4 list-decimal md:pl-8">{children}</ol>
}

const UnorderedList = ({ children }: TRenderProps) => {
  return <ul className="pl-4 mb-4 list-disc md:pl-8">{children}</ul>
}

const ListItem = ({ children }: TRenderProps) => {
  return <li className="mb-2">{children}</li>
}

export { OrderedList, UnorderedList, ListItem }

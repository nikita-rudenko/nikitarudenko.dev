import { TRenderProps } from '@typings/commonPropTypes'

const OrderedList = ({ children }: TRenderProps) => {
  return <ol className="pl-8 mb-4 text-base list-decimal">{children}</ol>
}

const UnorderedList = ({ children }: TRenderProps) => {
  return <ul className="pl-8 mb-4 text-base list-disc">{children}</ul>
}

const ListItem = ({ children }: TRenderProps) => {
  return <li className="mb-2">{children}</li>
}

export { OrderedList, UnorderedList, ListItem }

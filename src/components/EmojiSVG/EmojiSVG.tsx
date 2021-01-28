type Props = {
  src: string
}

const EmojiSVG = ({ src }: Props) => {
  return <span dangerouslySetInnerHTML={{ __html: src }} />
}

export default EmojiSVG

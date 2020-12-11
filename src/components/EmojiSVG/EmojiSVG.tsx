type Props = {
  src: string
}

const EmojiSVG = ({ src }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: src }}></div>
}

export default EmojiSVG

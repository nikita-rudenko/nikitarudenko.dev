type Props = {
  src: string
  alt: string
}

const Image = ({ src, alt }: Props) => {
  return <img className="my-8 rounded-md" src={src} alt={alt} />
}

export default Image

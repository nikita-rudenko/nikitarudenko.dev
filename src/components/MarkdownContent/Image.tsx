type Props = {
  src: string
  alt: string
}

const Image = ({ src, alt }: Props) => {
  return <img className="my-4 rounded-md md:my-8" src={src} alt={alt} />
}

export default Image

import Link from 'next/link'

import { HeartIcon, ReactIcon, TriangleIcon } from '@components/SVG'

import * as Styled from './HeroSection.styled'

const HeroSection = (): JSX.Element => {
  return (
    <Styled.HeroContainer>
      <Styled.Title>
        <span>Hey! My name is </span>
        <Link href="/about" passHref>
          <Styled.NameLink>Nikita Rudenko</Styled.NameLink>
        </Link>
      </Styled.Title>

      <Styled.Subtitle>
        I am a <strong>web developer</strong> who <HeartIcon /> to build great
        things with{' '}
        <Styled.TechLink color="#2b6cb0" href="https://reactjs.org/">
          React <ReactIcon />
        </Styled.TechLink>{' '}
        and{' '}
        <Styled.TechLink color="#000" href="https://nextjs.org/">
          Next.js <TriangleIcon />
        </Styled.TechLink>
      </Styled.Subtitle>
    </Styled.HeroContainer>
  )
}

export default HeroSection

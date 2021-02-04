import domtoimage from 'dom-to-image'
import Head from 'next/head'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { GithubLink, OtherLink } from '@components/ExtLinks'
import StickerHeading from '@components/StickerHeading'
import Tag from '@components/Tag'

import * as Styled from './Article.styled'

type Props = {
  title: string
  children: ReactNode
  tags?: Array<any>
  links?: Array<any>
}

const Article = ({ title, tags, links, children }: Props) => {
  const ref = useRef(null)
  const [img, setImg] = useState('')

  const gen = useCallback(async () => {
    const st = await domtoimage.toJpeg(ref.current!)
    setImg(st)
  }, [setImg])

  useEffect(() => {
    gen()
  }, [gen])

  return (
    <>
      <Head>
        <meta name="og:image" content={img} />
      </Head>
      <Styled.ArticleHeader ref={ref}>
        <Styled.TitleWrapper>
          <StickerHeading>{title}</StickerHeading>
        </Styled.TitleWrapper>
      </Styled.ArticleHeader>

      <Styled.ArticleBody>
        <Styled.ArticleContent>
          {(tags || links) && (
            <Styled.ArticleMeta>
              {tags && (
                <Styled.Tags>
                  {tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Styled.Tags>
              )}

              {links && (
                <Styled.Links>
                  {links.map(({ href, label }) => {
                    return label.toLowerCase() === 'github' ? (
                      <GithubLink key={label} href={href} />
                    ) : (
                      <OtherLink key={label} href={href} label={label} />
                    )
                  })}
                </Styled.Links>
              )}
            </Styled.ArticleMeta>
          )}

          {children}
        </Styled.ArticleContent>
      </Styled.ArticleBody>
    </>
  )
}

export default Article

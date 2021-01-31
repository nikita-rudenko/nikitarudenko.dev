import React, { ReactNode } from 'react'

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
  return (
    <>
      <Styled.ArticleHeader>
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

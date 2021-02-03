import { ReactNode } from 'react'

import { Title, TitleContent } from '@components/ContentCard/ContentCard.styled'

import * as Styled from './Resume.styled'

type Props = {
  title: string
  children: ReactNode
}

const ResumeSection = ({ title, children }: Props) => {
  return (
    <Styled.Section>
      <Title>
        <TitleContent>{title}</TitleContent>
      </Title>

      <Styled.SectionContent>{children}</Styled.SectionContent>
    </Styled.Section>
  )
}

export default ResumeSection

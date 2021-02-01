import { ReactNode } from 'react'

import * as Styled from './MainSection.styled'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props): JSX.Element => {
  return (
    <Styled.MainSectionContainer>
      <Styled.ContentGrid>{children}</Styled.ContentGrid>
    </Styled.MainSectionContainer>
  )
}

export default MainSection

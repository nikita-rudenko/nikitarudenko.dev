import { useRouter } from 'next/router'

import Clickable from '@components/Clickable'
import Layout from '@components/Layout'
import { ArrowLeftIcon, PrinterIcon } from '@components/SVG'
import { TResumePageData } from '@typings/contentTypes'

import { ListItem } from './_shared/ListItem.styled'
import JobCard from './JobCard'
import Profile from './Profile'
import * as Styled from './Resume.styled'
import ResumeSection from './ResumeSection'

type Props = {
  data: TResumePageData
}

const Resume = ({ data }: Props) => {
  const router = useRouter()

  const print = () => {
    process.browser && window.print()
  }

  return (
    <Layout>
      <Layout.Body
        backgroundType="gradient"
        style={{
          minWidth: '52rem',
          padding: '2rem',
        }}
      >
        <Styled.Wrapper>
          <Styled.ButtonsRow>
            <Clickable as="button" onClick={router.back}>
              <ArrowLeftIcon />
              <span>Back</span>
            </Clickable>

            <Clickable as="button" onClick={print}>
              <PrinterIcon />
              <span>Print</span>
            </Clickable>
          </Styled.ButtonsRow>

          <Styled.Paper>
            <Styled.Side>
              <Profile />

              <ResumeSection title="Contacts">
                <Styled.List>
                  {data.contacts.map(({ key, value }) => {
                    return (
                      <ListItem key={key}>
                        <span>{key}</span>
                        <span>{value}</span>
                      </ListItem>
                    )
                  })}
                </Styled.List>
              </ResumeSection>

              <ResumeSection title="Professional Skills">
                <Styled.List>
                  {data.skills.map(({ key, value }) => {
                    return (
                      <ListItem key={key}>
                        <span>{key}</span>
                        <span>{value}</span>
                      </ListItem>
                    )
                  })}
                </Styled.List>
              </ResumeSection>
            </Styled.Side>

            <Styled.Side>
              <ResumeSection title="About Me">
                <Styled.Description>{data.about}</Styled.Description>
              </ResumeSection>

              <ResumeSection title="Work Summary">
                <Styled.JobsGrid>
                  {data.work_summary.map((job, i) => (
                    <JobCard key={i} {...job} />
                  ))}
                </Styled.JobsGrid>
              </ResumeSection>
            </Styled.Side>
          </Styled.Paper>
        </Styled.Wrapper>
      </Layout.Body>
    </Layout>
  )
}

export default Resume

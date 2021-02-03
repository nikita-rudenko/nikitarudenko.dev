import { useRouter } from 'next/router'

import Clickable from '@components/Clickable'
import Layout from '@components/Layout'
import { ArrowLeftIcon, HomeIcon, PrinterIcon } from '@components/SVG'

import { ListItem } from './_shared/ListItem.styled'
import JobCard from './JobCard'
import Profile from './Profile'
import { ABOUT_ME, CONTACTS, JOBS, SKILLS } from './resume.constants'
import * as Styled from './Resume.styled'
import ResumeSection from './ResumeSection'

type Props = {
  isServer: boolean
}

const Resume = ({ isServer }: Props) => {
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
            {isServer ? (
              <Clickable as="a" href="/">
                <HomeIcon />
                <span>Home</span>
              </Clickable>
            ) : (
              <Clickable as="button" onClick={router.back}>
                <ArrowLeftIcon />
                <span>Back</span>
              </Clickable>
            )}
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
                  {CONTACTS.map(({ name, value }) => {
                    return (
                      <ListItem key={name}>
                        <span>{name}</span>
                        <span>{value}</span>
                      </ListItem>
                    )
                  })}
                </Styled.List>
              </ResumeSection>

              <ResumeSection title="Professional Skills">
                <Styled.List>
                  {SKILLS.map(({ name, value }) => {
                    return (
                      <ListItem key={name}>
                        <span>{name}</span>
                        <span>{value}</span>
                      </ListItem>
                    )
                  })}
                </Styled.List>
              </ResumeSection>
            </Styled.Side>

            <Styled.Side>
              <ResumeSection title="About Me">
                <Styled.Description>{ABOUT_ME}</Styled.Description>
              </ResumeSection>

              <ResumeSection title="Work Summary">
                <Styled.JobsGrid>
                  {JOBS.map((job, i) => (
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

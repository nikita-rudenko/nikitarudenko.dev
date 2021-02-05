import { TJob } from '@typings/contentTypes'

import * as Styled from './JobCard.styled'

type Props = TJob

const JobCard = (job: Props) => {
  return (
    <Styled.JobCard>
      <Styled.JobTitle>
        <span>{job.title}</span>
        <span>
          {job.date_from} - {job.date_to}
        </span>
      </Styled.JobTitle>

      <Styled.List>
        <span>@{job.company}</span>
        {job.responsibilities.map((r) => (
          <li key={r}>- {r}</li>
        ))}
      </Styled.List>
    </Styled.JobCard>
  )
}

export default JobCard

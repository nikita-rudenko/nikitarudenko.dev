import * as Styled from './JobCard.styled'

type Props = {
  title: string
  company: string
  dates: string
  responsibilities: string[]
}

const JobCard = ({ title, company, dates, responsibilities }: Props) => {
  return (
    <Styled.JobCard>
      <Styled.JobTitle>
        <span>{title}</span>
        <span>{dates}</span>
      </Styled.JobTitle>

      <Styled.List>
        <span>@{company}</span>
        {responsibilities.map((r) => (
          <li key={r}>- {r}</li>
        ))}
      </Styled.List>
    </Styled.JobCard>
  )
}

export default JobCard

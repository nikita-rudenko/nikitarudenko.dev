import * as Styled from './Profile.styled'

const Profile = () => {
  return (
    <Styled.Profile>
      <Styled.Avatar>
        <img src="/uploads/avatar.jpg" alt="Avatar" />
      </Styled.Avatar>

      <Styled.Name>
        <h1>Nikita Rudenko</h1>
        <h2>Front-end developer</h2>
      </Styled.Name>
    </Styled.Profile>
  )
}

export default Profile

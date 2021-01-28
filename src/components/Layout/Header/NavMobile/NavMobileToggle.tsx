import * as Styled from './NavMobileToggle.styled'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const NavMobileToggle = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Styled.Toggle onClick={() => setIsOpen(!isOpen)}>
      <Styled.ToggleIcon isOpen={isOpen}>
        <span />
        <span />
        <span />
        <span />
      </Styled.ToggleIcon>
    </Styled.Toggle>
  )
}

export default NavMobileToggle

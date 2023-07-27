import { useContext } from "react"
import { HeaderContainer } from "./style"
import { UserContext } from "../../providers/UserContext"

const Header = () => {
  const { logout } = useContext(UserContext)
  return (
    <HeaderContainer>
      <div>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Heather&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale' />
        <span>Fabio Luiz</span>
      </div>
      <button onClick={logout}>Exit</button>
    </HeaderContainer>
  )
}

export default Header
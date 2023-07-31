import { useContext } from "react"
import { HeaderContainer, DeleteAndExitContainer } from "./style"
import { UserContext } from "../../providers/UserContext"
import { DashContext } from "../../providers/DashContext"

const Header = () => {
  const { logout, user, deleteUser } = useContext(UserContext)
  const { setProfileEditModal, profileEditModal } = useContext(DashContext)

  return (
    <HeaderContainer>
      <div>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Heather&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale' />
        <section>
          <span>{user?.name}</span>
          <span>{user?.email}</span>
        </section>
        <button onClick={() => setProfileEditModal(!profileEditModal)}>Edit Profile</button>
      </div>
      <DeleteAndExitContainer>
        <button onClick={deleteUser}>Delete User</button>
        <button onClick={logout}>Exit</button>
      </DeleteAndExitContainer>
    </HeaderContainer>
  )
}

export default Header
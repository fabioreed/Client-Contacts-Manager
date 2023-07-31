import { useContext } from "react"
import { HeaderContainer, DeleteAndExitContainer, Avatar } from "./style"
import { UserContext } from "../../providers/UserContext"
import { DashContext } from "../../providers/DashContext"
import AvatarPicture from '../../assets/avatar.avif'

const Header = () => {
  const { logout, user, deleteUser } = useContext(UserContext)
  const { setProfileEditModal, profileEditModal } = useContext(DashContext)

  return (
    <HeaderContainer>
      <Avatar>
        <img src={AvatarPicture} />
        <section>
          <span>{user?.name}</span>
        </section>
      </Avatar>
      <DeleteAndExitContainer>
        <button onClick={() => setProfileEditModal(!profileEditModal)}>Edit Profile</button>
        <button onClick={deleteUser}>Delete User</button>
        <button onClick={logout}>Exit</button>
      </DeleteAndExitContainer>
    </HeaderContainer>
  )
}

export default Header
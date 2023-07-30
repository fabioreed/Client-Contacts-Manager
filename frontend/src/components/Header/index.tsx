import { useContext } from "react"
import { HeaderContainer } from "./style"
import { UserContext } from "../../providers/UserContext"
// import { api } from "../../services/api"

const Header = () => {
  const { logout, user } = useContext(UserContext)

  // const deleteUser = async (id: string) => {
  //   const token = localStorage.getItem('@clientToken')
  //   try {
  //     await api.delete(`clients/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })

  //     const remove = client.filter(item => {
  //       return item
  //     })
  //   }
  // }

  return (
    <HeaderContainer>
      <div>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Heather&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale' />
        <section>
          <span>{user?.name}</span>
          <span>{user?.email}</span>
        </section>
      </div>
      {/* <button onClick={deleteUser}>Delete User</button> */}
      <button onClick={logout}>Exit</button>
    </HeaderContainer>
  )
}

export default Header
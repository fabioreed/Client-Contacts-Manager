import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { BackgroundModalEditProfile, HeaderModalContainer, ModalContainerEditProfile } from "./style"
import { DashContext } from "../../providers/DashContext"

const EditProfileForm = () => {
  const { user, updateUser } = useContext(UserContext)
  const { setProfileEditModal, profileEditModal } = useContext(DashContext)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    number: user?.number || "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await updateUser(formData)
    setProfileEditModal(!profileEditModal)
  }

  return (
    <BackgroundModalEditProfile>
      <ModalContainerEditProfile onSubmit={handleSubmit}>
        <HeaderModalContainer>
          <h4>Update Your Infomations</h4>
          <button onClick={() => setProfileEditModal(!profileEditModal)}>X</button>
        </HeaderModalContainer>
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Number</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit">Update Profile</button>
      </ModalContainerEditProfile>
    </BackgroundModalEditProfile>
  )
}

export default EditProfileForm

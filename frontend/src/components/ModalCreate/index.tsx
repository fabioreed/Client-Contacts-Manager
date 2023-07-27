import { useContext } from "react"
import { BackgroundModal, CloseBtn, FieldSet, ModalContainer } from "./style"
import { DashContext } from "../../providers/DashContext"

const ModalCreate = () => {
  const { setModal, modal } = useContext(DashContext)
  return (
    <BackgroundModal>
      <ModalContainer action="">
        <CloseBtn onClick={() => setModal(!modal)}>X</CloseBtn>
        <h2>Create a New Contact</h2>
        <FieldSet>
          <label>Name:</label>
          <input type="text" placeholder="Name your Contact" />
        </FieldSet>
        <FieldSet>
          <label>Email:</label>
          <input type="email" placeholder="Email of your Contact" />
        </FieldSet>
        <FieldSet>
          <label>Phone Number:</label>
          <input type="number" placeholder="Phone Number" />
        </FieldSet>
        <button type="submit">+ Add</button>
      </ModalContainer>
    </BackgroundModal>
  )
}

export default ModalCreate
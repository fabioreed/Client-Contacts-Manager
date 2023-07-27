import { useContext } from "react"
import { BackgroundModal, CloseBtn, FieldSet, ModalContainer } from "./style"
import { DashContext } from "../../providers/DashContext"

const ModalEdit = () => {
  const { setEditModal, editModal } = useContext(DashContext)
  return (
    <BackgroundModal>
      <ModalContainer action="">
        <CloseBtn onClick={() => setEditModal(!editModal)}>X</CloseBtn>
        <h3>Edit your Contact</h3>
        <FieldSet>
          <label>Name:</label>
          <input type="text" placeholder="New Name" />
        </FieldSet>
        <FieldSet>
          <label>Email:</label>
          <input type="email" placeholder="New Email" />
        </FieldSet>
        <FieldSet>
          <label>Phone Number:</label>
          <input type="number" placeholder="New Number" />
        </FieldSet>
        <button type="submit">+ Add</button>
      </ModalContainer>
    </BackgroundModal>
  )
}

export default ModalEdit
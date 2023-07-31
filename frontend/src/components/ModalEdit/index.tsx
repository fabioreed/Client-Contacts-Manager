import { useContext } from "react"
import { BackgroundModal, CloseBtn, FieldSet, ModalContainer } from "./style"
import { DashContext, IClient } from "../../providers/DashContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../ModalCreate/validators"

interface IModalEditProps {
  id: string
  contact: IClient | any
}

const ModalEdit = ({ id, contact }: IModalEditProps) => {
  const { editContact, editedContact, setEditModal, editModal } = useContext(DashContext)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editedContact?.name || '',
      email: editedContact?.email || '',
      number: editedContact?.number || ''
    },
    resolver: yupResolver(schema)
  })

  const submit: any = async (data: any) => {
    await editContact(data, id)
    // window.location.reload()
    setEditModal(!editModal)
  }

  return (
    <BackgroundModal>
      <ModalContainer onSubmit={handleSubmit(submit)}>
        <CloseBtn onClick={() => setEditModal(!editModal)}>X</CloseBtn>
        <h3>Edit your Contact</h3>
        <FieldSet>
          <label>Name:</label>
          <input type="text" placeholder={contact.name} {...register('name')} />
        </FieldSet>
        <FieldSet>
          <label>Email:</label>
          <input type="email" placeholder={contact.email} {...register('email')} />
        </FieldSet>
        <FieldSet>
          <label>Phone Number:</label>
          <input type="number" placeholder={contact.number} {...register('number')} />
        </FieldSet>
        <button type="submit">Edit</button>
      </ModalContainer>
    </BackgroundModal>
  )
}

export default ModalEdit